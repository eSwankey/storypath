import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ProfileScreen() {
  const [username, setUsername] = useState('');
  const [photo, setPhoto] = useState(null);

  const pickImage = async () => { //async for await
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      alert('Permission to access the camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, //images only
      allowsEditing: true,
      aspect: [3, 3], //
      quality: 1, // 0 to 1
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setPhoto(result.assets[0].uri); //saves frrom array
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>
    
      <TouchableOpacity onPress={pickImage} style={styles.imageContainer}> 
        {photo ? (    
          <Image source={{ uri: photo }} style={styles.profileImage} /> /* conditional, if set to true */
        ) : (
          <View style={styles.placeholderImage}>
            <Text style={styles.addPhotoText}>Tap to add photo</Text>
          </View>
        )}
      </TouchableOpacity>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your name here!"
        value={username}
        onChangeText={setUsername}
      />

      <Button title="Save Profile" onPress={() => alert('Profile Saved!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2196f3',
  },
  imageContainer: {
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  placeholderImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhotoText: {
    color: '#888',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 20,
    textAlign: 'center',
  },
});
