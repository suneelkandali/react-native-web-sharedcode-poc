import React, {useState} from 'react';
import {Pressable, Text, View, StyleSheet, ViewStyle} from 'react-native';

const centered: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

const SIZE = 100;
const FONT_SIZE = SIZE / 2;

const styles = StyleSheet.create({
  container: {
    ...centered,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ee7767',
  },
  counter: {
    ...centered,
    height: SIZE,
    width: SIZE,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  numberText: {
    color: '#ee7767',
    fontWeight: 'bold',
    fontSize: FONT_SIZE,
  },
  buttonText: {
    color: 'white',
    fontSize: FONT_SIZE,
  },
  button: {
    ...centered,
    height: SIZE,
    width: SIZE,
  },
});

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    return setCount(count + 1);
  };
  const decrement = () => {
    return count > 0 && setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={decrement}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <View style={styles.counter}>
        <Text style={styles.numberText}>{count}</Text>
      </View>
      <Pressable style={styles.button} onPress={increment}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

/*import React from 'react';
import {View, Text} from 'react-native';

export const Counter = () => {
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
}; */
