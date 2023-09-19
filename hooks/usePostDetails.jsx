import { useState, useEffect } from "react";
import axios from "axios";

export const usePostDetails = (id) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`https://633962f7937ea77bfdca2ed8.mockapi.io/posts/${id}`)
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Не удалось получить статью");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return { isLoading, data };
};
