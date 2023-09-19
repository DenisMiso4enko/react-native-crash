import styled from "styled-components/native";

const PostView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  width: 100%;
  border-radius: 50px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 10px;
  margin-right: 20px;
`;

const PostTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`;

const PostDetails = styled.View`
  flex: 1;
`;

export const Post = ({ title, imageUrl, createdAt, text }) => {
  const substringTitle = (title) => {
    if (title.length > 50) {
      return title.substring(0, 50) + "...";
    }
    return title;
  };

  const getDate = (createdAt) => new Date(createdAt).toLocaleDateString();
  return (
    <PostView>
      <PostImage
        source={{
          uri: imageUrl,
        }}
      />
      <PostDetails>
        <PostTitle>{substringTitle(title)}</PostTitle>
        <PostDate>{getDate(createdAt)}</PostDate>
      </PostDetails>
    </PostView>
  );
};
