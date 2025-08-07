import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './views/Home';
import Itanhaem from './views/Itanhaem';
import Roraima from './views/Roraima';
import Oaxaca from './views/Oaxaca';
import Guerrero from './views/Guerrero';


const MyStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        // título do header
        title: 'Home',
        headerStyle: {
          backgroundColor: '#3379b3ff',
        },

        // cor do texto do header
        headerTintColor: '#FFD700',

        // estilo do título do header
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
        },

        // alinhar o texto no centro
        headerTitleAlign: 'center',
      },
    },
    Itanhaem: {
      screen: Itanhaem,
      options: {

        // cor do header
        headerStyle: {
          backgroundColor: '#3379b3ff',
        },

        // cor do texto do header
        headerTintColor: '#FFD700',

        // título do header
        title: 'Itanhaém',

        // estilo do título do header
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
        },

        // alinhar o texo no centro
        headerTitleAlign: 'center',
      },
    },
    Roraima: {
      screen: Roraima,
      options: {

        // cor do header
        headerStyle: {
          backgroundColor: '#3379b3ff',
        },

        // cor do texto do header
        headerTintColor: '#FFD700',

        // título do header
        title: 'Roraima',

        // estilo do título do header
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
        },

        // alinhar o texo no centro
        headerTitleAlign: 'center',
      },
    },
    Oaxaca: {
      screen: Oaxaca,
      options: {

        // cor do header
        headerStyle: {
          backgroundColor: '#3379b3ff',
        },

        // cor do texto do header
        headerTintColor: '#FFD700',

        // título do header
        title: 'Oaxaca',

        // estilo do título do header
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
        },

        // alinhar o texo no centro
        headerTitleAlign: 'center',
      },
    },
    Guerrero: {
      screen: Guerrero,
      options: {

        // cor do header
        headerStyle: {
          backgroundColor: '#3379b3ff',
        },

        // cor do texto do header
        headerTintColor: '#FFD700',

        // título do header
        title: 'Guerrero',

        // estilo do título do header
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
        },

        // alinhar o texo no centro
        headerTitleAlign: 'center',
      },
    },
  },
});

const Navigation = createStaticNavigation(MyStack);

export default function App() {
  return <Navigation />;
}