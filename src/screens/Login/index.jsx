import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import apiUsuarios from '../../services/Usuarios';

export default function Login() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dados, setDados] = useState(false);
  const [msgErro, setMsgErro] = useState(""); 
  const [erro, setErro] = useState(false);

  useEffect(() => {

  const handleLogin = async () => {
    try {
      if(nome==='' || email==='' || senha===''){  
        setErro(true);
        setMsgErro("Preencha todos os campos!");
        console.log('Preencha todos os campos!')
        return;
      }    
        const result=await apiUsuarios.Login(email,senha);
        if(response==404){
          setErro(true);
          setMsgErro("Senha incorreta ou Inexistente CADASTRE-SE!");
          console.log('Senha incorreta ou Inexistente CADASTRE-SE!');
        }
        if(response==200){
          setDados(result);
          console.log('Login realizado com sucesso!');
          console.log('Login realizado com sucesso!');
        }
        navigation.navigate("Home");
        return; 
      } catch (error) {
      console.error('Erro ao verificar senha:', error.message);
      setErro(true);
      setMsgErro("Ocorreu um erro ao verificar a senha!");
      console.log('Ocorreu um erro ao verificar a senha!');
    }
  }
  return handleLogin();
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