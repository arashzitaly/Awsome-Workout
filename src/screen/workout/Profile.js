import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
export default function profile() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <Image style={styles.Img} source={require('../../assets/image/icons8-user-48.png')}
        />

        <TouchableOpacity style={styles.items}>
          <Text style={styles.TextInput}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row'}}>
        <Image style={styles.Img} source={require('../../assets/image/workout.png')} />
        <TouchableOpacity>
          <Text style={[styles.TextInput,{flexDirection:'row'}]}>Workout Selfing</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row'}}>
        <Image style={styles.Img} source={require('../../assets/image/history.png')} />
        <TouchableOpacity>
          <Text style={styles.TextInput}>History</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  Img: {
    width: 40,
    height: 45,
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 10,
    // justifyContent: 'space-between'
  },
  // inputView: {
  //   backgroundColor: '#FFC0CB',
  //   borderRadius: 30,
  //   width: 170,
  //   height: 45,
  //   marginBottom: 40,
  //   alignItems: 'center',
  //   marginLeft: 10,
  // },
  TextInput: {
    borderRadius: 12,
    backgroundColor: '#FFC0CB',
    height: 60,
    paddingHorizontal: 10,
    width: 190,
    fontSize: 22,
    // flex: 1,
    marginBottom: 50,
    padding: 10,
    marginLeft: 10,
  },
});
