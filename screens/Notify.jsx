import { Button, StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import * as Battery from "expo-battery";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});

export default function Notify({ navigation }) {
  const [nivelBateria, setNivelBateria] = useState();
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
        body: "seu nivel de bateria é: " + nivelBateria + "%",
      },
      trigger: { seconds: 3 },
    });
    setExpoToken(token);
  }

  async function bateria() {
    const nivel = await Battery.getBatteryLevelAsync();
    setNivelBateria(nivel * 100);
  }

  useEffect(() => {
    exibirAlerta();
    bateria();
  }, []);

  const ultimaNotificacao = Notifications.useLastNotificationResponse();

  async function exibirAlerta() {
    if (ultimaNotificacao) {
      const idToken = ultimaNotificacao.notification.request.identifier;
      alert("Atenção! " + idToken);
      console.log(idToken);
    }
  }

  useEffect(() => {
    exibirAlerta();
  }, [ultimaNotificacao]);

  async function lerNotificacao() {
    const ultimaNotificacao = await Notifications.getLastNotificationResponseAsync();
    if (ultimaNotificacao) {
      const idToken = ultimaNotificacao.notification.request.identifier;
      alert("Última notificação lida: " + idToken);
      console.log(ultimaNotificacao);
    }
  }

  async function mudarPagina() {
    if (ultimaNotificacao) {
      const idToken = ultimaNotificacao.notification.request.identifier;
      alert("Atenção! " + idToken);
      console.log(idToken);
  
      if (idToken === expoToken) {
        navigation.navigate("HomeAula"); // Replace "Home" with "HomeAula"
      }
    }
  }
  
  useEffect(() => {
    mudarPagina();
  }, [ultimaNotificacao]);

  return (
    <View style={styles.container}>
      <Header title={"Notificações"} />
      <View>
        <Text>Expo Token: {expoToken}</Text>
        <Button
          title="Enviar notificação"
          onPress={async () => {
            notificarExpo();
          }}
        />
        <Button
          title="Notificar nível de bateria"
          onPress={async () => {
            notificarBateria();
          }}
        />
        <Button
          title="Mostrar aparelho"
          onPress={async () => {
            const token = await Notifications.scheduleNotificationAsync({
              content: {
                title: "Seu Aparelho",
                subtitle: "subtitulo",
                body: "seu aparelho " + Device.modelName + " é excelente",
              },
              trigger: { seconds: 3 },
            });
            setExpoToken(token);
          }}
        />
        <Button
          title="Enviar última notificação lida"
          onPress={async () => lerNotificacao()}
        />
        <Button
          title="Notificar e ir para outra página"
          onPress={async () => mudarPagina()}
        />
      </View>
      <Footer onPress={() => navigation.back()} />
    </View>
  );
}
