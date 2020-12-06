import { StatusBar } from 'expo-status-bar';
import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import ManagerContainer from './src/components/managerContainer';

const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <ManagerContainer />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
  },
});

export default App;