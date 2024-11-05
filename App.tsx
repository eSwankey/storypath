import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, TouchableWithoutFeedback } from 'react-native';
import ProfileScreen from './components/ProfileScreen';
import ProjectsListScreen from './components/ProjectsListScreen';
import ProjectOverviewScreen from './components/ProjectOverviewScreen';
import AboutPage from './components/AboutPage';

export default function App() {
  const [username, setUsername] = useState('');
  const [photo, setPhoto] = useState(null);
  const [theme, setTheme] = useState('light');
  const [showPalette, setShowPalette] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(true);
  const [showTip, setShowTip] = useState(false); // Included but not yet implemented

  const handleProfileUpdate = (newUsername, newPhoto) => {
    setUsername(newUsername);
    setPhoto(newPhoto);
  };

  // The recentprojects list is hardcoded for now, but here I would have ideally used API get calls to retrieve the projects that I have added in the project lists page
  const recentProjects = [
    { id: '1', title: 'UQ Campus Tour', points: '0 / 20', locationsVisited: '0 / 3' },
    { id: '2', title: 'UQ Campus Squid Game', points: '0 / 20', locationsVisited: '0 / 3' },
  ];

  //using the useEffect hook for updating the DOM. I tried to add a "tip" box which tells the user how to update their profile (and dissapears after a short time), however was unable to do so.
  useEffect(() => {
    if (username && photo) {
      setShowTip(false); //Hide the tip box if user logged in
    } else {
      setShowTip(true); // Show the tip box if user not logged in
      const timer = setTimeout(() => {
        setShowTip(false); // Automatically hide the tip after 5 secs
      }, 5000);
      return () => clearTimeout(timer); // Reset timer
    }
  }, [username, photo]);

  function HomeScreen({ navigation }) {
    const navigateToProject = (projectId) => {
      navigation.navigate('Project Overview', { projectId }); //projectId prop passed to naviagte to the respective project detail screens
    };

    return (
      <TouchableWithoutFeedback onPress={() => setShowSuggestion(false)}>
        <View style={[styles.container, theme === 'dark' ? styles.darkBackground : styles.lightBackground]}>
          {username && photo ? (
            <>
              <Text style={[styles.welcomeText, theme === 'dark' ? styles.lightText : styles.darkText]}>
                Welcome back, {username}!
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Your Profile')}>
                <Image source={{ uri: photo }} style={styles.profileImage} />
                {/* Again, tip box not yet implemented */}
                {showTip && (
                  <View style={styles.tipBox}>
                    <Text style={styles.tipText}>Tap to edit your profile!</Text>
                  </View>
                )}
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={[styles.welcomeText, theme === 'dark' ? styles.lightText : styles.darkText]}>
                Welcome to StoryPath!
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Your Profile')}>
                <View style={styles.placeholderImage} />
              </TouchableOpacity>
            </>
          )}

          {/* Recent projects list */}
          <Text style={[styles.recentProjectsTitle, theme === 'dark' ? styles.lightText : styles.darkText]}>
            Recent Projects:
          </Text>
          <FlatList
            data={recentProjects}
            renderItem={({ item }) => (
              <TouchableOpacity //changes styling depending on dark or light mode
                style={[styles.projectItem, theme === 'dark' ? styles.darkProjectItem : styles.lightProjectItem]}
                onPress={() => navigateToProject(item.id)}
              >
                <Text style={[styles.projectTitle, theme === 'dark' ? styles.lightText : styles.darkText]}>
                  {item.title}
                </Text>
                <View style={styles.statusContainer}>
                  <Text style={[styles.statusText, theme === 'dark' ? styles.lightText : styles.darkText]}>
                    Points: {item.points}
                  </Text>
                  <Text style={[styles.statusText, theme === 'dark' ? styles.lightText : styles.darkText]}>
                    Locations Visited: {item.locationsVisited}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            style={styles.projectsList}
          />

          {/* All projects button takes user to project list screen */}
          <TouchableOpacity style={styles.exploreButton} onPress={() => navigation.navigate('Projects')}>
            <Text style={styles.exploreButtonText}>All Projects</Text>
          </TouchableOpacity>

          {/* Color palette button */}
          {showPalette && (
            <View style={styles.colorPalette}>
              <TouchableOpacity onPress={() => setTheme('light')} style={[styles.colorOption, styles.lightOption]}>
                <Text style={styles.colorText}>Light Mode</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setTheme('dark')} style={[styles.colorOption, styles.darkOption]}>
                <Text style={styles.colorText}>Dark Mode</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: theme === 'dark' ? '#444' : '#fff',
            },
            headerTintColor: theme === 'dark' ? '#fff' : '#000',
            headerRight: () => (
              <TouchableOpacity onPress={() => setShowPalette(!showPalette)} style={styles.paletteButton}>
                <Text style={styles.paletteText}>🎨</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Drawer.Screen name="Your Profile">
          {() => <ProfileScreen handleProfileUpdate={handleProfileUpdate} />}
        </Drawer.Screen>
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
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '20%',
  },
  aboutText: {
    fontSize: 18,
    color: '#000',
  },
  lightBackground: {
    backgroundColor: '#FFFFFF',
  },
  darkBackground: {
    backgroundColor: '#333333',
  },
  paletteButton: {
    padding: 10,
    borderRadius: 25,
  },
  paletteText: {
    fontSize: 24,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  placeholderImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#7d7d7d',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  suggestionBox: {
    position: 'absolute',
    top: '15%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#000000aa',
    borderRadius: 8,
    alignSelf: 'center',
  },
  suggestionText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  recentProjectsTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  projectsList: {
    width: '80%',
    marginBottom: 20,
  },
  projectItem: {
    padding: 15,
    backgroundColor: '#f0f8ff',
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'flex-start',
    width: '100%',
  },
  darkProjectItem: {
    backgroundColor: '#444',
  },
  lightProjectItem: {
    backgroundColor: '#f0f8ff',
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
  statusText: {
    fontSize: 14,
  },
  exploreButton: {
    backgroundColor: '#2196f3',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -50 }],
  },
  exploreButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  colorPalette: {
    position: 'absolute',
    right: 0,
    top: 60,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    zIndex: 1,
  },
  colorOption: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  lightOption: {
    backgroundColor: '#D0E9C6',
  },
  darkOption: {
    backgroundColor: '#B0B0B0',
  },
  colorText: {
    fontSize: 16,
  },
  lightText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
});

