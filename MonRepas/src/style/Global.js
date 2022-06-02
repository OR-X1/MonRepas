import { StyleSheet} from 'react-native'

const Globale = StyleSheet.create({

    HeaderHome:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
        height: 140
    },
    ButtonHeader:{
        height: 35,
        width:130,
        borderRadius:28,
        backgroundColor : "#393939",
        marginLeft :35,
        marginTop :10,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '900'
    },
    HeaderImage: {
      width: 170,
      height: 100,
      marginTop: 20
    },
    headerDesc:{
        width:200,
        marginLeft: 10
    },
    prc:{
        fontSize: 35,
        fontWeight: 'bold'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 140,
    },


    // categories
    Categorie:{
        marginTop: 15,
        paddingVertical: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    CategorieTitle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 16,
        fontWeight: 'bold',
        // marginBottom: 
    },
    items:{
        alignItems: "center",
        marginRight: 30,
        padding: 1,
        height: '100%',
    },
    imageItem:{
        width: 80,
        height: 80,
        resizeMode: "contain",
        zIndex: 999
    },
    itemTitle:{
        fontSize: 13,
        fontWeight: "700" ,
        paddingBottom: 10,
        width: 100,
        textAlign: 'center',
        alignItems: 'center',
        height: 70,
        backgroundColor: '#E6B31E',
        marginTop: -45,
        paddingTop: 40,
    },

    // product cards
    homeProduct:{
        flexDirection: "row",
        flexWrap: "wrap",
    },
    Card:{
        backgroundColor: '#E5E5E5',
        marginLeft: 12,
        marginBottom: 12,
        height: 230,
        width: 160,
        // borderRadius:15,
    },
    imageCard:{
        height: 170,
        width: 160,
    },
    titleCard:{
        padding: 5,
        marginLeft: 10,
        // color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    produitDetails:{
        marginLeft: 10,
        flexDirection: 'row',
        padding: 5,
    },
    produitAction:{
        flexDirection: "row",
        justifyContent: "flex-end",
        marginLeft: 38,  
        marginTop: -5
    },
    priceCard:{
        fontWeight: 'bold',
        fontSize: 12
    },
    iconHome:{
        fontWeight: '900',
        marginLeft: 6

    }



});

  export default Globale;