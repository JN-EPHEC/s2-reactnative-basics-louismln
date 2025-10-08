import { ScrollView, StyleSheet, Text, View } from "react-native";
import TodoItem from '../../components/TodoItem';


export default function HomeScreen() {
  return (
       <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.todoContainer}>
        <Text style={styles.title}>Ma liste de choses à faire</Text>
        <TodoItem text="Learn React Native" />
        <TodoItem text="Build a static UI" />
        <TodoItem text="Practice with StyleSheet" />
        <TodoItem text="Developp my own app" />
      </View>
      </ScrollView>
      );
    }


const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  todoContainer: {
    marginBottom: 20,
  },
  TodoItem: {
    backgroundColor: 'orange',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  });