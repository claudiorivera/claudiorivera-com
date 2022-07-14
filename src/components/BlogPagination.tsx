import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";

import Link from "./Link";

type Props = {
  pageContext: {
    currentPage: number;
    prevPage: number;
    nextPage: number;
    numPages: number;
    limit: number;
  };
};
const BlogPagination = ({ pageContext }: Props) => {
  return (
    <Container maxWidth="sm">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography variant="h3">
            <Link
              sx={{
                pointerEvents:
                  pageContext.currentPage === pageContext.prevPage
                    ? "none"
                    : "auto",
                opacity:
                  pageContext.currentPage === pageContext.prevPage ? ".5" : "1",
              }}
              href={`/blog?page=${pageContext.prevPage}`}
            >
              <ArrowBack /> Previous {`${pageContext.limit}`} Posts
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3">
            <Link
              sx={{
                pointerEvents:
                  pageContext.currentPage === pageContext.nextPage
                    ? "none"
                    : "auto",
                opacity:
                  pageContext.currentPage === pageContext.nextPage ? ".5" : "1",
              }}
              href={`/blog?page=${pageContext.nextPage}`}
            >
              Next {`${pageContext.limit}`} Posts <ArrowForward />
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPagination;
