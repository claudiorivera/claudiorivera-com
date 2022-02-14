import { Container, Grid, styled, Typography } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const StyledLink = styled(({ disabled, ...other }) => <Link {...other} />)({
  pointerEvents: (props) => (props.disabled ? "none" : ""),
  opacity: (props) => (props.disabled ? ".5" : ""),
});

const BlogPagination = ({ pageContext }) => {
  const prevPage =
    pageContext.prevPage === 1 ? "" : `page-${pageContext.prevPage}`;
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="h3">
            <StyledLink
              disabled={pageContext.prevPage <= 0}
              to={`/blog/${prevPage}`}
            >
              <ArrowBack /> Previous {`${pageContext.limit}`} Posts
            </StyledLink>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3">
            <StyledLink
              disabled={pageContext.nextPage > pageContext.numPages}
              to={`/blog/page-${pageContext.nextPage}`}
            >
              Next {`${pageContext.limit}`} Posts <ArrowForward />
            </StyledLink>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

BlogPagination.propTypes = PropTypes.shape({
  pageContext: PropTypes.shape({
    limit: PropTypes.number.isRequired,
    nextPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
    prevPage: PropTypes.number.isRequired,
    skip: PropTypes.number,
  }).isRequired,
}).isRequired;

export default BlogPagination;
