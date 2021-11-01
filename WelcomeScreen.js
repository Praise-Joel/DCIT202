import React from 'react';
import { ImageBackground, StyleSheet, View, Text} from 'react-native';

function welcome(props) {
    return (
        <ImageBackground 
        style={styles.background}
         source={require('../assets/InkedappDesign1_LI.jpg')}>
             <View style={styles.writtenText}>
                <Text>Buy your quality instruments from here!! </Text>
             </View>
             <View style={styles.loginButton}></View>
             <View style={styles.registerButton}></View>

        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent:'flex-end',
    },
    loginButton:{
        width:'100%',
        height: 70,
        backgroundColor:'#fff8dc',
    },
    registerButton:{
        width:'100%',
        height: 70,
        backgroundColor:'#dcdcdc',
    },
    writtenText:{
        
        alignItems: 'center',
       

       
    }
})

export default welcome;