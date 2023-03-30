import { Pressable, StyleSheet, Text, View } from "react-native"

const Todo = (props) => {
  
  return (
    
    <View>
        <Pressable onPress={()=>props.pressHandler(props.item.key)}>
        <Text style={styles.items}>{props.item.text}</Text>
        </Pressable>
    </View>
  )
}
const styles=StyleSheet.create({
  items:{
    padding:16,
    marginTop:16,
    borderColor:'#bbb',
    borderWidth:1,
    borderRadius:10
  }
})

export default Todo