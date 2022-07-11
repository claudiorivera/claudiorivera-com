import { PostType } from "types/post";
import { markdownToHtml } from "../../lib/markdownToHtml";
import { getAllPosts, getPostBySlug } from "../../lib/postsApi";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post }: Props) {
  return <pre>{JSON.stringify(post, null, 2)}</pre>;
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "slug",
    "title",
    "date",
    "category",
    "featuredImage",
    "content",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
