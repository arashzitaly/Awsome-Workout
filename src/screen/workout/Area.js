import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { stringHelper } from "@utility/helper/stringHelper";
import { Header } from "@component/common";
import { useNavigation } from "@react-navigation/native";
import navigationService from "@navigation/navigationService";
import * as areaActions from '@store/area/areaActions';
import {useDispatch, connect} from 'react-redux';

const Area = (props) =>  {

  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const arr1 = ['that Area ','fh','fgnng' ]
  const arr2 = ['button one', 'button two', 'button three']

  const [email, setEmail] = useState('');

  useEffect(() => {
    dispatch(areaActions.getAreasList());
  }, []);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        centerText={stringHelper.screens.area}
        leftPress={() => navigation.goBack()}
        leftIcon={stringHelper.icons.return}
        leftText={stringHelper.back}
      />
      <KeyboardAvoidingView style={styles.exercises} behavior="position">
        {arr1.map((data, i) =>
          <TouchableOpacity onPress={() =>  navigationService.navigate('TimerComponent')}
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

const mapStateToProps = (state) => {
  return {
    areaListArray: state.area.areaList,
    areaLoading: state.area.loading,
  };
};

export default connect(mapStateToProps)(Area);
