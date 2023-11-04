import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";   
import { useState } from "react";


export default function CreateTodoList({ submitHandler }) {

    // to keep track of values end user types in
  const [text, setText] = useState("");
  //text = 'first task'

  const changeHandler = (val) => {
    setText(val);
  };
  

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter Task"
        onChangeText={(val) => changeHandler(val)}
      />
      <Button
        title="Add"
        color="SkyBlue"
        onPress={() => submitHandler(text)}
      />
    </View>
  );
}


const styles = StyleSheet.create({

    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 2,
        borderBottomColor: "black",
    },

});