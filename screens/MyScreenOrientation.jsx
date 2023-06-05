import { Button, StyleSheet, Text, View } from "react-native";
import * as Device from 'expo-device'
import * as ScreenOrientation from 'expo-screen-orientation';
import Footer from "../components/Footer";
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

async function padrao(){
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
    )
}

async function direita(){
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    )
}

async function esquerda(){
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    )
}

async function normal(){
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
    )
}

async function inverter(){
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_DOWN
    )
}

async function info(){
    await ScreenOrientation.getOrientationAsync();
    await ScreenOrientation.getOrientationLockAsync();

    
}
console.log(ScreenOrientation.getOrientationAsync());

export default function MyScreenOrientation() {
    return(
        
        
        <View style={styles}>
          <Header
            title={"Orientação da tela"}
            />
            <View>
                <Button title="padrao" onPress={padrao}/>
                
                <Button title="direita" onPress={direita}/>
                <Button title="esquerda" onPress={esquerda}/>
                <Button title="normal" onPress={normal}/>
                <Button title="inverter" onPress={inverter}/>
                <Button title="info" onPress={info}/>
           
            </View>
            <Footer onPress={() => navigation.back()}/>
            
        </View>
    )
}