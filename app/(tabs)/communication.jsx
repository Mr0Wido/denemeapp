import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import { icons } from "../../constants";
import { images } from "../../constants";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Communication = () => {
  const handleIconPressed = () => {
    seticonClicked((prevState) => !prevState);
    submit();
  };
  const [iconClicked, seticonClicked] = useState(false);
  const submit = () => {};

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="h-full bg-white">
        <ScrollView>
          <View className="w-full justify-center items-center px-4 my-6 py-6">
            <Image
              source={images.logo}
              className="w-[540] h-[84px]"
              resize="contain"
            />
            <Image
              source={icons.phone}
              className="w-12 h-12 mt-7"
              tintColor={"black"}
            />
            <View className="flex-row items-center justify-center">
              <View className="space-y-2 items-center flex-1">
                <Text className="text-base text-black font-pregular">
                  Bircan TOPTAN
                </Text>
                <View className="w-48 h-10 bg-slate-50 rounded-2xl border-2 border-gray-300 justify-center items-center">
                  <Text className="text-base text-center font-psemibold">555-555-555-55</Text>
                </View>
              </View>
              <CustomButton
                title={"Ara"}
                containerStyles="w-36 h-16  mt-4 items-center mx-2 bg-green-500"
                handlePress={submit}
              />
            </View>
          </View>
          <View className="w-full justify-center items-center px-4 my-6 py-2">
            <Image source={icons.whatsApp} className="w-12 h-12 mt-7" />
            <Text className="text-base text-center font-pregular mt-2">
              WhatsApp İletişim
            </Text>
            <CustomButton
              title={"Mesaj Gönder"}
              containerStyles="w-full h-16 mt-4 items-center mx-2 bg-green-500"
              handlePress={submit}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Communication;
