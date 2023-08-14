import * as Notifications from 'expo-notifications';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: 10,
    },
  });
  
const messages = [
  {
    title: "Hoje o dia vai ser bonito!",
    body: "Não se esqueça de ser criativo!",
  },
  {
    title: "Lembre-se: você é incrível!",
    body: "Acredite em você mesmo e conquiste seus objetivos!",
  },
  {
    title: "Uma nova oportunidade está chegando!",
    body: "Prepare-se para abraçar novos desafios e crescer!",
  },
    {
    title: "=D",
    body: "=]",
    },
    {
    title: "☆*: .｡. o(≧▽≦)o .｡.:*☆",
    body: "(┬┬﹏┬┬)",
    },
    {
    title: "ヽ(・∀・)ﾉ",
    body: "(*/ω＼*)",
    },
    {
        title: "🏳️‍🌈🤨",
        body: "🏳️‍⚧️",
        },
];

export default function TelaNovaWow({ navigation }) {
  const [criativo, setCriativo] = useState();

  async function notiCriativo() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    const token = await Notifications.scheduleNotificationAsync({
      content: {
        title: randomMessage.title,
        body: randomMessage.body,
      },
      trigger: { seconds: 3 },
    });
  }

  return (
    <View style={styles.container}>
      <Header title={"Criativo"} />
      <Text>Quer uma mensagem aleatória para alegrar seu dia?</Text>
      <Button title="Notificar" onPress={notiCriativo} />
      <Footer />
    </View>
  );
}
