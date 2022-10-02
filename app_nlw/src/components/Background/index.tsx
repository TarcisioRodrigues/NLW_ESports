import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { styles } from "./styles";
import backgroundImg from "../../assets/background-galaxy.png";
interface Props {
  children: React.ReactNode;
}
export const Background = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImg} defaultSource={backgroundImg} style={styles.container}>
        {children}
      </ImageBackground>
    </View>
  );
};
