import React from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList'; // Adjust the path if necessary
import ToDoForm from './ToDoForm'; // Adjust the path if necessary

export default function App() {
    return (
        <SafeAreaView>
            <ToDoList />
            <ToDoForm />
        </SafeAreaView>
    );
}
