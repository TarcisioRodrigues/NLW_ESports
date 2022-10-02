import {Text, Image, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { styles } from "./styles";
import { GAMES } from "../../utils/game";

import logoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { Background } from "../../components/Background";
import { GameCard } from "../../components/Background/Gamecard";
export const Home = () => {
  return (
    <Background>
      <SafeAreaView style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar"
      />
     <FlatList 
     data={GAMES}
     showsHorizontalScrollIndicator={false}
     horizontal
     contentContainerStyle={styles.contentList}
     keyExtractor={item=>item.id}
     renderItem={({item})=>(
      <GameCard data={item} />
  )}
     />
    </SafeAreaView>
    </Background>
  )
};
