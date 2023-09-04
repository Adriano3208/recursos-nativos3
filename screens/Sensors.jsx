import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { Accelerometer, Gyroscope, Magnetometer, Barometer } from "expo-sensors";
import { ScrollView } from "react-native"; // Import ScrollView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default function Sensors({ navigation }) {
  const [barometer, setBarometer] = useState();
  const [giroscopio, setGiroscopio] = useState();
  const [accelero, setAccelero] = useState();
  const [magneto, setMagneto] = useState();
  const [orientation, setOrientation] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("white");

  useEffect(() => {
    Barometer.addListener(barometerListener);
    Accelerometer.addListener(acceleroListener);
    Gyroscope.addListener(giroscopioListener);
    Magnetometer.addListener(magnetoListener);

    return () => {
      Barometer.removeAllListeners();
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

  const barometerListener = (data) => {
    setBarometer(data);
  };

  const giroscopioListener = (data) => {
    setGiroscopio(data);

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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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

          <Text style={styles.titulo}>Barometro</Text>
          <Text style={styles.titulo}>Pressão: {barometer?.pressure}</Text>
          <Text style={styles.titulo}>Altitude relativa: {barometer?.relativeAltitude}</Text>
          <Text style={styles.titulo}>Altitude absoluta: {barometer?.absoluteAltitude}</Text>

          <Text style={styles.titulo}>Orientação: {orientation}</Text>
        </View>
        <Footer />
      </View>
    </ScrollView>
  );
}
