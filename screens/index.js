import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from "@react-navigation/native";
import BatteryInfo from "./BatteryInfo";
import DeviceInfo from "./DeviceInfo";
import Home from "./Home";
import MyScreenOrientation from "./MyScreenOrientation";
import Notify from "./Notify";
import ContactsInfo from "./ContactsInfo";
import AgendaScreen from "./AgendaScreen";
import TelaNovaWow from "./TelaNovaWow";
import Sensors from "./Sensors";
import CaptureScreen from "./CaptureScreen";

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
        <Stack.Screen name="AgendaScreen" component={AgendaScreen} />
        <Stack.Screen name="TelaNovaWow" component={TelaNovaWow} />
        <Stack.Screen name="Sensors" component={Sensors} />
        <Stack.Screen name="CaptureScreen" component={CaptureScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
