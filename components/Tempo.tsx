import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import imagensCondicao from '../assets/weatherIcons';
import nomesCondicao from '../assets/weatherNames';

interface Previsao {
  date: string;
  max: number;
  min: number;
  description: string;
  weekday: string;
  condition: string;
}

interface Props {
  dados: Previsao[];
}

export default function Tempo({ dados }: Props) {
  const renderItem = ({ item }: { item: Previsao }) => (
    <View style={styles.card}>
      <Text style={styles.titulo}>{item.weekday} - {item.date}</Text>
      <Text style={styles.texto}>Máx: {item.max}°C | Min: {item.min}°C</Text>
      <Text style={styles.texto}>{item.description}</Text>
      <Text style={styles.textoPequeno}>
        Condição: {nomesCondicao[item.condition] || item.condition}
      </Text>

      {imagensCondicao[item.condition] && (
        <Image source={imagensCondicao[item.condition]} style={styles.imagemCondicao} />
      )}
    </View>
  );

  return (
    <FlatList
      data={dados}
      keyExtractor={(item) => item.date}
      renderItem={renderItem}
      contentContainerStyle={styles.lista}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  card: {
    width: 300,
    minHeight: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 25,
    marginVertical: 12,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    position: 'relative',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  texto: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 6,
  },
  textoPequeno: {
    fontSize: 14,
    color: '#888888',
  },
  imagemCondicao: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
});
