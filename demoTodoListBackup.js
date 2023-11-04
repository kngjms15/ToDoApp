import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';
import ToDoItemList from './components/toDoItemList';
import Header from './components/header';
import CreateTodoList from './components/createTodoList';


function App() {

  const [task, setTask] = useState([

    {text: 'Get up at 4am', key: '1'},
    {text: 'Take bath and have coffe by 5am', key: '2'},
    {text: 'Prepare breakfast by 6am', key: '3'},
    {text: 'Leave for school by 7 am', key: '4'},
    {text: 'Prepare for CPRG303 from 7:30 am to 9:30 am', key: '5'},
    {text: 'Deliver Class', key: '6'},

  ]);

  const clickHandler = (key) => {
    console.log(key); 
    setTask((prevTask) => {
      return prevTask.filter(task => task.key != key);
    })
  }

  const submitHandler = (text) => {
    setTask(prevTodo => {
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodo
      ]
    })
  }

  return (
    <View style={styles.container}>

      <Header />

      <View style={styles.content}>
        <CreateTodoList />
        <View style={styles.list}>
          <FlatList
            data={task}
            renderItem={({item}) => (
              <ToDoItemList item={item} clickHandler={clickHandler}/>
              
            )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },

  content: {
    padding: 12,
    height: 700,
  },
  list: {
    marginTop: 30,
  },


});

export default App;
