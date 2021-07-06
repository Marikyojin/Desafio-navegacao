import * as React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';

const ProfileScreen = () => {
  return (
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
              color:'#9966cc'
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


      </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;