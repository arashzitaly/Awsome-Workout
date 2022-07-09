import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';
import { stringHelper } from "@utility/helper/stringHelper";
import { Header } from "@component/common";
import { useNavigation } from "@react-navigation/native";

export default function TimerComponent()  {

  const [timeElapsed, settimeElapsed] = useState(null);
  const [running, setrunning] = useState(false);
  const [startTime, setstartTime] = useState(null);
  const [laps, setlaps] = useState([]);
  const navigation = useNavigation();

  const handleStartPress=()=> {
    if (running) {
      clearInterval(this.interval);
      setrunning({ running: false });
      return;
    }

    setstartTime({startTime: new Date()});

    this.interval = setInterval(() => {
      settimeElapsed( new Date() - startTime)
      setrunning( true)

    }, 30);
  }

  const handleLapPress=()=> {
    const currentLapTime = timeElapsed;
  setstartTime( new Date());
  setlaps(laps.concat([currentLapTime]));

  }

  const renderStartStopButton=()=> {
    const style = this.state.running ? styles.stopButton : styles.startButton;

    return (
      <View style={styles.container}>
      <Header
        centerText={stringHelper.screens.area}
        leftPress={() => navigation.goBack()}
        leftIcon={stringHelper.icons.return}
        leftText={stringHelper.back}
      />
      <TouchableHighlight
        style={[styles.button, style]}
        underlayColor="gray"
        onPress={()=>handleStartPress()}
      >
        <Text>{ this.state.running ? 'Stop' : 'Start' }</Text>
      </TouchableHighlight>
      </View>
    );
  }

  const renderLapButton=()=> {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="gray"
        onPress={()=>handleLapPress()}>
        <Text>Lap</Text>
      </TouchableHighlight>
    );
  }

  const renderLaps=()=> {
    return (
      <View>
        { laps.map((time, index) => (
          <View style={styles.lap} key={index}>
            <Text style={styles.lapText}>Lap #{index + 1}</Text>
            <Text style={styles.lapText}>{formatTime(time)}</Text>
          </View>
        ))}
      </View>
    );
  }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.timerWrapper}>
            <Text style={styles.timer}>
              { formatTime(timeElapsed) }
            </Text>
          </View>
          <View style={styles.buttonWrapper}>
            { renderStartStopButton() }
            { renderLapButton() }
          </View>
        </View>

        <View style={styles.footer}>
          {renderLaps() }
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  lapText: {
    fontSize: 30
  }
});

