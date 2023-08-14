import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import { useCallback } from "react";
import Items from "../components/Items";
import * as Contacts from "expo-contacts";
import * as Notifications from "expo-notifications";
import { useFocusEffect } from "@react-navigation/native";
import { Accelerometer, Gyroscope, Magnetometer } from "expo-sensors";
import { useEffect } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Sensors({ navigation }) {
  const [giroscopio, setGiroscopio] = useState();
  const [accelero, setAccelero] = useState(); // Estado para o acelerômetro
  const [magneto, setMagneto] = useState();
  const [orientation, setOrientation] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("white"); // Estado para a cor de fundo

  useEffect(() => {
    deviceMotionSubscription = DeviceMotion.addListener(deviceMotionListener);
    Accelerometer.addListener(acceleroListener);
    Gyroscope.addListener(giroscopioListener);
    Magnetometer.addListener(magnetoListener);

    return () => {
      Gyroscope.removeAllListeners();
      Magnetometer.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    // Atualizar a cor de fundo com base na orientação
    if (orientation === "Vertical") {
      setBackgroundColor("lightblue");
    } else if (orientation === "Horizontal") {
      setBackgroundColor("lightgreen");
    } else {
      setBackgroundColor("lightpink");
    }
  }, [orientation]);

  const acceleroListener = (data) => {
    setAccelero(data);

  
  };

  const deviceMotionListener = (data) => {
    setDevice(data);
  };

  const giroscopioListener = (data) => {
    setGiroscopio(data);

    // Determinar a orientação com base nos valores do giroscópio
    const { x, y, z } = data;
    if (Math.abs(x) < 0.5 && Math.abs(y) < 0.5) {
      setOrientation("Vertical");
    } else if (Math.abs(y) < 0.5 && Math.abs(z) < 0.5) {
      setOrientation("Horizontal");
    } else {
      setOrientation("Inclinado");
    }
  };

  const magnetoListener = (data) => {
    setMagneto(data);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Header title={"Sensores"} style={styles.titulo} />
      <View style={styles.container}>
        <Text style={styles.titulo}>Giroscopio</Text>
        <Text style={styles.titulo}>x: {giroscopio?.x}</Text>
        <Text style={styles.titulo}>y: {giroscopio?.y}</Text>
        <Text style={styles.titulo}>z: {giroscopio?.z}</Text>

        <Text style={styles.titulo}>Magnetometro</Text>
        <Text style={styles.titulo}>x: {magneto?.x}</Text>
        <Text style={styles.titulo}>y: {magneto?.y}</Text>
        <Text style={styles.titulo}>z: {magneto?.z}</Text>

        <Text style={styles.titulo}>Accelerometer</Text>
        <Text style={styles.titulo}>x: {accelero?.x}</Text>
        <Text style={styles.titulo}>y: {accelero?.y}</Text>
        <Text style={styles.titulo}>z: {accelero?.z}</Text>
        
        

        <Text style={styles.titulo}>Orientação: {orientation}</Text>
      </View>
      <Footer />
    </View>
  );
}
