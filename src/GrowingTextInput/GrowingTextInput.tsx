import React , {useState, useEffect} from 'react';


import {TextInput, View, Text, StyleSheet} from 'react-native';

const DynamicTextInput = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('Text changed:', text);
  }, [text]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        placeholder="Type something..."
      />
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
  },
});

export default DynamicTextInput;
