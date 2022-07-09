type StyledLinkProps = {
  disabled: boolean;
};
const StyledLink = styled(({ disabled, ...other }) => <Link {...other} />)({
  pointerEvents: ({ disabled }: StyledLinkProps) =>
    disabled ? "none" : "auto",
  opacity: ({ disabled }: StyledLinkProps) => (disabled ? ".5" : ""),
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

export default BlogPagination;
