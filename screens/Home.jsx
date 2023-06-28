import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default function Home({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button title="Ir para a tela de informações do dispositivo" onPress={() => navigation.navigate('DeviceInfo')}>Device Info</Button>
            <Button title="Ir para a tela de informações do bateria" onPress={() => navigation.navigate('BatteryInfo')}>Battery info</Button>
            <Button title="Ir para a tela de orientação de tela" onPress={() => navigation.navigate('MyScreenOrientation')}>Orientação de tela</Button>
            <Button title="Ir para a tela de notificações" onPress={() => navigation.navigate('Notify')}>Notificações</Button>
            <Button title="Ir para a tela de contatos" onPress={() => navigation.navigate('ContactsInfo')}>Contatos</Button>
        </View>
    )
}