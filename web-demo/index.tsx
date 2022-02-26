import React from 'react';
import {render} from 'react-dom';
import {View, StyleSheet} from 'react-native';
import {Counter} from './src/shared/components/Counter';

const App = () => {
  return (
    <View style={styles.container}>
      <Counter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

render(<App />, document.getElementById('root'));
