import {
  Box,
  Button,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image, { StaticImageData } from "next/future/image";

export type PortfolioItemType = {
  id?: number;
  frontmatter: {
    title: string;
    description: string;
    demoLink: string;
    githubLink: string;
    screenshot: StaticImageData;
  };
  html: string;
};
type PortfolioItemProps = {
  portfolioItem: PortfolioItemType;
};
const PortfolioItem = ({ portfolioItem }: PortfolioItemProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box my={!isMobile ? "7rem" : ""}>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grid item md={6} sm={12}>
          <Link href={portfolioItem.frontmatter.demoLink}>
            <Typography variant="h1" align="center" gutterBottom>
              {portfolioItem.frontmatter.title}
            </Typography>
          </Link>
          <Link href={portfolioItem.frontmatter.demoLink}>
            <Box sx={{ width: "100%", height: "auto", position: "relative" }}>
              <Image
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={portfolioItem.frontmatter.screenshot}
              />
            </Box>
          </Link>
          <Typography align="center" variant="body2">
            {portfolioItem.frontmatter.description}
          </Typography>
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography variant="h2">Technologies Used:</Typography>
          <Typography
            variant="body1"
            component="div"
            dangerouslySetInnerHTML={{ __html: portfolioItem.html }}
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
                href={portfolioItem.frontmatter.demoLink}
              >
                Live Demo
              </Button>
            </Grid>
            <Grid item>
              <Button
                size="large"
                variant="outlined"
                color="secondary"
                href={portfolioItem.frontmatter.githubLink}
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

export default PortfolioItem;
