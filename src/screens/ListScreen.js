import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () =>{
    const friends=[
        { name: 'Mehmet Karahanlı', age: '53',  key: '1'},
        { name: 'Laz Ziya', age: '66', key: '2'},
        { name: 'Hüsrev Ağa', age: '70', key: '3'},
        { name: 'Kılıç', age: '51', key: '4'},
        { name: 'İplikçi Nedim', age: '48', key: '5'},
        { name: 'Aslan Akbey', age: '43', key: '6'},
        { name: 'Tombalacı Mehmet', age: '51', key: '7'},
        { name: 'Testere Necmi', age: '48', key: '8'},
        { name: 'Tuncay', age: '39', key: '9'},
        


    ];

    return( 
    //FlatList'e data ve key adlarında proplar verdik    
    <FlatList 
    vertical
    showsVerticalScrollIndicator={false}
    keyExtractor={(friend)=>friends.name }
    data={friends} 
    //listedeki her bir elemanı text olarak döndür
    renderItem={({item}) => {
        return <Text style={styles.sekilsukul}>Name: {item.name}, Age: {item.age} </Text>;
    }}

    />
    );
};

const styles = StyleSheet.create({
    sekilsukul:{
        marginVertical:50
    }

});

export default ListScreen;