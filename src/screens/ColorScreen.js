import React, {useState} from 'react';
import {View, StyleSheet, Button, FlatList} from 'react-native';

const ColorScreen = () => {
    //useState içerisi default değeri BOŞ
    const[colors,setColors] = useState([]);
    console.log(colors);
    return (
    <View>
        <Button title="Add a Color"
        onPress={()=>{
            //her tetiklendiğinde colors dizisini randomRgb'den gelen
            //random renklerle değiştiriyor
            setColors([...colors,randomRgb()])
        }}/>
        <FlatList
            keyExtractor={(item)=>item}
            data={colors}
            renderItem={({item})=>{
                return <View style={{ height: 100, width: 100, backgroundColor: item }} />
            }}
        />
    </View>
    );
};

const randomRgb = () => {

    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);

    return `rgb(${r},${g},${b})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;


