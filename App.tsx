import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; //  navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Button } from 'react-native'; //importing some default styles
import ProfileScreen from './components/ProfileScreen';
import ProjectsListScreen from './components/ProjectsListScreen';
import ProjectOverviewScreen from './components/ProjectOverviewScreen';

function HomeScreen({ navigation }) {  // homescreen component
  return (
    <View style={styles.container}>
      <Text>Welcome to StoryPath!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Your Profile!" onPress={() => navigation.navigate('Your Profile')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Explore Projects!" onPress={() => navigation.navigate('Projects')} />
      </View>
    </View>
  );
}

function AboutPage() {
  return (
    <View style={styles.container}>
      <Text>Some info about StoryPath!</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Your Profile" component={ProfileScreen} />
        <Drawer.Screen name="Projects" component={ProjectsListScreen} />
        <Drawer.Screen name="Project Overview" component={ProjectOverviewScreen} />
        <Drawer.Screen name="About" component={AboutPage} />
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
    width: '80%',
  },
});
