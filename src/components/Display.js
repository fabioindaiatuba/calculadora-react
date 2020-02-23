import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  displayValue: {
    fontSize: 60,
    color: '#fff',
  },
  displayLow: {
    fontSize: 30,
  },
});

export default props => {
  const stylesDisplay = [styles.displayValue];
  if (props.value.length > 10) {
    stylesDisplay.push(styles.displayLow);
  }
  return (
    <View style={styles.display}>
      <Text style={stylesDisplay}>{props.value}</Text>
    </View>
  );
};
