import { StyleSheet, View,} from 'react-native';
import DeviceInfo from './screens/DeviceInfo';
import BatteryInfo from './screens/BatteryInfo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}x>
       <DeviceInfo />
      {/*<BatteryInfo/>*/}
    </View>
  )
}
