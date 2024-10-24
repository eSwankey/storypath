import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';

// Dummy data for projects
const projectsData = {
  '1': {
    title: 'UQ Campus Tour',
    instructions: 'Welcome to the UQ Campus Tour location experience app. Follow the clues and scan the QR codes once you get to the building location.',
    initial_clue: 'Time waits for the Pitch but it will eventually drop.',
    points: 0,
    total_points: 20,
    locations_visited: 0,
    total_locations: 3,
  },
  '2': {
    title: 'UQ Campus Squid Game',
    instructions: 'Navigate through the challenges and avoid elimination!',
    initial_clue: 'The first game is Red Light, Green Light.',
    points: 0,
    total_points: 20,
    locations_visited: 0,
    total_locations: 5,
  }
};

function ProjectHome() {
  const route = useRoute();
  const { projectId } = route.params; // Get the projectId from the navigation params
  const project = projectsData[projectId]; // Fetch the corresponding project data

  return (
    <View style={styles.container}>
      <Text style={styles.projectTitle}>{project.title}</Text>
      
      <View style={styles.card}>
        <Text style={styles.heading}>Instructions</Text>
        <Text>{project.instructions}</Text>
        <Text style={styles.heading}>Initial Clue</Text>
        <Text>{project.initial_clue}</Text>
      </View>

      <View style={styles.statusContainer}>
        <View style={styles.statusCard}>
          <Text style={styles.statusText}>Points</Text>
          <Text style={styles.statusValue}>{project.points} / {project.total_points}</Text>
        </View>
        <View style={styles.statusCard}>
          <Text style={styles.statusText}>Locations Visited</Text>
          <Text style={styles.statusValue}>{project.locations_visited} / {project.total_locations}</Text>
        </View>
      </View>
    </View>
  );
}

function MapViewScreen() {
  return (
    <View style={styles.container}>
      <Text>Map View</Text>
    </View>
  );
}

function QRCodeScannerScreen() {
  return (
    <View style={styles.container}>
      <Text>QR Code Scanner</Text>
    </View>
  );
}

// Bottom tab navigation
const Tab = createBottomTabNavigator();

export default function ProjectHomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Project Home" component={ProjectHome} />
      <Tab.Screen name="Map" component={MapViewScreen} />
      <Tab.Screen name="QR Code Scanner" component={QRCodeScannerScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  projectTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196f3',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f0f8ff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusCard: {
    backgroundColor: '#ff6347',
    padding: 20,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  statusText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  statusValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
