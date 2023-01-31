
import { StyleSheet, Text, View, TextInput, Button, Pressable, Image, TouchableOpacity, FlatList, SafeAreaView, StatusBar ,ToastAndroid} from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as axios from 'axios';
function HomeScreen() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      src: require('./assets/bag.jpg'),

    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      src: require('./assets/logo.png'),

    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      src: require('./assets/logo.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      src: require('./assets/logo.png'),

    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      src: require('./assets/logo.png'),

    },
  ];



  const renderItem = ({ item }) => {
    return (
      <View style={styles.frame4}>
        <View style={styles.frame4_row1}>
          <Image
            style={styles.productImg}
            source={item.src} />
        </View>

        <Text style={styles.product_title}>{item.title}</Text>
        <Text style={styles.product_title}>{item.title}</Text>
        <Text style={styles.product_title}>{item.title}</Text>

      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container11}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.column}
        keyExtractor={item => item.id}
        numColumns={2} />
    </SafeAreaView>
  );
}

const Signup = (props) => {
  const { navigation } = props;

  const [name, setName] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  // const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const handleRegister = async () => {
    const patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const patternName = /^\w[\w.]{2,18}\w$/;
    const patternFullname = /^\w[\w.]{2,18}\w$/;
    const patternPassword= /^\w[\w.]{2,18}\w$/;

    const checkName = patternName.test(name);
    const checkPassword = patternPassword.test(password);
    const checkFullname = patternFullname.test(fullname);
    const checkEmail = patternEmail.test(email);
    if (!checkName) {
      console.log('nhap sai ten', ToastAndroid.SHORT);
      return;
    }
    if (!checkEmail) {
      console.log('Email is not valid', ToastAndroid.SHORT);
      return;
    }
    if (!checkFullname) {
      console.log('nhap sai username', ToastAndroid.SHORT);
      return;
    }

    if(!checkPassword){
      console.log('khong de trong passworld', ToastAndroid.SHORT);
      return;
    }
    if(password!=password2){
      console.log('passworld khong giong nhau', ToastAndroid.SHORT);
      return;
    }
    const success = true;

    if(success){
        ToastAndroid.show("dang ky  thanh cong", ToastAndroid.SHORT);
        setFullname('');
        setEmail('');
        setPassword('');
        setPassword2('');
    }else{
      ToastAndroid.show("dang ky khong thanh cong !", ToastAndroid.SHORT);
    }
          // navigation.navigate('Home');

  }


  return (
    <View style={styles.frame1}>
      <View style={styles.frame2}>
        <Image
          style={styles.tinyLogo}
          source={require('./assets/textimg.png')} />
      </View>
     
      <View style={styles.frame2}>
        <Text style={styles.welcome}>Real Scoial Networking</Text>

      </View>
      <Text style={styles.again}>Register</Text>
      <View style={styles.frame3}>
        <Image
          style={styles.imageStyle}
          source={require('./assets/name.png')} />
        <TextInput style={{ flex: 1 ,padding:10}}
          placeholder='Name'
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.frame3}>
        <Image
          style={styles.imageStyle}
          source={require('./assets/name.png')} />
        <TextInput style={{ flex: 1 ,padding:10}}
          placeholder='User Name'
          value={fullname}
          onChangeText={setFullname}
        />
      </View>

      <View style={styles.frame3}>
        <Image
          style={styles.imageStyle}
          source={require('./assets/mail.png')} />
        <TextInput style={{ flex: 1 ,padding:10}}
          placeholder='Your Email'
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.frame3}>
        <Image
          style={styles.imageStyle}
          source={require('./assets/passs.png')} />
        <TextInput style={{ flex: 1 ,padding:10}}
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.frame3}>
        <Image
          style={styles.imageStyle}
          source={require('./assets/pass1.png')} />
        <TextInput style={{ flex: 1 ,padding:10}}
          placeholder='Password Again'
          value={password2}
          onChangeText={setPassword2}
          secureTextEntry
        />

      </View>
      <View  style={styles.frame4_row1}>
      <TouchableOpacity
        style={{
          marginTop: 21, width: '30%', height: 45, backgroundColor: '#1AE4A6', borderRadius: 12, justifyContent: 'center', alignItems: 'center'
        }}
        onPress={handleRegister}
        underlayColor='#fff'>
        <Text style={{ fontSize: 21, color: '#fff', fontStyle: 'bold' }}>Login</Text>
      </TouchableOpacity>
      </View>
        <Text style={{ fontSize: 10, textAlign:'center', color:'#B4B4B4'}}>By register you agree to our tems, Data policy and Cookies Policy</Text>
      <Text style={styles.continuewith}>have an account? <Pressable onPress={() => navigation.popToTop()}>
          <Text style={{ color: '#1877F2', lineHeight: 18 }}> Sign In</Text>
        </Pressable></Text>

    </View>
  );
}

const Login = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const handleLogin = async () => {
    // const patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // const patternPassword= /^\w[\w.]{2,18}\w$/;

    // const checkEmail = patternEmail.test(email);
    // const checkPassword = patternPassword.test(password);
    // if (!checkEmail) {
    //   console.log('Email is not valid', ToastAndroid.SHORT);
    //   return;
    // }
    // if(!checkPassword){
    //   console.log('khong de trong passworld', ToastAndroid.SHORT);
    //   return;
    // }
    // const success = true;


    // if(success){
    //   navigation.navigate('Home');

    // }else{
    //   ToastAndroid.show("dang nhap khong thanh cong !", ToastAndroid.SHORT);
    // }
    axios.post('http://192.168.1.195:3000/api/v1/api_login_post', {
      email: email,
      password: password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }


  return (
    <View style={styles.frame1}>
      <View style={styles.frame2}>
        {/* <Image
          style={styles.loginpicture}
          source={require('./assets/login.png')} /> */}
      </View>
   
      <View>
        <Text style={styles.welcome}></Text>
        <Text style={styles.welcome}></Text>
      </View>
      <View style={styles.frame3}>
        <Image
          style={styles.imageStyle}
          source={require('./assets/mail.png')} />
        <TextInput style={{ flex: 1 ,padding:10}}
          placeholder='Your Email'
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.frame3}>
        <Image
          style={styles.imageStyle}
          source={require('./assets/passs.png')} />
        <TextInput style={{ flex: 1 ,padding:10}}
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
        />
      </View>
      
      <View  style={styles.frame4_row1}>
      <TouchableOpacity
        style={{
          marginTop: 21, width: '30%', height: 45, backgroundColor: '#1AE4A6', borderRadius: 12, justifyContent: 'center', alignItems: 'center'
        }}
        onPress={handleLogin}
        underlayColor='#fff'>
        <Text style={{ fontSize: 21, color: '#fff', fontStyle: 'bold' }}>Logiaaaaaan</Text>
      </TouchableOpacity>
      </View>
        <Text style={{ fontSize: 10, textAlign:'center', color:'#B4B4B4'}}>By register you agree to our tems, Data policy and Cookies Policy</Text>
      <Text style={styles.continuewith}>don't have an account? 
      <Pressable  onPress={handleLogin}>
          <Text style={{ color: '#1877F2', lineHeight: 18 }}> Sign Up</Text>
        </Pressable>

      </Text>

    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Signup} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  loginpicture:{
    width: 300,
    height: 250,
  },
  frame4_row1: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  productImg: {
    width: 95,
    height: 95,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  frame3: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EBF0FF',
    height: 46,
    borderRadius: 5,
    marginTop: 16
  },
  frame2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  tinyLogo: {
    width: 250,
    height: 50,
    marginTop: 64,
  },
  continuewith: {
    marginTop: 6,
    textAlign: 'center',
    justifyContent: 'center',
  },
  blue_text: {
    color: '#1877F2',

  },
  again: {
    textAlign: 'center',
    color: '#1877F2',
    fontSize: 22,
    fontWeight: '700',
  },
  welcome: {
    color: '#009EFD',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 4,
    lineHeight: 30,
    width: 220,
    textAlign: 'center',

  },
  inputUsername: {
    marginTop: 12,
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',

    borderRadius: 6
  },
  frame1: {
    backgroundColor: 'white',
    padding: 24,
    flex: 1,
    flexDirection: 'column'
  },
  container11: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  frame4: {
    width: '47%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f9c2ff',
    padding:6,
    margin:6,
    borderColor: '#4e4b66',
    borderWidth: 1,

  },
  product_title: {
    fontSize: 18,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});