import React from 'react';
import { StyleSheet, Text, View } from 'react-native';      


export default function Header() {
    return(
    <View style={styles.header}>
    <Text style={styles.title}>Todo List</Text>
  </View>

)};


const styles = StyleSheet.create({


    header: {
        height:80,
        backgroundColor: 'sky-blue',
        paddingTop: 45,
      },
      title: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
      },

});