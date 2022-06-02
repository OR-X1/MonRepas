import React from "react";
import { TouchableOpacity, View, Text, ScrollView } from "react-native";
import { CheckBox } from "react-native-elements";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

const Task = ({ task }) => {
  return (
    <ScrollView
      snapToInterval={100}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={tw`flex-1 w-full flex-row bg-red-500`}
    >
      <TouchableOpacity style={tw`p-3 flex-1 rounded-xl m-3 bg-[#1E3544] w-full`}>
        <View style={tw`flex-row w-full  items-center justify-between`}>
          <View style={tw`flex-row  items-center`}>
            <CheckBox checked={task.checked} />
            <Text style={tw`max-w-fit font-bold text-2xl text-white`}>
              {task.title}
            </Text>
          </View>
          <TouchableOpacity style={tw`flex-row  items-center`}>
            <Ionicons name="md-trash" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={tw`max-w-fit ml-5 text-2xl text-white`}>
          {task.description}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Task;
