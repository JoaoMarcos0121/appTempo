import { View, Text, StyleSheet, FlatList} from "react-native";
import {useState, useEffect} from 'react';
import Tempo from '../components/Tempo';
import Api from '../components/Api';


export default function Itanhaem() {
    const [dados, setDados] = useState<any[]>([]);

    async function buscaTempo(){
        const response = await Api.get('weather?array_limit=4&fields=only_results,temp,city_name,forecast,max,min,date,weekday,condition,description&key=56966497&city_name=Itanhaem,SP');
        setDados(response.data.forecast);
    }
    useEffect(
        ()=>{buscaTempo()
        },[]);



    return(
        <View style={style.bloco}>
            <Text style={style.titulo}>Previsão do Tempo para Itanhaém</Text>
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
},
titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333333',
    textAlign: 'center',
},
lista: {
    paddingBottom: 20,
    alignItems: 'center',
},
})