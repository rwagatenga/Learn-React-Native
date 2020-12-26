import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  View, 
  FlatList,
  Button
} from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  
  const [courses, setCourses] = React.useState([]);
  const [addModal, setAddModal] = React.useState('false');
  
  const addGoalHandler = goalTitle => {
    setCourses(prevState => [
      ...prevState, 
      {
        id: Math.random().toString(),
        course: goalTitle
      }
    ]);
    setAddModal(!addModal);
  };
  const removeGoalHandler = goalId => {
    setCourses(state => {
      return courses.filter((goal) => goal.id !== goalId);
    });
  };
  const cancelModalHandler = () => {
    setAddModal(!addModal);
  };
 
  return (
    <View style = {styles.screen}>
      <Button title = "Add new Goal" onPress = {() => setAddModal(!addModal)} />
      <GoalInput 
      visible = {addModal}
      onAdd = {addGoalHandler}
      onCancel = {cancelModalHandler}
      />
      <FlatList 
        keyExtractor = {(item, index) => item.id}
        data = {courses}
        renderItem = {itemCourses => <GoalItem 
          title = {itemCourses.item.course} 
          id = {itemCourses.item.id}
          onDelete = {removeGoalHandler}
        />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  }
});
