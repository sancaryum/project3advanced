import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {

   
    return (
    <View>
    <Text style={styles.text}>Hi there!</Text>
     <Button 
     title="Go to Components Screen"
     onPress={()=>navigation.navigate('Components')}    
     />
    <Button
        title="Go to List Screen"
        onPress={()=>navigation.navigate('List')}
    />
    <Button
        title="Go to Image Screen"
        onPress={()=>navigation.navigate('ImageScreen')}
    />
    </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
