import React, { useState } from "react";
import { ActivityIndicator, Button } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Linking } from "react-native";
import { BlurView } from 'expo-blur';

import tw from "twrnc";

import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

export const PharmacyInfo = ({
  InfoModalVisible,
  PharmacyInfos,
  setInfoModalVisible,
}) => {
  const [loadingImage, setloadingImage] = useState(true);
  return (
    <Modal
      style={{}}
      animationType="slide"
      transparent={true}
      visible={InfoModalVisible}
      onRequestClose={() => {setInfoModalVisible(!InfoModalVisible),setloadingImage(true)}}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {setInfoModalVisible(!InfoModalVisible),setloadingImage(true)}}
      >
        <BlurView intensity={90} tint="default" >
          <View style={[styles.backDrop]}>
            <TouchableWithoutFeedback>
              <View
                style={tw`rounded-t-2xl w-full flex-col bg-[#3d413ee3] h-5/11 `}
              >
                <View style={tw`mx-auto my-3 w-11/12`}>
                  <Text style={tw`text-center text-2xl font-bold text-white`}>
                    {PharmacyInfos.title}
                  </Text>
                </View>
                <View
                  style={[
                    tw` flex-row justify-center my-2 h-3/7 w-full `,
                    styles.centeredView,
                  ]}
                >
                  <View style={[tw`justify-center  relative w-11/12 h-full`]}>
                    {loadingImage && (
                      <ActivityIndicator style={tw`m-auto`} color="green" />
                    )}
                    <Image
                      onLoad={() => setloadingImage(false)}
                      source={{ uri: PharmacyInfos.image }}
                      style={tw`absolute rounded-2xl h-full w-full`}
                    />
                  </View>
                </View>
                <View style={tw`mx-auto mt-2 mb-5  w-11/12`}>
                  <Text style={tw`font-normal text-lg	text-[#ddd5d5] `}>
                    {PharmacyInfos.address}
                  </Text>
                </View>
                <View style={tw`flex-row justify-evenly`}>
                  <Button
                    onPress={() => {
                      Linking.openURL(`tel:${PharmacyInfos.PhoneNumber}`);
                    }}
                    icon={() => (
                      <Feather name="phone-call" size={24} color="white" />
                    )}
                    mode="contained"
                    color="rgb(34,197,94)"
                    labelStyle={tw`text-white`}
                  >
                    Appeler
                  </Button>
                  <Button
                    icon={() => (
                      <FontAwesome5 name="road" size={24} color="white" />
                    )}
                    mode="contained"
                    color="rgb(34,197,94)"
                    labelStyle={tw`text-white`}
                  >
                    Itenitaire
                  </Button>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </BlurView>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backDrop: {
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#6b686877",
    height: "100%",
  },
  centeredView: {},
});
