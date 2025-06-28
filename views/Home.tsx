import { View, Text, TouchableOpacity, StyleSheet} from "react-native";

import {createStaticNavigation, useNavigation} from '@react-navigation/native';


export default function Home() {
    const navigation = useNavigation();
    return(
        <View style={style.bloco}>
            <Text style={style.Texto}> Seja Bem Vindo </Text>

            <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate('Itanhaem' as never)}>
                <Text style={style.textoBtn}>Itanhaém</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    bloco:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 20,
},
Texto:{
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333333',
},
    btn: {
    backgroundColor: '#4A90E2',
    width: '50%',               
    paddingVertical: 18,       
    paddingHorizontal: 24,
    marginVertical: 16,        
    borderRadius: 25,          
    elevation: 5,             
    alignItems: 'center',      
    justifyContent: 'center',
    flexDirection: 'row',      
},

textoBtn: {
    color: '#FFFFFF',
    fontSize: 18,              
    fontWeight: '600',         
    letterSpacing: 0.5,        
    textAlign: 'center',
    textTransform: 'uppercase' 
}
})
