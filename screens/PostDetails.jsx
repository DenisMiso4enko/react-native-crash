import React, { useEffect } from "react";
import { View } from "react-native";
import { Loading } from "../components/Loading";
import { usePostDetails } from "../hooks/usePostDetails";
import styled from "styled-components/native";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const PostDetailsScreen = ({ route, navigation }) => {
  const { id, title } = route.params;
  const { isLoading, data } = usePostDetails(id);

  useEffect(() => {
    navigation.setOptions({
      title,
    });
  }, [navigation, title]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Loading />
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <PostImage source={{ uri: data.imageUrl }} />
      <PostText>{data.text}</PostText>
    </View>
  );
};
