import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import * as Battery from "expo-battery";

const styles = StyleSheet.create({
    header: {
        paddingTop: 10,
        paddingBottom: 5,
        paddingHorizontal: 5,
   
        
    },
    headerTextStyle: {
        marginTop: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center',
    },
});

export default function Header({ title }) {
    const [nivelBateria, setNivelBateria] = useState();
    const [nivelCor, setNivelCor] = useState("green");

    async function atualizarTudo() {
        bateria();
    }

    async function bateria() {
        const nivel = await Battery.getBatteryLevelAsync();
        setNivelBateria(nivel * 100);
        if (nivelBateria >= 100) {
            setNivelCor("green");
        } else {
            if (nivelBateria >= 59) {
                setNivelCor("lightgreen");
            } else {
                if (nivelBateria >= 29) {
                    setNivelCor("orange");
                } else {
                    if (nivelBateria >= 4) {
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
        <View style={styles.header}>
            <View style={{ backgroundColor: nivelCor }}>
            <Text style={styles.headerTextStyle}>
                { title }
            </Text>
            <Button title="Atualizar" onPress={atualizarTudo} />
        </View>
        </View>
    )
}