import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";
const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );
  return (
    <View>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}> {blogPost.content}</Text>
    </View>
  );
};
ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" style={styles.pencil} />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({
  pencil: {
    color: "black",
    fontSize: 35,
  },
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    marginTop: 10,
    marginLeft: 16,
    fontSize: 16,
  },
});
export default ShowScreen;
