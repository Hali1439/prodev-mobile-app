import { View, Text, StyleSheet } from "react-native";

export default function Inbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📩 Inbox Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
});
