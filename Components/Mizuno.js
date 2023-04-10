import { StyleSheet, Text, ScrollView, ImageBackground } from 'react-native';

import mizuno1 from './../assets/Tenis/Mizuno/mizu30.png';
import mizuno2 from './../assets/Tenis/Mizuno/mizu31.png';
import mizuno3 from './../assets/Tenis/Mizuno/mizu32.png';
import mizuno4 from './../assets/Tenis/Mizuno/mizu33.png';

export default function Mizuno(props) {
    return (
      <ScrollView>
        <ImageBackground style={styles.container}>
            <ImageBackground style={styles.card} source={mizuno1}>
                <Text style={styles.card_tiutlo}>Mizuno Wave Mirai 4 Esportivo Masculino</Text>
                <Text style={styles.card_valor}>R$ 419,99</Text>
            </ImageBackground>

            <ImageBackground style={styles.card} source={mizuno2}>
                <Text style={styles.card_tiutlo}>Mizuno Wave Legend Masculino</Text>
                <Text style={styles.card_valor}>R$ 438,76</Text>
            </ImageBackground>

            <ImageBackground style={styles.card} source={mizuno3}>
                <Text style={styles.card_tiutlo}>Mizuno Masculino Enerzy Corrida</Text>
                <Text style={styles.card_valor}>R$ 759,90</Text>
            </ImageBackground>

            <ImageBackground style={styles.card} source={mizuno4}>
                <Text style={styles.card_tiutlo}>Wave Invictus 2 Feminino Preto e Roxo</Text>
                <Text style={styles.card_valor}>R$ 697,90</Text>
            </ImageBackground>

        </ImageBackground>
      </ScrollView>
    );
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffd700',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    },
    card: {
        width: 360,
        height: 250,
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
        backgroundColor:'#0f0f0fdb',
        color:'green',
        marginTop: 197,
        textAlign:'center'
    },
});