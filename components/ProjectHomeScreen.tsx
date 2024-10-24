import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Dummy data for the project
const project = {
  id: '1',
  title: 'UQ Campus Tour',
  instructions: 'Welcome to the UQ Campus Tour location experience app. Follow the clues and scan the QR codes once you get to the building location.',
  initial_clue: 'Time waits for the Pitch but it will eventually drop.',
  points: 0,
  total_points: 20,
  locations_visited: 0,
  total_locations: 3,
};

function ProjectHome() {
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
  return
