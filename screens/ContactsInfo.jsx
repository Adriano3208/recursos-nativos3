import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { ProgressBar } from "react-native-paper";
import { useCallback } from "react";
import Items from "../components/Items";
import * as Contacts from "expo-contacts";
import { useFocusEffect } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});

export default function ContactsInfo({ navigation }) {
  const [contacts, setContacts] = useState([]);

  async function carregarContatos() {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
    });

    setContacts(data);
    console.log(contacts);
  }

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === "granted") {
          await carregarContatos();
        }
      })();
    }, [])
  );

return (
  <View style={styles.container}>
    <Header title={"Contatos"} />

    <View style={styles.content}>
      {
        contacts
        ? <FlatList
        style={{ flex: 1, gap: 10 }}
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Items
            item = {item}

          />
)}
        />
        : <Text>Carregando...</Text>
        
      }
      
      <Footer onPress={() => navigation.back()}/>
    </View>
  </View>
);
}
