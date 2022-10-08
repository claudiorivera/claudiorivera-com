import { Box } from "@mui/material";

type EmbedProps = {
	url: string;
	title: string;
	iframeProps: {
		[key: string]: string | boolean;
	};
};
export const Embed = ({ url, title, iframeProps }: EmbedProps) => (
	<Box
		sx={{
			position: "relative",
			aspectRatio: "16/9",
			marginBottom: "2rem",
		}}
	>
		<Box
			component="iframe"
			sx={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
			}}
			src={url}
			title={title}
			{...iframeProps}
		/>
	</Box>
);
