import React, {Component} from 'react';

import {StyleSheet, Text, TouchableOpacity, View, ScrollView, Alert} from 'react-native';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { audioTests } from '../static/album';
// import reducers
import reducers from '../reducers';
// import redux action from actions
import { preloadAudio, playingAudio } from '../actions';
      

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30,
    padding: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(240,240,240,1)',
  },
  button: {
    fontSize: 20,
    backgroundColor: 'rgba(220,220,220,1)',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    padding: 7,
  },
  header: {
    textAlign: 'left',
  },
  feature: {
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgb(180,180,180)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(230,230,230)',
  },
});

const Button = ({ onPress, iconName }) => (
  <TouchableOpacity onPress={onPress}>
        <Icon
          name={iconName}
          color='#111111'  
          size={30}           
          />
  </TouchableOpacity>
);

const Header = ({children, style}) => <Text style={[styles.header, style]}>{children}</Text>;

const Feature = ({title, onPress, description, iconName, status}) => (
  <View style={styles.feature}>
    <Header style={{flex: 1}}>{title}</Header>
    {status ? <Text style={{padding: 5}}>{resultIcons[status] || ''}</Text> : null}
    <Button onPress={onPress} iconName={iconName} />
  </View>
);

const resultIcons = {
  '': '',
  pending: '?',
  playing: '\u25B6',
  win: '\u2713',
  fail: '\u274C',
};


function setTestState(testInfo, component, status) {
  component.setState({tests: {...component.state.tests, [testInfo.title]: status}});
}

/**
 * Generic play function for majority of tests
 */
function playSound(testInfo, component) {
  setTestState(testInfo, component, 'pending');

  const callback = (error, sound) => {
    if (error) {
      Alert.alert('error', error.message);
      setTestState(testInfo, component, 'fail');
      return;
    }
    setTestState(testInfo, component, 'playing');
    // Run optional pre-play callback
    testInfo.onPrepared && testInfo.onPrepared(sound, component);
    sound.play(() => {
      // Success counts as getting to the end
      setTestState(testInfo, component, 'win');
      // Release when it's done so we're not using up resources
      sound.release();
    });
  };

  // If the audio is a 'require' then the second parameter must be the callback.
  if (testInfo.isRequire) {
    const sound = new Sound(testInfo.url, error => callback(error, sound));
  } else {
    const sound = new Sound(testInfo.url, testInfo.basePath, error => callback(error, sound));
  }
}

class Main extends Component {
  constructor(props) {
    super(props);

    Sound.setCategory('Playback', true); // true = mixWithOthers

    // Special case for stopping
    this.stopSoundLooped = () => {
      if (!this.state.loopingSound) {
        return;
      }

      this.state.loopingSound.stop().release();
      this.setState({loopingSound: null, tests: {...this.state.tests, ['mp3 in bundle (looped)']: 'win'}});
    };

    this.state = {
      loopingSound: undefined,
      tests: {},
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.title}>react-native-sound-demo</Header>
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
          {audioTests.map(testInfo => {
            return (
              <Feature
                status={this.state.tests[testInfo.title]}
                key={testInfo.title}
                title={testInfo.title}
                onPress={() => {
                  return playSound(testInfo, this);
                }}
                iconName={this.props.preloadAudio.payload}
              />
            );
          })}
          <Feature title="mp3 in bundle (looped)" buttonLabel={'STOP'} onPress={this.stopSoundLooped} />
        </ScrollView>
      </View>
    );
  }
}
//create mapStateToProps
// const mapStateToProps = (state) => {
//   const iconName = state.iconName;
//   return { iconName };
// };

// export default connect(mapStateToProps, { preloadAudio, playingAudio })(Main);
export default Main;
