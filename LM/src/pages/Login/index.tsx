import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface LoginScreenState {
  username: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const [state, setState] = useState<LoginScreenState>({
    username: 'Lucas',
    password: '123',
  });

  const handleLogin = () => {
    // Perform login logic using state.username and state.password
    console.log('Username:', state.username);
    console.log('Password:', state.password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setState({ ...state, username: text })}
        value={state.username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setState({ ...state, password: text })}
        value={state.password}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;