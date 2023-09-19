import React from "react";
import axios from "axios";
import {
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Post } from "../components/Post";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";

export const HomeScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get("https://633962f7937ea77bfdca2ed8.mockapi.io/posts")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Ошибка", "Что-то пошло не так");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
      }
      data={items}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("PostDetails", {
              id: item.id,
              title: item.title,
            })
          }
        >
          <Post
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            createdAt={item.createdAt}
          />
        </TouchableOpacity>
      )}
    />
  );
};
