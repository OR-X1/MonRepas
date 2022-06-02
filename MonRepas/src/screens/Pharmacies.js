import * as Permissions from "expo-permissions";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import { CheckBox } from "react-native-elements";
import tw from "twrnc";
import Task from "../components/Task";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Pharmacies = () => {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const tasks = [
    {
      title: "Notification",
      description: "Schedule a notification to be sent",
      wait: 5,
      checked: true,
    },
    {
      title: "Notification 2",
      description: "Schedule a thing",
      wait: 2,
      checked: false,
    },
  ];

  const minutesToSeconds = (minutes) => {
    return minutes * 60;
  };

  const dateToSecondsFromNow = (minutes) => {
    const now = new Date();
    const then = new Date(now.getTime() + minutesToSeconds(minutes) * 1000);
    return then.getTime();
  };

  useEffect(() => {
    [5, 10].map(async (seconds) => {
      schedulePushNotification(seconds);
    });
  }, []);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View style={tw`flex-1 bg-white`}>
        <Image
          source={require("../../assets/png/relaxing_man.jpg")}
          style={tw`w-full h-80`}
        />
      <ScrollView style={tw` bg-[#87C0D1] w-full h-full rounded-t-3xl `}>
        <View style={tw`p-3 w-full items-center`}>
          <View style={tw`w-10 rounded-full bg-white p-1 `} />
          {tasks.map((task) => {
            return (
              <Task key={task.title} task={task} />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

async function schedulePushNotification(seconds) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: "Here is the notification body",
      data: { data: "goes here" },
    },
    trigger: { seconds: seconds },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

export default Pharmacies;
