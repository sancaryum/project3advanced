import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { set } from 'react-native-reanimated';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {

    switch(action.colorToChange){
        case 'red':
           return state.red + action.amout > 255 || state.red + action.amount<0
               ? state //doğruysa bunu
               :{ ...state, red: state.red + action.amount }; //değilse bunu döndürecek       
        case 'green':
            return state.green + action.amout > 255 || state.green + action.amount < 0
                ? state //doğruysa bunu
                : { ...state, green: state.green + action.amount }; //değilse bunu döndürecek

        case 'blue':
            return state.blue + action.amout > 255 || state.blue + action.amount < 0
                ? state //doğruysa bunu
                : { ...state, blue: state.blue + action.amount }; //değilse bunu döndürecek

        default:
            return state;
    }
};

const SqueareScreen = () => {
    
    const[state,runMyReducer] = useReducer(reducer, {red:0, green:0, blue:0});
    const{red, green, blue} = state;


    return (
    <View> 
        <ColorCounter 
        onIncrease={()=>runMyReducer({colorToChange: 'red', amount: COLOR_INCREMENT})}
        onDecrease={()=>runMyReducer({colorToChange: 'red', amount: -1 * COLOR_INCREMENT})}
        colorType="red" />
        <ColorCounter 
        onIncrease={() => runMyReducer({ colorToChange: 'green', amount: COLOR_INCREMENT })} 
        onDecrease={() => runMyReducer({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
        colorType="green" />
        <ColorCounter 
        onIncrease={() => runMyReducer({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
        onDecrease={() => runMyReducer({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
        colorType="blue" />

        <View 
            style={{
            height:150, 
            width:150, 
            backgroundColor: `rgb(${red},${green},${blue})`,
            }}

            /> 
    </View>
    );
};

const style = StyleSheet.create({});

export default SqueareScreen;