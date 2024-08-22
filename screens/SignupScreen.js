// screens/SignupScreen.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

export default function SignupScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Sinminsang: require('../assets/fonts/Sinminsang.ttf'),
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (!fontsLoaded) {
    return null;
  }

  const handleLogin = () => {
    // 여기에서 백엔드와의 로그인 요청을 처리합니다.
    // 예시로 성공적으로 로그인했다고 가정합니다.
    const loginSuccessful = true; // 실제 로그인 로직을 구현하세요.

    if (loginSuccessful) {
      navigation.navigate('Home'); // 홈 화면으로 이동
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>회원가입</Text>
      <TextInput
        style={styles.input}
        placeholder="아이디를 입력하세요"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호를 입력하세요"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>아이디 찾기</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>비밀번호 찾기</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>회원가입</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.kakaoButton}>
        <Text style={styles.kakaoButtonText}>카카오톡으로 로그인</Text>
      </TouchableOpacity>
    </View>
  );
}

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Sinminsang',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    fontFamily: 'Sinminsang',
  },
  button: {
    backgroundColor: '#407e67',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  footerText: {
    color: '#407e67',
  },
  kakaoButton: {
    backgroundColor: '#FEE500',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  kakaoButtonText: {
    color: '#000',
    fontSize: 18,
  },
});