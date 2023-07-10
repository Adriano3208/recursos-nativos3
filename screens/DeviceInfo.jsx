import { Button, StyleSheet, Text, View } from "react-native";
import * as Device from 'expo-device'
import Header from "../components/Header";


const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        backgroundColor: "#606",
        paddingBottom: 5,
        paddingHorizontal: 5,
    },
    headerTextStyle: {
        marginTop: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center'
    },
});


export default function DeviceInfo() {
    return(
        
        
        
        <View style={styles}>
            <Header title={"Device"} style={styles.titulo} />
            <Text>
                O nome do seu dispositivo é:
                {Device.deviceName}
            </Text>
            <Text>
                A marca do seu dispositivo é:
                {Device.brand}
            </Text>
            <Text>
                O modelo do dispositivo é:
                {Device.modelId}
            </Text>
            <Text>
                O nome completo do dispositivo é:
                {Device.modelName}
            </Text>
            <Text>
                O seu dispositivo é:
                {Device.deviceName}
            </Text>
            <Text>
                O design do dispositivo é:
                {Device.designName}
            </Text>
            <Text>
                Ano do lançamento:
                {Device.deviceYearClass}
            </Text>
            <Text>
                A memoria do dispositivo é:
                {Device.totalMemory}
            </Text>
            <Text>
                A versão do sistema:
                {Device.osVersion}
            </Text>
            <Text>
                Arquitetura doo dispositivo é a:
                {Device.deviceName}
            </Text>
            
        </View>
    )
}