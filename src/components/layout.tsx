import { ArrowDown } from "lucide-react";
import Head from "next/head";
import type { ReactNode } from "react";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { HeroImageContainer } from "~/components/hero-image-container";

const meta = {
	title: "Claudio Rivera",
	description: "Drummer | Developer | Drum Tech",
};

export function Layout({
	children,
	coverImage,
	title = "Home",
}: {
	children: ReactNode;
	coverImage: string;
	title?: string;
}) {
	return (
		<>
			<Head>
				<title>{`${title} | Claudio Rivera`}</title>
				<meta name="description" content={meta.description} />
				<meta
					property="og:title"
					content={`${title} | Claudio Rivera`}
					key="title"
				/>
				<meta property="og:description" content={meta.description} />
				<meta property="og:type" content="website" />
			</Head>

			<div className="flex flex-col gap-8 sm:gap-16">
				<HeroImageContainer image={coverImage} title="background">
					<Header siteDescription={meta.description} siteTitle={meta.title} />
					<div className="hidden sm:block bottom-0 text-primary-foreground absolute text-center">
						<div className="flex flex-col items-center gap-1 p-4">
							<h1 className="text-5xl font-bold">{title}</h1>
							<ArrowDown className="w-10 h-10" />
						</div>
					</div>
				</HeroImageContainer>

				<div className="container mx-auto max-w-7xl">
					<main id="main">{children}</main>
				</div>

				<Footer />
			</div>
		</>
	);
}
