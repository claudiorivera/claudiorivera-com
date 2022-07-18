import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";

import Link from "./Link";

type Props = {
  pageContext: {
    currentPage: number;
    prevPage: number;
    nextPage: number;
    numPages: number;
    postsPerPage: number;
  };
};
const BlogPagination = ({ pageContext }: Props) => {
  const { currentPage, prevPage, nextPage, postsPerPage } = pageContext;

  return (
    <Container maxWidth="sm">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography variant="h3">
            <Link
              sx={{
                pointerEvents: currentPage === prevPage ? "none" : "auto",
                opacity: currentPage === prevPage ? ".5" : "1",
              }}
              href={prevPage === 1 ? "/blog" : `/blog/page-${prevPage}`}
            >
              <ArrowBack /> Previous {`${postsPerPage}`} Posts
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3">
            <Link
              sx={{
                pointerEvents: currentPage === nextPage ? "none" : "auto",
                opacity: currentPage === nextPage ? ".5" : "1",
              }}
              href={`/blog/page-${nextPage}`}
            >
              Next {`${postsPerPage}`} Posts <ArrowForward />
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPagination;
