import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Button } from 'react-native';

// Screens for the Drawer Navigation
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to StoryPath!</Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="Create Profile!" 
          onPress={() => navigation.navigate('Create Profile')} 
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Explore Projects!" 
          onPress={() => navigation.navigate('Explore Projects')} 
        />
      </View>
    </View>
  );
}

function CreateProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Create your profile here!</Text>
    </View>
  );
}

function ExploreProjectsScreen() {
  return (
    <View style={styles.container}>
      <Text>Explore the projects here!</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Create Profile" component={CreateProfileScreen} />
        <Drawer.Screen name="Explore Projects" component={ExploreProjectsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%', // Make buttons stretch across 80% of the screen
  },
});
