import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
    const[password, setPassword] = useState('');
    return(
        <View>
            <Text>Enter your password: </Text>
            <TextInput 
            style={styles.input}
            autoCapitalize="none"  
            autoCorrect={true}
            value={password}
            //yeniText yerine ne gelirse gelsin, input her değiştiğinde o yere aktarılacak
            onChangeText={(sabah)=>setPassword(sabah)}
                      
         />
           {password.length<6?<Text>Password must be at least 6 characters</Text>:<Text>Your password is: {password}</Text>}
            
        
       
         
        </View>
    );
};

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor:'green',
        borderWidth:1,
    }
});

export default TextScreen;