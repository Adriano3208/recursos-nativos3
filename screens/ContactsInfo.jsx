import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import { useCallback } from "react";
import Items from "../components/Items";
import * as Contacts from "expo-contacts";
import * as Notifications from "expo-notifications";
import { useFocusEffect } from "@react-navigation/native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});

export default function ContactsInfo({ navigation }) {
  const [contacts, setContacts] = useState();
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function carregarContatos() {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
    });
    setContacts(data);
    setFilteredContacts(data);
  }

  const filterContacts = (text) => {
    setSearchText(text);
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  async function notiMensagem(Emails, PhoneNumbers) {
    const token = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Contato" + Contacts.Fields.Emails,
        subtitle: "Numero do contato" + Contacts.Fields.xPhoneNumbers,
        body: "..."
      },
      trigger: { seconds: 3 },
    });
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
  <Header title={"Contatos"} style={styles.titulo} />
  <View style={styles.container}>
    <TextInput
      style={styles.searchInput}
      placeholder="Filtrar por nome"
      value={searchText}
      onChangeText={filterContacts}
    />
    <View style={styles.container}>
      {filteredContacts.length > 0 ? (
        <FlatList
          style={{ flex: 1, gap: 10 }}
          data={filteredContacts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => 
          <Items item={item} notiMensagem={notiMensagem}/>}
        />
      ) : (
        <Text>Nenhum contato listado ... </Text>
      )}
    </View>
  </View>
  <Footer onPress={() => navigation.back()} />
</View>
);
}