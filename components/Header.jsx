import { StyleSheet, View,Text } from "react-native"

const Header = () => {
  return (
    <View style={styles.header}>
    <Text style={styles.text}>My todos</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    header:{
        padding:20,
        backgroundColor:'coral',
        marginBottom:10,
        borderBottomwidth:1,
        borderBottomColor:'#ddd',
        alignItems:'center'
    },
    text:{
      fontSize:25,
      fontWeight:'bold',
      textDecorationLine:'underline'
    }
  
})

export default Header