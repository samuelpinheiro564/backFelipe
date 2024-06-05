import React from "react";
import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Home() {
  return (
    
      <ImageBackground
        source={require("../../../assets/lua2.jpeg")}
        style={styles.background}
      >
        <View style={styles.container}>
          <Text style={styles.tit} >Seja Bem-vindo Conquistador</Text> 
          <TouchableOpacity>
            <Text>Cadastrar Novo Planeta</Text>
          </TouchableOpacity>
          <View style={styles.linha}></View>
          <TouchableOpacity>
            <Text>Comando</Text>
          </TouchableOpacity>
          <View style={styles.linha}></View>
          <TouchableOpacity>
            <Text>Perfi</Text>
          </TouchableOpacity>
          <View style={styles.linha}></View>
          <TouchableOpacity>
            <Text>Planetas</Text>
          </TouchableOpacity>
          <View style={styles.linha}></View>
        </View>
      </ImageBackground>
    
  );
}
