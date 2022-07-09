import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image, { StaticImageData } from "next/future/image";
import Link from "./Link";

export type PortfolioItemType = {
  id?: number;
  frontmatter: {
    title: string;
    description: string;
    demo_link: string;
    github_link: string;
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
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} sm={12}>
          <Link href={portfolioItem.frontmatter.demo_link}>
            <Typography variant="h1" align="center" gutterBottom>
              {portfolioItem.frontmatter.title}
            </Typography>
          </Link>
          <Link href={portfolioItem.frontmatter.demo_link}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                aria-hidden="true"
                sx={{
                  width: "100%",
                  paddingBottom: "60%",
                }}
              />
              <Image
                src={portfolioItem.frontmatter.screenshot}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
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
            justifyContent="space-evenly"
            spacing={2}
          >
            <Grid item>
              <Button
                size="large"
                variant="outlined"
                color="secondary"
                href={portfolioItem.frontmatter.demo_link}
              >
                Live Demo
              </Button>
            </Grid>
            <Grid item>
              <Button
                size="large"
                variant="outlined"
                color="secondary"
                href={portfolioItem.frontmatter.github_link}
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
