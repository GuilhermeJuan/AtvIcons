import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';

export default function Converse(props) {
    return (
        <ScrollView>
            <ImageBackground style={styles.container} source={{uri: 'https://i.pinimg.com/736x/80/c4/25/80c4259f73a71d6e2068593b8499c4b7.jpg'}}>
                <ImageBackground style={styles.card} source={{uri: 'https://converse.com.br/media/catalog/product/c/t/ct00040002_a_107x1_2.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=897&width=960&canvas=960:897'}}>
                    <Text style={styles.card_tiutlo}>Chuck Taylor All Star Preto</Text>
                    <Text style={styles.card_valor}>R$ 269,90</Text>
                </ImageBackground>
                <ImageBackground style={styles.card} source={{uri: 'https://waytenis.vteximg.com.br/arquivos/ids/171346-1000-1000/CT0004-Tenis-Converse-All-Star-tradicional-feminino-masculino-unissex-vermelho-cano-medio-alto--3-.jpg?v=637191190440900000'}}>
                    <Text style={styles.card_tiutlo}>CONVERSE ALL STAR CT AS CORE CANO ALTO - VERMELHO</Text>
                    <Text style={styles.card_valor}>R$ 269,99</Text>
                </ImageBackground>
                <ImageBackground style={styles.card} source={{uri: 'https://d2byg56fbf6u3p.cloudfront.net/885/imagens/8856909904796023545ed7f6a8.67447038.1612928094_l.jpeg'}}>
                    <Text style={styles.card_tiutlo}>TÊNIS ALL STAR CUSTOMIZADO FOGO</Text>
                    <Text style={styles.card_valor}>R$ 399,99</Text>
                </ImageBackground>
                <ImageBackground style={styles.card} source={{uri: 'https://mundialcalcados.vteximg.com.br/arquivos/ids/2208961-1200-1804/98g32550-1.jpg?v=637913529414870000'}}>
                    <Text style={styles.card_tiutlo}>Converse All Star Chuck Taylor</Text>
                    <Text style={styles.card_valor}>R$ 319,99</Text>
                </ImageBackground>
                <ImageBackground style={styles.card} source={{uri: 'https://images.tcdn.com.br/img/img_prod/1020145/tenis_converse_chuck_taylor_all_star_cano_alto_amarelo_8311_1_e9e4429557e0425e42d7f8e9f443bc7e.jpg'}}>
                    <Text style={styles.card_tiutlo}>CONVERSE CHUCK TAYLOR ALL STAR CANO ALTO AMARELO</Text>
                    <Text style={styles.card_valor}>R$ 289,00</Text>
                </ImageBackground>
            </ImageBackground>
        </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#ff000017',
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