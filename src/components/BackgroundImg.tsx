import Image from "next/image";
import type { ReactNode } from "react";

export function BackgroundImg({
	children,
	image,
	title,
}: {
	children: ReactNode;
	image: string;
	title: string;
}) {
	return (
		<div className="bg-primary/75 relative shadow-xl h-32 sm:h-screen">
			<Image
				className="absolute top-0 right-0 bottom-0 left-0 -z-10 w-full h-full object-cover"
				src={image}
				title={title}
				alt=""
				width={600}
				height={400}
			/>

			<div className="absolute top-0 h-full w-full flex justify-center px-6">
				{children}
			</div>
		</div>
	);
}
