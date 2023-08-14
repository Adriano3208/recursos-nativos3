import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import Header from "../components/Header";
import Footer from "../components/Footer";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default function Home({navigation}) {
    return(
        <View style={styles.container}>
            <Header title={"Home"} />
            <Text style={styles.text}>Home</Text>
            <Button title="Ir para a tela de informações do dispositivo" onPress={() => navigation.navigate('DeviceInfo')}>Device Info</Button>
            <Button title="Ir para a tela de informações do bateria" onPress={() => navigation.navigate('BatteryInfo')}>Battery info</Button>
            <Button title="Ir para a tela de orientação de tela" onPress={() => navigation.navigate('MyScreenOrientation')}>Orientação de tela</Button>
            <Button title="Ir para a tela de notificações" onPress={() => navigation.navigate('Notify')}>Notificações</Button>
            <Button title="Ir para a tela de contatos" onPress={() => navigation.navigate('ContactsInfo')}>Contatos</Button>
            <Button title="Ir para a agenda" onPress={() => navigation.navigate('AgendaScreen')}>Agenda</Button>
            <Button title="Ir para a tela nova wow" onPress={() => navigation.navigate('TelaNovaWow')}>Tela Criativa</Button>
            <Button title="Ir para a tela de sensores" onPress={() => navigation.navigate('Sensors')}>Sensores</Button>
        </View>
    )
}