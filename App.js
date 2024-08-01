import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Button from './components/button';
import { useState } from 'react';
import { calculate } from './utils/calculate';

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

  const [clearLabel, setClearLabel] = useState('AC');
  const [operator, setOperator] = useState('');
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');

  const onKeyPress = key => {
    switch(key) {
        case 'AC':
            setFirstValue('');
            setOperator('');
            setSecondValue('');
            break;
        case 'C':
            if (secondValue !== '') {
                setSecondValue('');
            } else {
                setFirstValue('');
            }

            setClearLabel('AC');
            break;
        case '+/-':
            if (firstValue !== '' || secondValue !== '') 
                if (firstValue !== '' && secondValue === '') 
                    setFirstValue(parseFloat((firstValue * -1)).toString());
                else 
                    setSecondValue(parseFloat((secondValue * -1)).toString());
            break;
        case '%':
            setFirstValue(calculate(firstValue, secondValue, '%'));
            setSecondValue('');
            setOperator('');
            break;
        case '/':
        case 'x':
        case '-':
        case '+':
            if (secondValue !== '') {
              setFirstValue(calculate(firstValue, secondValue, operator));
              setSecondValue('');
              setOperator('');
            } else 
                setOperator(key);
            break;
        case '=':
            setFirstValue(calculate(firstValue, secondValue, operator));
            setSecondValue('');
            setOperator('');
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case ',':
            setClearLabel('C');
            if(firstValue.length > 9 || secondValue.length > 9) return;
            if (operator === '')
                setFirstValue( e => `${e}${key}`);
            else
                setSecondValue( e => `${e}${key}`);
            break;
    }
  }

  const getText = () => {
    if (secondValue !== '') return secondValue;
    if (firstValue === '') return '0';

    return firstValue;
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
                  title={title == 'AC' || title == 'C' ? clearLabel : title} 
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
