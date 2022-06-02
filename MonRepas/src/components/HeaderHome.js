import React from 'react'
import { StyleSheet, SafeAreaView, Image, TouchableHighlight, View, Text, Button, FlatList, TouchableOpacity} from 'react-native'
import Global from '../style/Global';
import { LinearGradient } from 'expo-linear-gradient';

export default function HeaderHome() {
    return (
        <View style={Global.HeaderHome}>
            <LinearGradient
                start={{ x: 0 , y: 1 }}
                colors={['#E6B31E', 'white']}
                style={Global.background}
            />
            <View style={Global.headerDesc}>
                <Text style={Global.title}> 
                <Text style={Global.prc}>10% </Text>
                Remise sur tous les produits</Text>
                <TouchableOpacity 
                    style ={Global.ButtonHeader}>
                    <Text style={{ color:'white',textalign: 'center'
                 }}>Consulter</Text>
                </TouchableOpacity> 
            </View>
            <Image source={require('../../assets/image/reaps1.jpg')} style={Global.HeaderImage }  />
        </View>
    )
}


// const styles = StyleSheet.create({

//     HeaderHome:{
//         flexDirection:'row',
//         justifyContent:'space-around',
//         alignItems: 'center',
//         height: 140
//     },
//     ButtonHeader:{
//         height: 35,
//         width:130,
//         borderRadius:5,
//         backgroundColor : "#393939",
//         marginLeft :35,
//         marginTop :10,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     HeaderImage: {
//       width: 170,
//       height: 100,
//       marginTop: 20
//     },
//     headerDesc:{
//         width:200,
//         marginLeft: 10
//     },
//     prc:{
//         fontSize: 35,
//         fontWeight: 'bold'
//     },
//     title:{
//         fontSize: 20,
//         fontWeight: 'bold',
//         textAlign: 'center'
//     },
//     background: {
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 0,
//         height: 140,
//     },
//   });