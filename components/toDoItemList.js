import { StyleSheet, Text, Pressable } from 'react-native';





export default function toDoItemList({item, clickHandler}) {
    return (
        <Pressable onPress={() => clickHandler(item.key)}>
            <Text style={styles.text}>{item.text}</Text>
        </Pressable>
    )
}



const styles = StyleSheet.create({
    text: {
        padding: 10,
        borderStyle: 'solid',
        fontSize: 18,
        backgroundColor: 'light-blue',
        marginTop: 12,
        borderColor: 'pink',
        borderWidth: 2,
        borderRadius: 14,
    
      },

});
