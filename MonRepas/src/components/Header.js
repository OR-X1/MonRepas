import React from 'react'
import { StyleSheet, SafeAreaView, View, Text, Button, FlatList, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export default function Header({navigation}) {

    const openMenu = () =>{
        navigation.openDrawer()
    }

    return (
        <View style={styles.header}>
            <Ionicons name="menu"  color="black" size={30} style={ styles.menu } onPress={openMenu} />
            <View>
                <Text style={styles.headerText}>JEWELTIQUE</Text>
            </View>
            <TouchableOpacity style={ styles.card }>
                <MaterialCommunityIcons name="shopping" size={28} color="black"  />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'gold',
        letterSpacing: 2
    },
    menu:{
        
        position:'absolute',
        left: -50, // pour iphone
        // left: 1, // pour android

    },
    card:{
        position:'absolute',
        right: -50, // pour iphone
        // right: 1, // pour android
    }
})