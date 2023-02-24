import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { Context } from "../context/BlogContext";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.text}>Title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        placeholder="What is your title?"
        style={styles.title}
      ></TextInput>
      <Text style={styles.text}>Content:</Text>
      <TextInput
        multiline
        value={content}
        onChangeText={(text) => setContent(text)}
        placeholder="Your brilliant blog post!"
        style={styles.content}
      ></TextInput>
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};
BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    height: 40,
    margin: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  text: { marginLeft: 15, marginTop: 10, fontSize: 16 },
  content: {
    fontSize: 20,
    height: 400,
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    paddingLeft: 9,
    paddingTop: 11,
  },
  button: {
    backgroundColor: "gray",
    borderRadius: 5,
  },
});

export default BlogPostForm;
