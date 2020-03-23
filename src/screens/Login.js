import React from 'react';
import {
  ImageBackground,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Login = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/wallpaper.jpeg')}>
      <View style={styles.logoContainer}>
        <Text style={styles.textLogoLeft}>SPOTI</Text>
        <Text style={styles.textLogoRight}>FLY</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Username or Email</Text>
        <TextInput keyboardType="email-address" style={styles.inputText} />

        <Text style={styles.label}>Password</Text>
        <TextInput secureTextEntry style={styles.inputText} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {flexDirection: 'row', marginTop: -150, marginBottom: 45},
  textLogoLeft: {
    fontSize: 50,
    color: '#fff',
    fontWeight: '500',
  },
  textLogoRight: {
    fontSize: 50,
    color: '#940B6B',
    fontWeight: '700',
  },
  formContainer: {
    backgroundColor: '#00000055',
    width: '100%',
    height: 250,
    padding: 20,
  },
  label: {color: '#fff'},
  inputText: {backgroundColor: '#ffffff88', borderRadius: 5},
  button: {
    backgroundColor: '#343F4B',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textButton: {
    fontSize: 15,
    color: '#fff',
  },
});
