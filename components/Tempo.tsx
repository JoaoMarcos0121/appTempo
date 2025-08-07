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
        Fase: {nomesLua[item.moon_phase] || item.moon_phase}
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
    flexGrow: 1,
    paddingBottom: 20,
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },

  card: {
    width: 350,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 25,
    marginVertical: 12,
    marginHorizontal: 16,
    position: 'relative',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#3379b3ff',
  },

  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    color: '#8B0000',
  },
  
  textoBase: {
    fontSize: 16,
    color: '#3379b3ff',
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
    bottom: 15,
    right: 35,
  },
});
