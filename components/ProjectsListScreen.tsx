import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Dummy data for projects
const projects = [
  { id: '1', title: 'UQ Campus Tour', participants: 51 },
  { id: '2', title: 'UQ Campus Squid Game', participants: 2 },
];

export default function ProjectsListScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.projectItem} 
      onPress={() => navigation.navigate('ProjectHome', { projectId: item.id })} // Ensure this name matches
    >
      <Text style={styles.projectTitle}>{item.title}</Text>
      <View style={styles.participantsBadge}>
        <Text style={styles.participantsText}>Participants: {item.participants}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Projects</Text>
      <FlatList
        data={projects}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2196f3',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 30,
  },
  projectItem: {
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  participantsBadge: {
    backgroundColor: '#2196f3',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  participantsText: {
    color: '#fff',
    fontSize: 14,
  },
});
