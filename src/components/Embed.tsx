import type { ComponentProps } from "react";

export function Embed({
	url,
	title,
	iframeProps,
}: {
	url: string;
	title: string;
	iframeProps: ComponentProps<"iframe">;
}) {
	return (
		<div className="relative aspect-video">
			<iframe
				className="absolute inset-0 w-full h-full"
				src={url}
				title={title}
				{...iframeProps}
			/>
		</div>
	);
}
