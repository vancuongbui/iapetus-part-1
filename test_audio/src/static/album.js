import Sound from 'react-native-sound';
export const audioTests = [
    {
      title: 'mp3 in bundle',
      url: 'test1.mp3',
      basePath: Sound.MAIN_BUNDLE,
    },
    {
      title: 'mp3 in bundle (looped)',
      url: 'test2.mp3',
      basePath: Sound.MAIN_BUNDLE,
      onPrepared: (sound, component) => {
        sound.setNumberOfLoops(-1);
        component.setState({loopingSound: sound});
      },
    },
    {
      title: 'mp3 via require()',
      isRequire: true,
      url: require('../static/audios/test_5.mp3'),
    },
    {
      title: 'mp3 remote download',
      url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
    },
    {
      title: 'mp3 remote - file doesn\'t exist',
      url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/file-not-here.mp3',
    },
    {
      title: 'aac remote download',
      url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/pew2.aac',
    },
    {
      title: 'wav remote download',
      url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav',
    },
    {
      title: 'aac via require()',
      isRequire: true,
      url: require('../static/audios/test_6.mp3'),
    },
    {
      title: 'wav via require()',
      isRequire: true,
      url: require('../static/audios/test_7.mp3'),
    },
  ];