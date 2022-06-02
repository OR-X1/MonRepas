import { View, Text, StyleSheet, Dimensions, Animated, Easing, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';
import * as Location from 'expo-location';
import { stopBackgroundUpdate, TASK_FETCH_LOCATION, startBackgroundLocationUpdates } from '../lib/background';
import { COLORS } from '../constants/theme';
import Unstar from '../svg/Unstar';
import Star from '../svg/Star';



const initialRegion = {
    latitude: 32.2932031,
    longitude: -9.1666516,
    latitudeDelta: 1,
    longitudeDelta: 1,
}


const Profile = () => {
    // useEffect(() => {
    //     console.log('Profile.js: useEffect');
    //     requestPermissions();
    //     getLocationPermissions();
    //     startBackgroundLocationUpdates();
    // }, []);

    // const handleLogin = async () => {
    //     console.log('Profile.js: handleLogin');
    //     const data = await login('yusfuu@gmail.com', 'secret');
    //     // const x = await updateProfile(data, {
    //     //     displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
    //     // })
    //     console.log(data);
    //     console.log('Profile updated!');
    // }

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    // useEffect(() => {
    //     (async () => {
    //         startBackgroundLocationUpdates();
    //         const x = await Location.hasStartedLocationUpdatesAsync(TASK_FETCH_LOCATION);
    //         console.log(x);
    //         let { status } = await Location.requestForegroundPermissionsAsync();
    //         if (status !== 'granted') {
    //             setErrorMsg('Permission to access location was denied');
    //             return;
    //         }

    //         let location = await Location.getCurrentPositionAsync({});
    //         console.log(location);
    //         // setLocation(location);
    //     })();
    // }, []);
    const [rate, setRate] = useState(0);


    return (
        <View style={tw`flex-1`}>
            {/* <Map initialRegion={initialRegion} /> */}
            {/* <StartWork /> */}

            
        </View>
    );
};


const Map = ({ initialRegion }) => {
    return (
        <View style={tw`bg-indigo-400 m-4 h-4/6 rounded-3xl overflow-hidden shadow-sm`}>
            <MapView initialRegion={initialRegion} style={tw`h-full`}>
                {/* children */}
            </MapView>
        </View>
    );
}


const StartWork = () => {

    return (
        <View style={tw`rounded-lg bg-green-500 self-center mt-8`}>
            <Text style={tw`text-white text-lg py-2 px-4 text-center`}>Start Work</Text>
        </View>
    );
}

// TaskManager.defineTask('TRACKING_APP', ({ data: { locations }, error }) => {
//     if (error) {
//         // check `error.message` for more details.
//         return;
//     }
//     console.log('Received new locations', locations);
// });


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Profile;



// const [users, setUser] = useState([]);
    // const [location] = useLocation();
    // useEffect(() => {
    //     if (location) {
    //         console.log('location', location);
    //         async function getUser() {
    //             // const docRef = await addDoc(collection(db, "users"), location);
    //             await setDoc(doc(db, "users", "someID"), location);
    //         }
    //         getUser();
    //     }
    // }, [location]);

    // useEffect(() => {
    //     const q = query(collection(db, "users"));

    //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //         const users = [];
    //         querySnapshot.forEach((doc) => {
    //             users.push(doc.data());
    //         });
    //         setUser(users);
    //     });

    //     return () => unsubscribe();
    // }, [])