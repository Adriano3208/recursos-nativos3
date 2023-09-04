import { Button, StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import * as ScreenCapture from "expo-screen-capture";
import * as MediaLibrary from 'expo-media-library';
import { useEffect } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});

export default function CaptureScreen({ navigation }) {
    useEffect(() => {
        if (hasPermissions()) {
          const subscription = ScreenCapture.addScreenshotListener(() => {
            alert('Para de tirar print da conversa do zap porra 😊');
          });
          return () => subscription.remove();
        }
      }, []);
    
      const hasPermissions = async () => {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        return status === 'granted';
      };

 const active = async () => {
    await ScreenCapture.preventScreenCaptureAsync();
    };

 const deactive = async () => {
    await ScreenCapture.allowScreenCaptureAsync();
    };



  return (
    <View style={styles.container}
    accessibilityLabel="Expo Screen">

        <Header title={"Capture Screen"} />
        <View style={styles.container}>
            <Button title="Não deixa tirar print" onPress={active} />
            <Button title="deixa tira print" onPress={deactive} />

        </View>
      
      <Footer onPress={() => navigation.back()} />
    </View>
  );
}
