import Stack from "./fetchAllEmployee";

export const getBlogByParams = (obj = {}) => {
  const Query = Stack.ContentType(process.env.CONTENT).Query();
  if (obj.id) {
    return Query.toJSON().where("uid", obj.id).includeReference(["related_links"]).find();
  } else {
    return Query.toJSON().find();
  }
};

export const getHeader = () => {
  return Stack.ContentType("sumil_header").Query().toJSON().find();
};

export const getFooter = () => {
  return Stack.ContentType("sumil_footer").Query().toJSON().find();
};
