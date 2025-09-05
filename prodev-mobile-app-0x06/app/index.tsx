import React from "react";
import { ImageBackground, View, Image, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { styles as s } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";

export default function IndexScreen() {
  return (
    <View style={s.container}>
      <ImageBackground source={BACKGROUNDIMAGE} resizeMode="cover" style={s.backgroundImageContainer}>
        <View style={s.logoContainer}>
          <Image source={HEROLOGO} resizeMode="contain" style={{ width: 120, height: 120 }} />
        </View>

        <View style={s.titleContainer}>
          <Text style={s.titleText}>Welcome to ProDev</Text>
          <View style={s.titleSubTextContainer}>
            <Text style={s.titleSubText}>Build. Learn. Ship. Repeat.</Text>
          </View>
        </View>

        <View style={{ flex: 1 }} />

        <View style={s.buttonGroup}>
          <Link href="/signin" asChild>
            <TouchableOpacity style={s.buttonPrimary}>
              <Text style={s.buttonPrimaryText}>Sign In</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/join" asChild>
            <TouchableOpacity style={s.buttonSecondary}>
              <Text style={s.buttonSecondaryText}>Join Now</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={{ height: 40 }} />
      </ImageBackground>
    </View>
  );
}
