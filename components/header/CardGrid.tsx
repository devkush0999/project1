import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const CardGrid = () => {
  const cardData = [
    { id: 1, title: 'Card 1', description: 'Vitae ut urna, lobortis vestibulum in malesuada rhoncusa. Mauris tellus lorem pharetra, velit vulputate 1' },
    { id: 2, title: 'Card 2', description: 'Description for card 2' },
    { id: 3, title: 'Card 3', description: 'Description for card 3' },
    { id: 4, title: 'Card 4', description: 'Description for card 4' },
    { id: 5, title: 'Card 5', description: 'Description for card 5' },
  ];

  const screenWidth = Dimensions.get('window').width;
  const cardWidth = screenWidth < 768 ? (screenWidth - 32) / 2 : (screenWidth - 40) / 3;

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {cardData.map((card) => (
          <View
            key={card.id}
            style={[styles.card, { width: cardWidth }]}
          >
            <Text style={styles.title}>{card.title}</Text>
            <Text style={styles.description}>{card.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    color: '#666',
  },
});

export default CardGrid;