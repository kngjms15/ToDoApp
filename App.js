import React from 'react';
import { SafeAreaView } from 'react-native';
import { useState } from 'react';
import ToDoList from './ToDoList'; // Adjust the path if necessary
import ToDoForm from './ToDoForm'; // Adjust the path if necessary
import Header from './components/header'; // Adjust the path if necessary

function App() {

    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog',
    ]);
    

    return (

        <SafeAreaView>
            <Header />
            <ToDoList tasks={tasks}/>
            <ToDoForm />
        </SafeAreaView>
    );
}


export default App;