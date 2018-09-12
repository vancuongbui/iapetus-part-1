//Source code
    https://github.com/StephenGrider/ReactNativeReduxCasts
//If then short-hand
    { condition ? according_result : another_result }
//Downgrade react-native because of version 0.56.0 broken in windows platform
    cd your_app
    npm uninstall react-native
    npm install --save react-native@0.55.4
    npm uninstall --save babel-preset-react-native
    npm install --save babel-preset-react-native@4.0.0
    react-native run-android
//ANDROID_HOME  - in order to set the path to the android sdk, 
                - otherwise, you need to speciy the path each time
    https://www.360logica.com/blog/how-to-set-path-environmental-variable-for-sdk-in-windows/
//Start the app in a fast way, from cmd:
    adb -s 988a1b3143374a514e30 shell am start -n com.auth/com.auth.MainActivity

// FETCHING DATA FROM MEDIUM
    https://medium.com/react-native-training/redux-4-ways-95a130da0cdc

//Debugger by chome:
    run chrome from run
    chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
//link for audio player
    https://www.npmjs.com/package/react-native-track-player
    https://github.com/jsierles/react-native-audio


//Icon:
    - install: npm install --save react-native-elements
                npm install --save react-native-vector-icons
                react-native link
                npm install
    - using:
        import Icon from 'react-native-vector-icons/FontAwesome';
        <TouchableOpacity style={backIcon}>
        <Icon
          name='chevron-left'
          color='#FFFFFF'  
          size={40}           
          />
    - icon directories:
        https://oblador.github.io/react-native-vector-icons/


1. Android Studio
    - Open existing project
    - navigate to react-native project -> choose android
        //without this state, react-native cannot start the device
2. Setting environment variable
    - goto symtem setting / advanced / environment variable/
    - New variable for computer:
        name: JAVA_HOME
        value: C:\Program Files\Java\jdk1.8.0_161
    - Edit "Path" in "Environment Variable"
        - add new path to the "Android-SDK/platform-tools"  //remember the path when install android studio
3. Setting up Atom:
          - go to setting / install
          - search for linter-eslint
          - on the cli within the project:
            npm install --save-dev eslint-config-rallycoding
          - Create new file: .eslintrc
                {
                  "extends": "rallycoding"
                }
                
4. Note: only 1 component inside ract-natve file

5. Axios: to fetch data from API
    - install: npm install --save axios
    - import: import axios from 'axios'
     // create a method to mount data when the app load
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums: response.data}));
    }


HTTP request with react

6. Linking
    - import { Linking } from 'react-native'
    - function to link
        onPress={() => Linking.openURL('https://facebook.github.io/react-native/docs/linking')}


7. Firebase (google)
    - authentication with email
    - install: 
        npm install --save firebase
        npm install
        npm install i -S @firebase/auth
        npm install i -S @firebase/app
        or, other solution recently
            npm install --save react-native-firebase
            react-native link react-native-firebase
    - Import firebase:  //new way to import firebase due to new version
        import firebase from '@firebase/app';
        import '@firebase/auth';

    - on the google web site, click web setup on the right conner, then copy the content
        {
            apiKey: "AIzaSyA8ryJnTd9JUbW12F4d91ZyAQAiWfQRD40",
            authDomain: "iapetus-auth.firebaseapp.com",
            databaseURL: "https://iapetus-auth.firebaseio.com",
            projectId: "iapetus-auth",
            storageBucket: "iapetus-auth.appspot.com",
            messagingSenderId: "80149794474"
        };
    - Security:
        + Setup rules on firebase
           {
                /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
                "rules": {
                    "users": {
                        "$uid": {
                            ".read": "$uid === auth.uid",
                            ".write": "$uid === auth.uid"
                        }
                    }
                }
            }
    - Create record with database - firebase


8. Text Input component
    - import:
        import { TextInput, } from 'react-native';
    - handle the input data

9. Redux
    //import thunk
        import thunk from 'redux-thunk'
    Installation:
        npm install --save redux react-redux
    structure:
        Action --> Reducer --> State
    First: create reducer:
        const reducer = (state = [], action) => {
            if (action.type === 'split_string') {
                return action.payload.split('');
            }
            return state;
        };
    Second: create store of 1 reducer
        const store = Redux.createStore(reducer);
        //to get the state of the store:
            store.getState();
    Third: Create action:
        const action = { 
            type: 'split_string', 
            payload: 'abcdfg' 
        };
        Finally, dispat the action:
            store.dispatch(action);
            - dispatch the action -> meaning send the action to the reducer
            //after that, if you check store.getState(), it will return the actual state of updated action

    9.1. Provider
    Syntax:
        <Provider 
                store={createStore(reducers)}
        >
            <View>
                <Header headerText="IAPETUS" />
            </View>                
        </Provider>
    9.2 Connect: use to access to the store of redux library

    9.3 Redux-thunk
        - install:
            npm install --save redux-thunk
        - purpose: to change behaviour of redux action, in order to return a function instead of an action.

10. FlatList
    <FlatList
        data={this.props.libraries}
        renderItem={({ item }) => <MediaCard 
            title={item.title}
            description={item.description} 
            >                        
        </MediaCard>}
        keyExtractor={library => library.id}
    />
    - three parameters:
        + data: get data from somewhere to render
        + renderItem: pull item from data to render
        + keyExtractor: optional

11. Action Creator
    - Crate index.js inside the action folder
        export const selectLibrary = (LibraryId) => {
            return {
                type: 'select_library',
                payload: LibraryId
            };
        };
    - Then, import the connect helper and map the action with it.

12. TouchableWithouFeedback


class LibraryList extends Component {    
    // renderItem(library) {
    //     return <ListItem library={library} />;
    // }
    render() {
        return (
           
                <FlatList
                    data={this.props.libraries}
                    renderItem={({ item }) => <ListItem
                        title={item.title}
                        description={item.description} 
                        >                        
                    </ListItem>}
                    keyExtractor={library => library.id}
                />
        );        
    }
}

            return this.props.library.content.map((item) => {
                return (
                  <View key={item.item}>
                    <Text>{item.line}</Text>
                  </View>
                );
            });  

12. Router: react-native-router-flux
    - install:
        npm install --save react-native-router-flux
        or npm install --save react-native-router-flux@VERSION  //VERSION = your choice, 4.0 for example
    - Syntax:
        const App = () => (
        <Router>
            <Stack key="root">
            <Scene key="login" component={Login} title="Login" initial/>
            <Scene key="register" component={Register} title="Register"/>
            <Scene key="home" component={Home}/>
            </Stack>
        </Router>
        );
    - Apply router:
        on the main App.js, call the router:
            <Router />
    - To route between pages, the best place to do is the action index
        import on the top of index.js in folder actions
            import { Actions } from 'react-native-router-flux';
        then, navigate to the page in side an action that leads to that page
            const loginUserSuccess = (dispatch, user) => {
                dispatch({
                    type: LOGIN_USER_SUCCESS, payload: user
                });
                // call the action to route to display the main page
                Actions.home(); //home: the key which was set on the Router.js
                Actions.home({ object: object })
            };

13. Keyboard Aware ScrollView
    install:
        npm i -S react-native-keyboard-aware-scroll-view
    import to use:
        import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
        <KeyboardAwareScrollView 
                style={{ backgroundColor: '#FFFFFF' }}
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >

14. Picker
    - import
        import { Picker } from 'react-native'
    - Using
        <Picker
            selectedValue={this.props.language}
            onValueChange={(language) => this.props.formUpdate({ prop: 'language', value: language })}
        >
            <Picker.Item label="English" value="English" />
            <Picker.Item label="Italian" value="Italian" />
            <Picker.Item label="Spanish" value="Spanish" />
            <Picker.Item label="French" value="French" />
            <Picker.Item label="Vietnamese" value="Vietnamese" />
        </Picker>

15. Create optional style for an object
    <View style={[viewStyle, props.style]}>

16. Router
    - Handle back arrow - go back ro parents
        Actions.childComponent({ type: 'reset' })   //to hide the arrow

17. Fetching data
    - on action, create an action of fetching data
        export const employeeCreate = ({ name, phone, language }) => {
            const { currentUser } = firebase.auth();
            return (dispatch) => {
                firebase.database().ref(`/users/${currentUser.uid}/userData`)
                .push({ name, phone, language })
                    .then(() => {
                        dispatch({ type: SUBMIT_SUCCESS });     
                        //dispatch the action above, then ask reducer to create new state of name, phone, language 
                        Actions.employeeList();
                    });
            };
        };

18. Lodash: working with object and array
    - install:
        npm install --save lodash
        react-native link react-native-audio

19. React-native-audio
    - Link
        https://github.com/zmxv/react-native-sound
    - install and link
        npm install react-native-audio --save

    - Using:
        import {AudioRecorder, AudioUtils} from 'react-native-audio';
        let audioPath = AudioUtils.DocumentDirectoryPath + '/test.aac';

        AudioRecorder.prepareRecordingAtPath(audioPath, {
        SampleRate: 22050,
        Channels: 1,
        AudioQuality: "Low",
        AudioEncoding: "aac"
        });
    - Alternative:
        -install:
            npm install react-native-sound --save
            react-native link react-native-sound
        - link:
            https://github.com/zmxv/react-native-sound
        - link 
            https://github.com/zmxv/react-native-sound-demo/blob/master/main.js
        - link: with expo
            https://www.smashingmagazine.com/2018/04/audio-video-recording-react-native-expo/

//Error Reference
- npm start -- --reset-cache
    react-native java.io.IOException: Could not delete path 'D:\Projects\myBase\React-native\iapetus\test_audio\android\app\build\intermediates\classes\debug'.
