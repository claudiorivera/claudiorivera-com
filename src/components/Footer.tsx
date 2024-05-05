import Link from "next/link";

export function Footer() {
	return (
		<div className="flex justify-center items-center p-14 bg-primary text-primary-foreground">
			<Link href="https://github.com/claudiorivera/claudiorivera-com">
				Site made by me
			</Link>
			.&nbsp;
			<Link href="mailto:me@claudiorivera.com">Email me&nbsp;</Link>or connect
			on&nbsp;
			<Link href="https://www.linkedin.com/in/atclaudiorivera/">LinkedIn</Link>.
		</div>
	);
}
