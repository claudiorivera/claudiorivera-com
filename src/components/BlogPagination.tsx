import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import Link from "./Link";

type LinkProps = {
  disabled?: boolean;
};
const StyledLink = styled(Link)<LinkProps>(({ disabled }) => ({
  pointerEvents: disabled ? "none" : "auto",
  opacity: disabled ? ".5" : "1",
}));

type Props = {
  pageContext: {
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
            <StyledLink
              disabled={pageContext.prevPage === 0}
              href={`/blog?page=${pageContext.prevPage}`}
            >
              <ArrowBack /> Previous {`${pageContext.limit}`} Posts
            </StyledLink>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3">
            <StyledLink
              disabled={pageContext.nextPage >= pageContext.numPages}
              href={`/blog?page=${pageContext.nextPage}`}
            >
              Next {`${pageContext.limit}`} Posts <ArrowForward />
            </StyledLink>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPagination;
