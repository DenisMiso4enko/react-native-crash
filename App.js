import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Navigation } from "./screens/Navigator";
import styled from "styled-components/native";

const Container = styled(SafeAreaView)`
  flex: 1;
  padding-top: 50px;
`;

export default function App() {
  return (
    <Container>
      <Navigation />
      <StatusBar style="auto" />
    </Container>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
