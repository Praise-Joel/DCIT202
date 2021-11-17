import  React, {useState} from 'react';
import { ImageBackground, StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';

const Home=({navigation}) =>{
    return (
        <ImageBackground 
        style={styles.background}
          source={require('../assets/white-app-icon-3.jpg')}>

        <View style={styles.BuyButton}>
        <Button onPress={()=>navigation.navigate('Details')} title ='Buy your Instruments'/>                                    
         </View>
         
         </ImageBackground>


                 
    )
}
export default Home

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent:'flex-end',
    },
    BuyButton:{
        width:'100%',
        height: 50,
        backgroundColor:'chocolate',
        borderRadius: 24,
    },
    loginText: {
        alignItems: 'center',

    },
})