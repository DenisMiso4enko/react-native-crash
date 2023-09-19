import { useState, useEffect } from "react";
import axios from "axios";

export const usePosts = () => {
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

  return { items, isLoading, fetchPosts };
};
