import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProjectOverviewScreen({ route }) {
  const { projectId } = route.params; // Accessing projectId from params

  let projectContent;

  if (projectId === '1') {
    projectContent = (
      <View style={styles.card}>
        <Text style={styles.title}>UQ Campus Tour</Text>
        <Text style={styles.heading}>Instructions</Text>
        <Text>Welcome to the UQ Campus Tour location experience app. Follow the clues and scan the QR codes once you get to the building location.</Text>
        <Text style={styles.heading}>Initial Clue</Text>
        <Text>Time waits for the Pitch but it will eventually drop.</Text>
        <View style={styles.statusContainer}>
          <View style={styles.statusCard}>
            <Text style={styles.statusText}>Points</Text>
            <Text style={styles.statusValue}>0 / 20</Text>
          </View>
          <View style={styles.statusCard}>
            <Text style={styles.statusText}>Locations Visited</Text>
            <Text style={styles.statusValue}>0 / 3</Text>
          </View>
        </View>
      </View>
    );
  } else if (projectId === '2') {
    projectContent = (
      <View style={styles.card}>
        <Text style={styles.title}>UQ Campus Squid Game</Text>
        <Text style={styles.heading}>Instructions</Text>
        <Text>Instructions for the UQ Campus Squid Game go here.</Text>
        <Text style={styles.heading}>Initial Clue</Text>
        <Text>Clue details for the Squid Game go here.</Text>
        <View style={styles.statusContainer}>
          <View style={styles.statusCard}>
            <Text style={styles.statusText}>Points</Text>
            <Text style={styles.statusValue}>0 / 20</Text>
          </View>
          <View style={styles.statusCard}>
            <Text style={styles.statusText}>Locations Visited</Text>
            <Text style={styles.statusValue}>0 / 3</Text>
          </View>
        </View>
      </View>
    );
  } else {
    projectContent = (
      <Text style={styles.title}>Project Overview not found.</Text>
    );
  }

  return (
    <View style={styles.container}>
      {projectContent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  card: {
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    padding: 20,
    width: '100%', // Full width of the parent container
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196f3',
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
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
