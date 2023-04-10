import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

import adidas1 from './../assets/Tenis/Adidas/ad34.png';
import adidas2 from './../assets/Tenis/Adidas/ad33.png';
import adidas3 from './../assets/Tenis/Adidas/ad2ofc.jpeg';
import adidas4 from './../assets/Tenis/Adidas/ad30.png';
import adidas5 from './../assets/Tenis/Adidas/ad1.png';

export default function Adidas(props) {
    return (
      <ScrollView>
        <ImageBackground style={styles.container}>
            <ImageBackground style={styles.card} source={adidas1}>
                <Text style={styles.card_tiutlo}>Adidas Ultimashow Feminino - Rosa</Text>
                <Text style={styles.card_valor}>R$ 220,79</Text>
            </ImageBackground>

            <ImageBackground style={styles.card} source={adidas2}>
                <Text style={styles.card_tiutlo}>Adidas Solar Glide 5 Lep Boost Masculino</Text>
                <Text style={styles.card_valor}>R$ 849,89</Text>
            </ImageBackground>

            <ImageBackground style={styles.card} source={adidas3}>
                <Text style={styles.card_tiutlo}>Adidas Forum Low Branco/Preto</Text>
                <Text style={styles.card_valor}>R$ 699,90</Text>
            </ImageBackground>

            <ImageBackground style={styles.card} source={adidas4}>
                <Text style={styles.card_tiutlo}>Adidas Lite Racer Rebold 2</Text>
                <Text style={styles.card_valor}>R$ 320,95 </Text>
            </ImageBackground>

            <ImageBackground style={styles.card} source={adidas5}>
                <Text style={styles.card_tiutlo}>Adidas yeezy 350 boost </Text>
                <Text style={styles.card_valor}>R$ 2.599,98 </Text>
            </ImageBackground>
        </ImageBackground>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ed9121',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    },
    card: {
        width: 400,
        height: 300,
        marginTop: 20,
        marginBottom: 20,
    },
    card_tiutlo: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor:'#0f0f0fdb',
        paddingLeft:10,
        color:'#FFF'
    },
      card_valor: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor:'#c0c0c0',
        color:'green',
        marginTop: 250,
        textAlign:'center'
    },
});