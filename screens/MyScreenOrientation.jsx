import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
  },
});

export default function MyScreenOrientation() {
  const [orientation, setOrientation] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('red');

  useEffect(() => {
    const getOrientation = async () => {
      const currentOrientation = await ScreenOrientation.getOrientationAsync();
      setOrientation(currentOrientation);
    };

    getOrientation();
  }, []);

  useEffect(() => {
    if (orientation === 'PORTRAIT' || orientation === 'PORTRAIT_UP' || orientation === 'PORTRAIT_DOWN') {
      setBackgroundColor('red');
    } else {
      setBackgroundColor('green');
    }
  }, [orientation]);

  async function padrao() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    setBackgroundColor('red');
  }

  async function direita() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    setBackgroundColor('green');
  }

  async function esquerda() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    setBackgroundColor('green');
  }

  async function normal() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    setBackgroundColor('red');
  }

  async function inverter() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_DOWN);
    setBackgroundColor('red');
  }

  async function info() {
    const currentOrientation = await ScreenOrientation.getOrientationAsync();
    const currentLock = await ScreenOrientation.getOrientationLockAsync();
    console.log('Current Orientation:', currentOrientation);
    console.log('Current Lock:', currentLock);
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Orientação da tela: {orientation}</Text>
      <View>
        <Button title="Padrão" onPress={padrao} />
        <Button title="Direita" onPress={direita} />
        <Button title="Esquerda" onPress={esquerda} />
        <Button title="Normal" onPress={normal} />
        <Button title="Inverter" onPress={inverter} />
        <Button title="Informações" onPress={info} />
      </View>
    </View>
  );
}
