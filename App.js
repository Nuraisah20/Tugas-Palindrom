import { Alert, Button, Image, Text, TextInput, View, ToastAndroid } from "react-native";
import React from 'react';

// Fungsi untuk memeriksa apakah sebuah string adalah palindrome atau tidak
const isPalindrome = (str) => {
  // Menghapus spasi dan mengubah menjadi huruf kecil semua
  str = str.toLowerCase().replace(/[\W_]/g, '');
  // Memeriksa apakah string adalah palindrome
  return str === str.split('').reverse().join('');
};

export default function App() {
  const [inputText, setInputText] = React.useState('');

  const handleCheckPalindrome = () => {
    if (isPalindrome(inputText)) {
      Alert.alert('Palindrome', 'Kata yang dimasukkan adalah palindrome.');
    } else {
      Alert.alert('Bukan Palindrome', 'Kata yang dimasukkan bukan palindrome.');
    }

    // Tampilkan Toast Android
    ToastAndroid.showWithGravity(
      isPalindrome(inputText) ? "Ini Palindrome!" : "Bukan Palindrome!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        color:'red',
        margin:10,
      }}>
        Nama Saya Aisah
      </Text>
      <Image 
        style={{
          width: 200,
          height: 200,
        }}
        source={{uri: 'https://i.pinimg.com/564x/2e/47/f4/2e47f42446ee9783e39af5c1a1fd7373.jpg' }}
      />
      <TextInput
        style={{
          borderWidth:1,
          borderColor:'black',
          width: 200,
          height: 40,
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
        placeholder="Tebak gambar ini"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
      <Button 
        title="Cek"
        onPress={handleCheckPalindrome}
      />
    </View>
  );
}
