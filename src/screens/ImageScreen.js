import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../screens/ImageDetail';

const ImageScreen = () =>{
    return (
        //dışardan gelen image detail componentini import edip  içeri yerleştirdik
        //ImageDetail componentine props objesi olarak title anahtar kelimesi içinde veri gönderiyoruz 
    <View>
            
            <ImageDetail isim="Alemdar" imageYolu={require('../../assets/alemdar.jpeg')} powerScore={95} />
            <ImageDetail isim="Çakır" imageYolu={require('../../assets/cakir.jpg')} powerScore={95}/>
            <ImageDetail isim="Seyfo Dayı" imageYolu={require('../../assets/seyfodayi.jpg')} powerScore={95}/>
            <ImageDetail isim="Memati" imageYolu={require('../../assets/memati.jpeg')} powerScore={95}/>
            <ImageDetail isim="Erhan" imageYolu={require('../../assets/erhan.jpg')} powerScore={95}/>


    </View>)
    ;
};

const styles = StyleSheet.create({});

export default ImageScreen;

