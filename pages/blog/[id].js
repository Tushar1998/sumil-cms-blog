import BlogComponent from "../../components/BlogComponent";
import {
  getBlogByParams,
  getFooter,
  getHeader,
} from "../../helper/query";
import Navigation from "../../components/Navigation";
import Footer from "../../components/footer";
function Blog(props) {
  return props.isError ? (
    <h1>Backend server is not responding try again later</h1>
  ) : (
    <div>
      {" "}
      <header>
        <Navigation data={props.header} />
      </header>
      <BlogComponent blog={props} />
      <Footer data={props.footer} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  try {
    let data = await getBlogByParams({ id: context.params.id });
    data = data[0];
    let header = await getHeader();
    header = header[0];
    let footer = await getFooter();
    footer = footer[0];
    return {
      props: {
        data: data,
        header: header,
        footer: footer,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        isError: true,
      },
    };
  }
};

export const getStaticPaths = async () => {
  let data = await getBlogByParams();
  let paths = [
    ...data[0].map((blog) => {
      return {
        params: {
          id: `${blog.uid}`,
        },
      };
    }),
  ];

  return {
    paths,
    fallback: true,
  };
};

export default Blog;
