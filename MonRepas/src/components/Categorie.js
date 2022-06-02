import React from 'react'
import { StyleSheet, SafeAreaView, Image, ScrollView, TouchableHighlight, View, Text, Button, FlatList, TouchableOpacity} from 'react-native'
import Global from '../style/Global';
import Categories from '../ressources/Categorie'
import { AntDesign } from '@expo/vector-icons'; 
// import { LinearGradient } from 'expo-linear-gradient';


export default function Categorie() {
    return (
    <View style={Global.Categorie}>
        <View style={Global.CategorieTitle}>
            <Text style={Global.CategorieTitle}>All Categories</Text>
            <TouchableOpacity>
                <AntDesign name="arrowright" size={24} color="black" />
            </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Categories.map((Categorie, index) => (
            <View key={index} style={Global.items}>
              <Image
                source={Categorie.image}
                style={Global.imageItem}
              />
              <Text style={Global.itemTitle}>{Categorie.text}</Text>
            </View>
          ))}
        </ScrollView>

      </View>
    )
}
