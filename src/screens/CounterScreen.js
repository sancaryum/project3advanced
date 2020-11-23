import React, {useState} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import { set } from 'react-native-reanimated';

//() yerine (function) da yazılabilir
const CounterScreen = () =>{
    const [counter,setCounter] = useState(0);

    return <View>
        <Button
         title="Increase" onPress={()=>{
            setCounter(counter+1);
            console.log(counter);
         }}/>
        <Button title="Decrease" onPress={()=>{
            setCounter(counter-1);
            console.log(counter);
        }} />
        <Text>Sayaç: {counter} </Text>

    </View>
}

const styles = StyleSheet.create({});

export default CounterScreen;