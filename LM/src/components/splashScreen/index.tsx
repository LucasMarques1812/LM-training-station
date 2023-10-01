import React, {useEffect} from 'react';
import {Container, LogoImage} from './style';
import {StatusBar} from 'react-native';

interface SplashScreenProps {
  navigation: any;
}

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, [navigation]);

  return (
    <Container>
      <StatusBar backgroundColor="#ffff" />
      <LogoImage
        source={require('../../assets/logo/logo.png')}
        resizeMode="contain"
      />
    </Container>
  );
};

export default SplashScreen;
