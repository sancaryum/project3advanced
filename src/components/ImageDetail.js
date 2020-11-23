import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

//props olmasa normal function idi.
const ImageDetail = ({imageYolu, isim, powerScore}) => {
    
    return (
        <View>
            <Image source={imageYolu}/>
            <Text>{isim}</Text>
            <Text>Güç: {powerScore}</Text>
        </View>

    );
};

const styles = StyleSheet.create({});

export default ImageDetail

