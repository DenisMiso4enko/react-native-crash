import React from "react";
import { FlatList, RefreshControl, TouchableOpacity } from "react-native";
import { Post } from "../components/Post";
import { useEffect } from "react";
import { Loading } from "../components/Loading";
import { usePosts } from "../hooks/usePosts";

export const HomeScreen = ({ navigation }) => {
  const { items, isLoading, fetchPosts } = usePosts();

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
