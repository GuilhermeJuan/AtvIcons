import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import nike1 from './../assets/Tenis/Nike/nike01.png';
import nike2 from './../assets/Tenis/Nike/nike02.png';
import nike3 from './../assets/Tenis/Nike/nike03.png';
import nike4 from './../assets/Tenis/Nike/nike04.png';
import nike5 from './../assets/Tenis/Nike/nike05.png';
export default function Nike(props) {
    return (
      <ScrollView>
        <ImageBackground style={styles.container}>

              <ImageBackground style={styles.card} source={nike1}>
                  <Text style={styles.card_tiutlo}>Nike-Travis Scott Sb Dunk Low Pro "Cactus Jack"</Text>
                  <Text style={styles.card_valor}>R$ 13.100,00</Text>
              </ImageBackground>

            <ImageBackground style={styles.card} source={nike2}>
                <Text style={styles.card_tiutlo}>Nike Air Force l Utility</Text>
                <Text style={styles.card_valor}>R$ 154,98</Text>
            </ImageBackground>

            <ImageBackground style={styles.card} source={nike3}>
                <Text style={styles.card_tiutlo}> Nike Air Mag Back to the Future</Text>
                <Text style={styles.card_valor}>US$ 14.500</Text>
            </ImageBackground>

            <ImageBackground style={styles.card} source={nike4}>
                <Text style={styles.card_tiutlo}>NIKE AIR MAX 1 ESSENTIAL MASCULINO</Text>
                <Text style={styles.card_valor}>R$ 799,99</Text>
            </ImageBackground>

            <ImageBackground style={styles.card} source={nike5}>
                <Text style={styles.card_tiutlo}>Nike Air Max Plus Brazil</Text>
                <Text style={styles.card_valor}>ESGOTADO!!</Text>
            </ImageBackground>

        </ImageBackground>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#bfddf3',
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
        backgroundColor:'#0f0f0fdb',
        color:'green',
        marginTop: 250,
        textAlign:'center'
    },
});