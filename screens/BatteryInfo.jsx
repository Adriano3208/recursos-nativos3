import * as Battery from "expo-battery";
import { Button, StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { ProgressBar } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});

export default function BatteryInfo() {
  const [nivelBateria, setNivelBateria] = useState();
  const [nivelCor, setNivelCor] = useState("green");

  async function atualizarTudo() {
    bateria();
  }

  async function bateria() {
    const nivel = await Battery.getBatteryLevelAsync();
    setNivelBateria(nivel * 100);
    if (nivelBateria >= 80) {
      setNivelCor("green");
    } else {
      if (nivelBateria >= 50) {
        setNivelCor("yellow");
      } else {
        if (nivelBateria >= 30) {
          setNivelCor("orange");
        } else {
          if (nivelBateria >= 1) {
            setNivelCor("red");
          }
        }
      }
    }
  }

  useEffect(() => {
    bateria();
  }, [nivelBateria]);

  return (
    <View style={styles.container}>
      <Header title={"Bateria"} />
      <View>
        <Text style={{ paddingHorizontal: 100, marginTop: 90 }}>{nivelBateria} %</Text>
        {/* <View
          style={{ height: 20, width: nivelBateria, backgroundColor: nivelCor }}
        /> */}
        <View
          style={{
            paddingHorizontal: 100 ,
          }}
        >
          <ProgressBar
            style={{
              marginVertical: 50,
            }}
            progress={nivelBateria}
            color={nivelCor}
          />
        </View>

        <Button title="Atualizar" onPress={atualizarTudo} />
        <Footer />
      </View>
    </View>
  );
}
