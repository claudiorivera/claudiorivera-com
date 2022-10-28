import {
	Box,
	Button,
	Grid,
	Link,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import Image from "next/image";
import { PortfolioItemType } from "types";

type PortfolioItemProps = {
	portfolioItem: PortfolioItemType;
};
export const PortfolioItem = ({ portfolioItem }: PortfolioItemProps) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	if (!portfolioItem) return null;

	return (
		<Box my={!isMobile ? "7rem" : ""}>
			<Grid container spacing={2} sx={{ justifyContent: "center" }}>
				<Grid item md={6} sm={12}>
					<Link href={portfolioItem.demoLink}>
						<Typography variant="h1" align="center" gutterBottom>
							{portfolioItem.title}
						</Typography>
					</Link>
					<Link href={portfolioItem.demoLink}>
						<Box sx={{ width: "100%", height: "auto", position: "relative" }}>
							<Image
								style={{
									width: "100%",
									height: "auto",
								}}
								width={600}
								height={400}
								src={portfolioItem.screenshot}
								alt={`screenshot of ${portfolioItem.title}`}
							/>
						</Box>
					</Link>
					<Typography align="center" variant="body2">
						{portfolioItem.description}
					</Typography>
				</Grid>
				<Grid item md={6} sm={12}>
					<Typography variant="h2">Technologies Used:</Typography>
					<Typography
						variant="body1"
						component="div"
						dangerouslySetInnerHTML={{ __html: portfolioItem.content }}
					/>
					<Grid
						container
						direction="row"
						sx={{ justifyContent: "space-evenly" }}
						spacing={2}
					>
						<Grid item>
							<Button
								size="large"
								variant="outlined"
								color="secondary"
								href={portfolioItem.demoLink}
							>
								Live Demo
							</Button>
						</Grid>
						<Grid item>
							<Button
								size="large"
								variant="outlined"
								color="secondary"
								href={portfolioItem.githubLink}
							>
								View Source
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};
