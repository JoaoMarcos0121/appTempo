import { View, Text, TouchableOpacity, StyleSheet} from "react-native";

import {createStaticNavigation, useNavigation} from '@react-navigation/native';


export default function Home() {
    const navigation = useNavigation();
    return(
        <View style={style.bloco}>
            {/* Titulo do Brasil */}
            <Text style={style.textoBr}> Cidades Brasileiras </Text>

            {/* botao itanhaem */}
            <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate('Itanhaem' as never)}>
                <Text style={style.textoBtn}>Itanhaém (BR) - <Text style={style.textoCidade}>Brasil</Text></Text>
            </TouchableOpacity>
            {/* botao roraima */}
            <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate('Roraima' as never)}>
                <Text style={style.textoBtn}>Roraima (BR) - <Text style={style.textoCidade}>Brasil</Text></Text>
            </TouchableOpacity>

            {/* Titulo do México */}
            <Text style={style.textoMx}> Cidades Mexicanas </Text>
            {/* botao oaxaca */}
            <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate('Oaxaca' as never)}>
                <Text style={style.textoBtn}>Oaxaca (MX) - <Text style={style.textoCidade}>México</Text></Text>
            </TouchableOpacity>
            {/* botao guerrero */}
            <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate('Guerrero' as never)}>
                <Text style={style.textoBtn}>Guerrero (MX) - <Text style={style.textoCidade}>México</Text></Text>
            </TouchableOpacity>

            <Text style={style.textoRodape}> @jmcosta01 </Text>
        </View>
        
    )
}

const style = StyleSheet.create({
bloco:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: '100%',
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 20,
},

textoBr:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B0000',
    marginBottom: 16,
    marginTop: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#3379b3ff',
    textTransform: 'uppercase',
    letterSpacing: 1,
    paddingBottom: 10,
},

textoMx:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B0000',
    marginBottom: 16,
    marginTop: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#3379b3ff',
    textTransform: 'uppercase',
    letterSpacing: 1,
    paddingBottom: 10,
},

textoRodape:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#8B0000',
    marginTop: 20,
    alignContent: 'flex-end',
},

btn:{
    backgroundColor: '#3379b3ff',
    width: '70%',               
    paddingVertical: 18,       
    paddingHorizontal: 24,
    marginVertical: 16,        
    borderRadius: 25,          
    elevation: 5,             
    alignItems: 'center',      
    justifyContent: 'center',
    flexDirection: 'row',      
},

textoBtn:{
    color: '#FFFFFF',
    fontSize: 18,              
    fontWeight: '600',         
    letterSpacing: 0.5,        
    textAlign: 'center',
    textTransform: 'uppercase' 
},

textoCidade:{
    fontSize: 16,
    fontWeight: '400',
    color: '#FFD700',
    textTransform: 'none',
    marginLeft: 8,
},
})
