import { Text, View } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native-web';

export default function Button({ width = 0, height = 0, title, backgroundColor = '#333', onPress = () => {} }) {
  return (
    <View style={[styles.button, {width, height}]}>
        <TouchableOpacity 
            style={[styles.label, {backgroundColor: backgroundColor}]}
            onPress={() => onPress(title)}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>     
    </View>
  );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
    },
    label: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 32,
    }
  });