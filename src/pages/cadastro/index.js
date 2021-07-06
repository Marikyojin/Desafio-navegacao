import * as React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, TouchableHighlight, Alert } from 'react-native';
import styles from '../home/style';

const Cadastro = () => {
    const [nome, setNome] = React.useState('Nome');
    const [descricao, setDescricao] = React.useState('Descrição');
    const [preco, setPreco] = React.useState('Preço');

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
                            color: '#9966cc'
                        }}>
                        Cadastro
                    </Text>

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
                        onChangeText={nome => setNome(nome)}
                        value={nome}
                    />
                    <TextInput
                        style={{
                            height: 100,
                            width: 300,
                            margin: 12,
                            borderWidth: 1,
                            borderColor: '#9966cc',
                            color: '#9966cc',
                            textAlign: 'center'
                        }}
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={descricao => setDescricao(descricao)}
                        value={descricao}
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
                        keyboardType = 'numeric'
                        onChangeText={preco => setPreco(preco)}
                        value={preco}
                    />

                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => alert('Pressed!')}>
                        <Text style={{ color: '#9966cc' }}>Cadastrar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Cadastro;