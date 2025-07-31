import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import imagensCondicao from '../assets/weatherIcons';
import nomesCondicao from '../assets/weatherNames';
import moonIcons from '../assets/moonIcons';
import nomesLua from '../assets/moonNames';

interface Previsao {
  date: string;
  max: number;
  min: number;
  description: string;
  weekday: string;
  condition: string;
  moon_phase: string;
}

interface Props {
  dados: Previsao[];
}

export default function Tempo({ dados }: Props) {
  const renderItem = ({ item }: { item: Previsao }) => (
    <View style={styles.card}>
      
      {/* descrição do tempo */}
      <Text style={styles.titulo}>{item.weekday} - {item.date}</Text>
      <Text style={styles.textoBase}>Máx: {item.max}°C | Min: {item.min}°C</Text>
      <Text style={styles.textoBase}>{item.description}</Text>

      {/* descrição da condição */}
      <Text style={styles.textoBase}>
        Condição: {nomesCondicao[item.condition] || item.condition}
      </Text>

      {/* descrição da lua */}
      <Text style={styles.textoBase}>
        Lua: {nomesLua[item.moon_phase] || item.moon_phase}
      </Text>

      {/* ícones de condição e lua */}
      {imagensCondicao[item.condition] && (
        <Image source={imagensCondicao[item.condition]} style={styles.imagemCondicao} />
      )}
      {moonIcons[item.moon_phase] && (
        <Image source={moonIcons[item.moon_phase]} style={styles.imagemLua} />
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
    width: 350,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 25,
    marginVertical: 12,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    position: 'relative',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#0487D9',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    color: '#333333',
  },
  textoBase: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 10,
  },
  imagemCondicao: {
    width: 90,
    height: 90,
    position: 'absolute',
    bottom: 120,
    left: 230,
  },
  imagemLua: {
    width: 70,
    height: 70,
    position: 'absolute',
    bottom: 0,
    right: 35,
    zIndex: 1,
  },
});
