import React, {useReducer} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import { set } from 'react-native-reanimated';

const reducer = (state, action) =>{
    //state === {count: number}
    //action ==={type: 'increment || 'decrement', payload:1}

    switch (action.type){
        case 'increment':
            return {...state,countumuz: state.countumuz+action.payload}
        case 'decrement':
            return{...state,countumuz:state.countumuz-action.payload}
        default:
            return state;//butonlardan başka bir şeye tıkladıysa bir şey yapma
    }
}

//() yerine (function) da yazılabilir
const CounterScreen = () =>{
    //callMyReducer yerine dispatch yazıyorlar normalde
   const [state, callMyReducer] = useReducer(reducer,{countumuz:0})


    return <View>
        <Button
         title="Increase" onPress={()=>{
            callMyReducer({type:'increment', payload:1})
         }}/>
        <Button title="Decrease" onPress={()=>{
            callMyReducer({type:'decrement', payload:1})
        }} />
        <Text>Sayaç: {state.countumuz} </Text>

    </View>
}

const styles = StyleSheet.create({});

export default CounterScreen;