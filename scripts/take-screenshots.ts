import * as fs from "node:fs";
import * as path from "node:path";
import matter from "gray-matter";
import { chromium, type Page } from "playwright";

interface DevPortfolioItem {
	title: string;
	demoLink: string;
	requiresAuth?: boolean;
}

const DESKTOP_VIEWPORT = { width: 1236, height: 836 };
const MOBILE_VIEWPORT = { width: 428, height: 814 };
const OUTPUT_DIR = path.join(
	process.cwd(),
	"public",
	"images",
	"dev-portfolio",
);

async function getDevPortfolioItems() {
	const devDir = path.join(process.cwd(), "src", "content", "dev");
	const files = fs.readdirSync(devDir).filter((f) => f.endsWith(".md"));

	const items = new Map<string, DevPortfolioItem>();

	for (const file of files) {
		const slug = file.replace(".md", "");
		const content = fs.readFileSync(path.join(devDir, file), "utf-8");
		const { data } = matter(content);

		items.set(slug, {
			title: data.title,
			demoLink: data.demoLink,
			requiresAuth: data.requiresAuth ?? false,
		});
	}

	return items;
}

async function takeScreenshot(
	page: Page,
	url: string,
	requiresAuth: boolean,
	viewport: { width: number; height: number },
	outputPath: string,
) {
	await page.setViewportSize(viewport);
	await page.goto(url);

	if (requiresAuth) {
		const signInButton = page.getByRole("button", {
			name: /sign in as demo user/i,
		});

		await signInButton.click();

		await signInButton.waitFor({ state: "detached" });

		const spinner = page.getByRole("img", { name: /loading/i });

		if (await spinner.isVisible()) {
			await spinner.waitFor({ state: "detached" });
		}

		// Wait an extra second to load external images
		await page.waitForTimeout(1000);
	}

	await page.screenshot({ path: outputPath, type: "png" });
	console.log(`✅ Saved: ${outputPath}`);
}

async function main() {
	console.log("Starting screenshot generation...\n");

	const items = await getDevPortfolioItems();
	const browser = await chromium.launch();
	const context = await browser.newContext();
	const page = await context.newPage();

	const errors: Array<string> = [];

	for (const [slug, item] of items) {
		console.log(`Processing: ${item.title} (${slug})`);

		const desktopPath = path.join(OUTPUT_DIR, `${slug}-desktop.png`);
		const mobilePath = path.join(OUTPUT_DIR, `${slug}-mobile.png`);

		try {
			await takeScreenshot(
				page,
				item.demoLink,
				item.requiresAuth ?? false,
				DESKTOP_VIEWPORT,
				desktopPath,
			);

			if (item.requiresAuth) {
				await context.clearCookies();
			}

			await takeScreenshot(
				page,
				item.demoLink,
				item.requiresAuth ?? false,
				MOBILE_VIEWPORT,
				mobilePath,
			);
		} catch (error) {
			const message = `Failed to capture ${item.title}: ${error instanceof Error ? error.message : error}`;
			console.error(`❌ ${message}`);
			errors.push(message);
		}
	}

	await browser.close();

	if (errors.length > 0) {
		console.error("Errors occurred during screenshot generation:");
		for (const e of errors) {
			console.error(`  - ${e}`);
		}
		process.exit(1);
	}

	console.log("🎉 Screenshot generation complete!");
}

main().catch((error) => {
	console.error("Error:", error);
	process.exit(1);
});
