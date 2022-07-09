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
import { Header, Loading } from "@component/common";
import { useNavigation } from "@react-navigation/native";
import * as IntensityActions from '@store/Intensity/IntensityActions';
import {useDispatch, connect} from 'react-redux';

const Intensity = (props) =>  {

  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const arr1 = ['Beginner', 'Intermediate', 'Pro'];
  const arr2 = ['button one', 'button two', 'button three'];
  const {intensityListArray, intensityLoading} = props;
  useEffect(() => {
    dispatch(IntensityActions.getIntensityList());
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
        {intensityLoading ? (
          <Loading />
        ) : (
          intensityListArray.map((data, i) => (
            <TouchableOpacity
              onClick={() => setText(arr2[i])}
              style={styles.loginBtn}>
              <Text style={styles.text}>{data}</Text>
              <Image
                style={styles.image}
                source={require('../../assets/image/Pluse.png')}
              />
            </TouchableOpacity>
          ))
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
    backgroundColor: '#ee557f',

  },
});

const mapStateToProps = (state) => {
  return {
    intensityListArray: state.intensity.intensityList,
    intensityLoading: state.intensity.loading,
  };
};

export default connect(mapStateToProps)(Intensity);
