import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProjectOverviewScreen({ route }) {
  const { projectId } = route.params; // Accessing projectId from params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project Overview for {projectId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196f3',
  },
});
