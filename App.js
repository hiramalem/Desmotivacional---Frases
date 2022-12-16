import { useState } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {

  const[frase, setFrase] = useState('Nada me desmotiva mais que frase motivacional');
  
  const frases = [
  'Tudo pode dar errado se você tentar. Mas se não fizer nada, tudo ficará igual.',
  'A mãe da frustração é você acreditar que pode realizar seus sonhos sem ser herdeiro.',
  'O meu trabalho dos sonhos seria ganhar para dormir. Enquanto não chego lá, me frustro com todos os outros trabalhos.',
  'O seu problema é estar cansado e continuar dormindo tarde sem vontade de mudar isso.',
  'Aquilo que te desafia, te tira a paciência com a vida.',
  'Abandone antes de tentar e evite maiores frustrações.',
  'Pode ser que seu propósito na vida seja nunca vencer, apenas viver de tentativa.',
  'O importante é acreditar na derrota e talvez se surpreender com a vitória.',
  'Os que não param de lutar estão sempre em busca da sua próxima derrota.',
  'A esperança já te fez fazer coisas doidas e que você se arrependeu. Então, não tenha esperança em nada.',
  'Você não é especial e os outros também não são. Somos todos pessoas normais em busca do fracasso.',
  ];

  
  const style = StyleSheet.create({
      title: {
        color: 'silver',
        fontSize:26,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:100
      },
      
      card: {
        backgroundColor:'white',
        minHeight:150,
        margin:20,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'            
      },

      text: {
        fontSize:20,
        textAlign:'center',
        fontStyle: 'italic'
      },

      button:{
        backgroundColor:'#4bebe1',
        color:'white',
        margin:20,
        alignItems:'center',
        padding:10,
        borderRadius:5
      }
  })

  function gerarFrase(){

    let randomNumber = Math.floor(Math.random() * frases.length)

    setFrase(frases[randomNumber])
  }     

  return (
    <>
    <StatusBar style='light'/>
    <View style={{ backgroundColor: '#003366', flex: 1 }}>    
      
      {/* Header */}

      <View style={
        {backgroundColor: 'white',
        alignItems: 'center',
        paddingVertical:30               
        }}>     
        
        <Image source={require('./assets/logo-coti-informatica.png')}/>

      </View>      
        
        {/* Main */}

        <View style={
        {
        flex: 1               
        }}>

          <Text style={style.title}> Nada me desmotiva mais que frases motivacionais </Text>
          <View style={style.card}>
            <Text style={style.text}>
              {frase}
            </Text></View>

            <TouchableOpacity style={style.button} onPress={gerarFrase}>
              <Text style={{fontWeight:'bold'}}>Gerar Frase</Text>
            </TouchableOpacity>


        </View>

      
    </View>
    </>
  );
}




