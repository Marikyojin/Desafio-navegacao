import * as React from 'react';
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';

const ProfileScreen = () => {
  const [usuario, setUsuario] = React.useState('Usuário');
  const [senha, setSenha] = React.useState('Senha');

  return (
    <ScrollView>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
              color: '#9966cc'
            }}>
            Login
          </Text>
          <Image
            style={{
              width: 350,
              height: 350,
            }}
            source={{
              uri: "https://rlv.zcache.com.br/adesivo_redondo_perfil_alaranjado_da_cara_do_gato_de_gato_malhado-rcf24fa5dba0e4cefb6cae989a48985f1_0ugmp_8byvr_540.jpg"
            }}
          />
        </View>
        <TextInput
          style={{
            height: 40,
            width: 300,
            margin: 12,
            borderWidth: 1,
            borderColor: '#9966cc',
            color: '#9966cc',
            textAlign: 'center'
          }}
          onChangeText={usuario => setUsuario(usuario)}
          value={usuario}
        />
        <TextInput
          style={{
            height: 40,
            width: 300,
            margin: 12,
            borderWidth: 1,
            borderColor: '#9966cc',
            color: '#9966cc',
            textAlign: 'center'
          }}
          secureTextEntry={true} 
          onChangeText={senha => setSenha(senha)}
          value={senha}
        />


      </View>
    </SafeAreaView>
    </ScrollView>
  );
}

export default ProfileScreen;