import * as Notifications from "expo-notifications";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: 10,
    },
  });

export default function AgendaScreen({ navigation }) {
    const [agenda, setAgenda] = useState();
    const [expoToken, setExpoToken] = useState("");


    async function notiAgenda() {
        const token = await Notifications.scheduleNotificationAsync({
            content: {
                title: "Agenda",
                subtitle: "subtitulo",
                body: "Você tem um compromisso em" + agenda + "!",
            },
            trigger: { seconds: 3 },
        });
        setExpoToken(token);
    }

    return (
        <View style={styles.container}>
            <Header title={"Agenda"} />
            <TextInput placeholder="Digite o horario da notificação"
        style={(text) => setAgenda(text)}
        onChangeText={text => setAgenda(text)}
        value={agenda}
      ></TextInput>
            <Button title="Notificar" onPress={notiAgenda} />
            <Footer />
        </View>
    );
}

