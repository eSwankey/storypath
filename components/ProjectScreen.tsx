// used in ProjectOverviewScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProjectOverviewScreen({ route }) {
  const { projectId } = route.params; // Get ID from nav params

  // sse projectId to determine which project to display e.g fetch data/ use static data
  
  return (
    <View style={styles.container}>
      <Text>Project Overview for Project ID: {projectId}</Text>
      
    </View>
  );
}

// Styles not implemented
