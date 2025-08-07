import { View, Text, StyleSheet, FlatList} from "react-native";
import {useState, useEffect} from 'react';
import Tempo from '../components/Tempo';
import Api from '../components/Api';


export default function Oaxaca() {
    const [dados, setDados] = useState<any[]>([]);

    async function buscaTempo(){
        const response = await Api.get('weather?array_limit=7&fields=only_results,temp,city_name,forecast,max,min,date,weekday,condition,description,moon_phase&key=56966497&city_name=Oaxaca,MX');
        setDados(response.data.forecast);
    }
    useEffect(
        ()=>{buscaTempo()
        },[]);



    return(
        <View style={style.bloco}>
            <Text style={style.titulo}>Previsão do Tempo para Oaxaca</Text>
        <Tempo dados={dados} />
        </View>
    );
}

const style = StyleSheet.create({
bloco: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
},

titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#8B0000',
    // textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#3379b3ff',
    textTransform: 'uppercase',
    letterSpacing: 1,
    paddingBottom: 10,
},

lista: {
    flexGrow: 1,
    paddingBottom: 20,
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
},
})