import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity, button, KeyboardAvoidingView, ScrollView,
} from "react-native";
import { stringHelper } from "@utility/helper/stringHelper";
import { Header } from "@component/common";
import { useNavigation } from "@react-navigation/native";
import navigationService from "@navigation/navigationService";
export default function Workout() {
  const [text, setText] = useState('');
  const arr1 = ['5 workouts', 'Abs_15min', 'Arm_20min','Leg_18min','shoulder & back_25min','chest_30min']
  const arr2 = ['button one', 'button two', 'button three']
  const mapping = () => {
    arr2.map((arr) => {
      return <Text>{arr}</Text>
    })
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        centerText={stringHelper.screens.workout}

      />
      <KeyboardAvoidingView style={styles.exercises} behavior="position">
      {arr1.map((data, i) =>
        <TouchableOpacity onPress={() =>
        {

          navigationService.navigate('Area');
            setText(arr2[i])
        }}
                          style={styles.loginBtn}>
          <Text style={styles.text}>{data}</Text>
          <Image style={styles.image} source={require('../../assets/image/next_arrow.png')}
            // style={{width:30,height:30}}
          />
        </TouchableOpacity>
      )}
      </KeyboardAvoidingView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',

  },
  exercises: {
    alignItems: 'center',
    justifyContent:'center',
    marginTop:25,
    marginLeft:20,
  },
  image:{
    width:25,
    height:25,
  },

  loginBtn: {
    marginEnd:25,
    width: 90,
    borderRadius: 40,
    marginBottom:10,
    height: 50,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#97d8ef',
  },
  text:{
    width: 140,
    borderRadius: 20,
    height: 50,
    textAlign:'center',
    paddingTop:15,
    marginEnd:20,
    // marginTop:10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#97d8ef',

  },
});
