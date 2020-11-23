import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

//props olmasa normal function idi.
const ImageDetail = (props) => {
    console.log(props);
    return (
        <View>
            <Image source={props.imageYolu}/>
            <Text>{props.isim}</Text>
            <Text>Güç: {props.powerScore}</Text>
        </View>

    );
};

const styles = StyleSheet.create({});

export default ImageDetail

