import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import apiPlanetas from '../../services/planetas';

export default function ListaPlanetas() {
  const navigation = useNavigation();
const[planetas,setPlanetas]=useState([]);
const[UnicoPlaneta,setUnicoPlaneta]=useState(false);

  useEffect(() => {

  const handleLogin = async () => {
    try { 
        const result=await apiPlanetas.getAllplanetas();
          setPlanetas(result);
          console.log('todos planetas foram acessados com sucesso!');
           navigation.navigate("CardPlanetas");
        return; 
      } catch (error) {
      console.error('Erro ao verificar senha:', error.message);
      setErro(true);
      setMsgErro("Ocorreu um erro ao verificar a senha!");
      console.log('Ocorreu um erro ao verificar a senha!');
    }
  }
  handleLogin();
  },[dados]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <View style={styles.line} />
      <TextInput
        style={styles.input}
        placeholder="Digite seu Email"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.line} />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <View style={styles.line} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity >
      <Text style={styles.registerText}>
        Não possui conta? <TouchableOpacity style={styles.registerLink} onPress={()=> navigation.navigate(cadastro,{id:dados.id})}><Text>Cadastre-se aqui.</Text></TouchableOpacity>
      </Text>
      {erro && <Text style={styles.errorMessage}>{msgErro}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#008000',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  registerText: {
    marginTop: 20,
  },
  registerLink: {
    color: '#008000',
    fontWeight: 'bold',
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    width: '100%',
    marginBottom: 20,
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
  },
});