import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = (props) => {
    //console.log(props);
    return (
    <View>
        <Text>{props.colorType}</Text>
            <Button onPress={()=>props.onIncrease()} title={`Increase ${props.colorType}`} />
            <Button onPress={()=>props.onDecrease()}title={`Decrease ${props.colorType}`} />
    </View>
    );
};

const style = StyleSheet.create({});

export default ColorCounter;