// App.js
import 'react-native-gesture-handler'; // 이 줄 추가
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 앱 실행 시, 로그인 상태를 확인 (예: AsyncStorage 사용)
  useEffect(() => {
    const checkLoginStatus = async () => {
      // 여기에서 로그인 상태를 확인하는 로직을 구현 (예: AsyncStorage에서 확인)
      // const loggedIn = await AsyncStorage.getItem('isLoggedIn');
      // setIsLoggedIn(loggedIn === 'true');
    };

    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? "Home" : "Signup"}>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} // 헤더 숨기기
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupScreen} 
          options={{ headerShown: false }} // 헤더 숨기기
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
