import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";

import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.navigate("Show"));
      }}
      initialValues={{
        id: id,
        title: blogPost.title,
        content: blogPost.content,
      }}
    />
  );
};
BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};
const styles = StyleSheet.create({});
export default EditScreen;
