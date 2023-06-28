import { Button, StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import * as Notifications from "expo-notifications";
import { useState } from "react";
import * as Device from "expo-device";
import * as Battery from "expo-battery";
import { useEffect } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});

export default function Notify({ navigation }) {
  const [nivelBateria, setNivelBateria] = useState();
  const [nivelCor, setNivelCor] = useState("green");
  const [ultimaNotif, setUltimaNotif] = useState();
  const [expoToken, setExpoToken] = useState("");

  async function notificarExpo() {
    const token = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Minha notificação",
        subtitle: "subtitulo",
        body: "corpo da notificação",
      },
      trigger: { seconds: 3 },
    });
    setExpoToken(token);
  }

  async function notificarBateria() {
    const token = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Nivel de Bateria",
        subtitle: "subtitulo",
        body: "seu nivel de bateria é:" + nivelBateria + "%",
      },
      trigger: { seconds: 3 },
    });

    setExpoToken(token);
  }

  async function bateria() {
    const nivel = await Battery.getBatteryLevelAsync();
    setNivelBateria(nivel * 100);
  }

  const UltimaNotificacao = Notifications.useLastNotificationResponse();
  async function exibirAlerta() {
    alert("");
    console.log(UltimaNotificacao);
  }

  useEffect(
    () => {
      exibirAlerta();
      bateria();
    },
    [UltimaNotificacao],
    [nivelBateria]
  );

  const ultimaNotificacao = Notifications.useLastNotificationResponse();

  async function exibirAlerta() {
    const idToken = ultimaNotificacao.Notifications;

    alert("Atenção! " + idToken);

    console.log(idToken);
  }

  useEffect(() => {
    if (ultimaNotificacao) {
      setUltimaNotif(ultimaNotificacao.Notifications);
    }

    exibirAlerta();
  }, [ultimaNotificacao]);

  async function lerNotificacao() {
    const ultimaNotificacao =
      await Notifications.getLastNotificationResponseAsync();

    alert(ultimaNotificacao.Notifications);

    console.log(ultimaNotificacao);
  }

  async function mudarPagina() {
    const idToken = ultimaNotif;

    alert("Atenção! " + idToken);

    console.log(idToken);

    if (idToken == expoToken) {
      navigation.navigate("Home");
    }
  }

  useEffect(() => {
    mudarPagina();
  }, [ultimaNotificacao]);

  return (
    <View style={styles.container}>
      <Header title={"Notificações"} />
      <View>
        <Text>Expo Token: {expoToken} </Text>
        <Button
          title="enviar notificação"
          onPress={async () => {
            notificarExpo();
          }}
        />

        <Button
          title="bateria noti"
          onPress={async () => {
            notificarBateria();
          }}
        />
        <Button
          title="seu aparelho"
          onPress={async () => {
            const token = await Notifications.scheduleNotificationAsync({
              content: {
                title: "Seu Aparelho",
                subtitle: "subtitulo",
                body: "seu aparelho é:" + Device.modelName,
              },
              trigger: { seconds: 3 },
            });
            setExpoToken(token);
          }}
        />

<Button

title="Enviar ultima notificação lida"

onPress={async () => lerNotificacao()}/>

<Button

 title="notificar e ir para outra página"

 onPress={async () => mudarPagina()}/>

      </View>
      <Footer onPress={() => navigation.back()} />
    </View>
  );
}
