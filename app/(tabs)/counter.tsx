import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  // Initialize state for the counter with an initial value of 0.
  const [count, setCount] = useState(0);

  // Function to increment the count.
  const incrementCount = () => {
    setCount(count + 1);
  }

  const decrementCount =() => {
    setCount (count -1);
  }

  const Reset=() => {
    setCount(0);
  }

  const increment100count = () => {
    setCount(count +100);
  }

  const decrement100count =() => {
    setCount(count -100);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Compteur : {count}</Text>
      <Button title="+ 1" onPress={incrementCount} />
      <br></br>
      <Button title="-1" onPress={decrementCount} />
      <br></br>
      <Button title="Reset" onPress={Reset} />
      <br></br>
      <Button title="+100" onPress={increment100count} />
      <br></br>
      <Button title="-100" onPress={decrement100count} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  countText: {
    fontSize: 48,
    fontWeight: "600",
    marginVertical: 20,
  },
});
