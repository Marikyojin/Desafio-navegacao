import * as React from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  Image,
  SafeAreaView
} from 'react-native';

import styles from './style';

const HomeScreen = ({ navigation }) => {
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
            Home
          </Text>
          <View>
          <Image
        style={{       
            width: 400,
            height: 350,}}
        source={{
            uri:"https://www.royalpets.com.br/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/a/r/arranhador-para-gatos-casa-cuco-grande-cinza.jpg"}}
            />
          </View>
          
          <TouchableHighlight
            style={styles.button}
            onPress={
              () => navigation.navigate('Details')
            }>
            <Text style={{color:'#9966cc'}}>Detalhes</Text>
          </TouchableHighlight>
        </View>


      </View>
    </SafeAreaView>
  );
}


export default HomeScreen;