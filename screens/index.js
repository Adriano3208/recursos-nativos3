import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from "@react-navigation/native";
import BatteryInfo from "./BatteryInfo";
import DeviceInfo from "./DeviceInfo";
import Home from "./Home";
import MyScreenOrientation from "./MyScreenOrientation";
import Notify from "./Notify";
import ContactsInfo from "./ContactsInfo";

const Stack = createNativeStackNavigator();

export default function RootNavigation({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeAula" component={Home} />
        <Stack.Screen name="BatteryInfo" component={BatteryInfo} />
        <Stack.Screen name="DeviceInfo" component={DeviceInfo} />
        <Stack.Screen name="MyScreenOrientation" component={MyScreenOrientation} />
        <Stack.Screen name="Notify" component={Notify} />
        <Stack.Screen name="ContactsInfo" component={ContactsInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
