//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MediaBar, Label } from './common';
import { AlbumMusic, Controls, HeaderMusic, SeekBar, TrackDetail } from './musicComponents';
// import { SoundPlayer } from 'react-native-sound-player';



// create a component
class App extends Component {
    onPressPlay() {
        var Sound = require('react-native-sound');
        Sound.setCategory('Playback', true);
        var whoosh = new Sound('test2.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }
            // loaded successfully
            console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
          });
          whoosh.play((success) => {
            if (success) {
              console.log('successfully finished playing');
            } else {
              console.log('playback failed due to audio decoding errors');
              // reset the player to its uninitialized state (android only)
              // this is the only option to recover after an error occured and use the player again
              whoosh.reset();
            }
          });
          // Reduce the volume by half
        whoosh.setVolume(0.5);

        // Position the sound to the full right in a stereo field
        whoosh.setPan(1);

        // Loop indefinitely until stop() is called
        whoosh.setNumberOfLoops(-1);

        // Get properties of the player instance
        console.log('volume: ' + whoosh.getVolume());
        console.log('pan: ' + whoosh.getPan());
        console.log('loops: ' + whoosh.getNumberOfLoops());

        // Seek to a specific point in seconds
        whoosh.setCurrentTime(2.5);

        // Get the current playback point in seconds
        whoosh.getCurrentTime((seconds) => console.log('at ' + seconds));

        // Pause the sound
        whoosh.pause();

        // Stop the sound and rewind to the beginning
        whoosh.stop(() => {
        // Note: If you want to play a sound after stopping and rewinding it,
        // it is important to call play() in a callback.
        whoosh.play();
        });

        // Release the audio player resource
        whoosh.release();
          
    } 
    render() {
        return (
            <View style={styles.container}>                
                <HeaderMusic 
                    message="Playing Music App"
                />
                <AlbumMusic
                    url={require('../static/images/Dante-1.jpg')}
                />
                <TrackDetail title="Test 1 music" artist="BBC" />
                <SeekBar trackLength={204} currentPosition={156} />
                <Controls 
                    onPressPlay={this.onPressPlay.bind(this)}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#cccccc',
    },
});

//make this component available to the app
export default App;
