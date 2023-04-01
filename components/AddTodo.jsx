import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
const AddTodo = ({submitHandler}) => {
    const [todo,setTodo]=useState('');
  return (
    <View style={styles.button}>
        <View>
            <Text>Welcome!</Text>
        <TextInput  placeholder='Write todos here!' style={styles.input} onChangeText={(e)=>{setTodo(e)}} />
        <Button title='Add Todo' onPress={()=>submitHandler(todo)} />
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
    input:{
        borderBottomColor:'grey',
        alignItems:'center',
        
    },
    button:{
        padding:10,
        margin:10,
        alignItems:'center',
        justifyContent:'center'
    },
    hello:{
        margin:100,
        color:'red'
    }

})

export default AddTodo