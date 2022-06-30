import { StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import MyCalendar from '../components/WorkComponents/ScheduleComponent';
import {LinearGradient} from 'expo-linear-gradient';

/*===============work tab===============*/
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>): JSX.Element {
  return (
    <div>
      <View>
        <LinearGradient
        colors={['#EBF4F5','#B5C6E0']}>
          <View style={styles.container}>
            <Text style={styles.title}>Schedule</Text>
            <MyCalendar />
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>Time Bank</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>Documentation</Text>
          </View>
        </LinearGradient>
      </View>
    </div>
  );
}

/*===============Styles of contents===============*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: '2em',
    marginRight: 'auto',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  titleTwo: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'flex-end',
  },
  background: {
  }
});


function hsla(arg0: number, arg1: number, arg2: number, arg3: number): any | import("react-native").ColorValue | undefined {
  throw new Error('Function not implemented.');
}

