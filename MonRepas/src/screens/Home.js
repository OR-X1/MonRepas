import React, { useEffect, useState , useRef } from "react";
import { StyleSheet, SafeAreaView, View, Text, Button, FlatList, ScrollView, TouchableOpacity} from 'react-native'
import Header from '../components/HeaderHome';
import Categorie from '../components/Categorie';
import CardHome from '../components/HomeCards'
import Global from '../style/Global';
import Produits from '../ressources/Produits'



const Home=()=> {

    const [Food, setFood] = useState([]);

    const getAllFood = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        
        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };
    
        fetch("http://localhost:5000/api/recette/getAll", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            setFood(result.Recettes);
            console.log(result.Recettes);
          })
          .catch((error) => console.log("error", error));
      };

      useEffect(() => {
        getAllFood();
      }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <Header />
                <Categorie />
                <View style={Global.Categorie}>
        <View style={Global.CategorieTitle}>
            <Text style={Global.CategorieTitle}>Meilleurs Produits</Text>
            <TouchableOpacity>
                {/* <AntDesign name="arrowright" size={24} color="black" /> */}
            </TouchableOpacity>
        </View>
        <View style={Global.homeProduct}>
            {Food?.map((Produit, index) => (
            <CardHome key={index} {...{ ...Produit, Food }} />
            ))}
        </View>

      </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;