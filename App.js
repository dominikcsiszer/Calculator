import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Button from './components/button';
import { useState } from 'react';

const calculatorButtons = [
  [
    {title: 'C', type: 'function'},
    {title: '+/-', type: 'function'},
    {title: '%', type: 'function'},
    {title: '/', type: 'operator'},
  ],
  [
    {title: '7', type: 'number'},
    {title: '8', type: 'number'},
    {title: '9', type: 'number'},
    {title: 'x', type: 'operator'},
  ],
  [
    {title: '4', type: 'number'},
    {title: '5', type: 'number'},
    {title: '6', type: 'number'},
    {title: '-', type: 'operator'},
  ],
  [
    {title: '1', type: 'number'},
    {title: '2', type: 'number'},
    {title: '3', type: 'number'},
    {title: '+', type: 'operator'},
  ],
  [
    {title: '0', type: 'number'},
    {title: ',', type: 'number'},
    {title: '=', type: 'operator'},
  ]
];

export default function App() {
  const {width} = useWindowDimensions();

  const getText = () => {

    return '0';
  }

  return (
    <View style={styles.container}>
      <View style={styles.calc}>
        <Text style={styles.text}>{getText()}</Text>
      </View>
      <View style={styles.buttons}>
        {calculatorButtons.map((row, index) => (
          <View key={index} style={styles.row}>
            {row.map(({title, type}, index) => {
              const color = type === 'operator' ? 'orange' : type === 'function' ? 'gray' : '#333';
              return (
                <Button 
                  key={index} 
                  onPress={(e) => onKeyPress(e)}
                  width={title === '0' ? (width / 2) - 20: (width / 4) - 10}
                  height={100}
                  title={title} 
                  backgroundColor={color}
                />
              )
            })}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  calc: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 60,
  },
  text: {
    fontSize: 60,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
  },
  buttons: {
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
});
