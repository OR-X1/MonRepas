import React from 'react'
import {  Pressable,
    StyleSheet,
    ActivityIndicator,
    ScrollView
    ,Image, TouchableHighlight, View, Text, Button, FlatList, TouchableOpacity} from 'react-native'
import Global from '../style/Global';
import Produits from '../ressources/Produits'
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";


 const HomeCards=({
    images,
    prix,
    nom,
    description,
  })  => {
    const navigation = useNavigation();

    return (
                <TouchableOpacity 
                onPress={() => {
                    navigation.navigate("FoodInfo", {
                      images: images,
                      prix: prix,
                      description: description,
                      nom: nom,
                                        });
                  }}
                  style={Global.Card}>
                    {/* <View style={Global.Card1} > */}
                        <Image
                            source={images[0]}
                            style={Global.imageCard}
                        />
                        <Text style={Global.titleCard}>{nom}</Text>
                        <View style={Global.produitDetails}>
                            <Text style={Global.priceCard}>{prix} Dh</Text>
                            <View style={Global.produitAction}>
                                <TouchableOpacity><Feather style={Global.iconHome} name="heart" size={20} color="black" /></TouchableOpacity>
                                <TouchableOpacity><FontAwesome style={Global.iconHome} name="plus" size={20} color="black" /></TouchableOpacity>
                            </View>
                        {/* </View> */}
                    </View>
                </TouchableOpacity>
    )
}

export default HomeCards;