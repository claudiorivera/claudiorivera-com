import { Layout } from "@/components/layout";
import Link from "next/link";

export default function HomePage() {
	return (
		<Layout coverImage="/images/joe-lemke-cr-cover-photo.jpg" title="Hello">
			<div className="font-serif prose-lg sm:prose-xl">
				<p>
					My name is Claudio. I&apos;ve been all over this beautiful Earth,
					playing drums and working for bands. I&apos;ve also been fortunate to
					have made some records with rad bands.
				</p>
				<p>I&apos;m endorsed by Promark, Evans, Sabian, and DW.</p>
				<p>
					I am also a software developer. Please visit my{" "}
					<Link href="/dev" className="text-primary">
						development
					</Link>{" "}
					page for more info.
				</p>
			</div>
		</Layout>
	);
}
