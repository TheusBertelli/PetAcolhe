import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Botao from '../../components/Botao';
import Texto from '../../components/Texto';
import { validarLogin } from '../../data/credenciais';
import cores from '../../styles/cores';
import global from '../../styles/global';
import { fonteSansSerif } from '../../styles/tipografia';

export default function Login({ onEntrar }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState('');

  function entrar() {
    const mensagem = validarLogin(usuario, senha);
    setErro(mensagem);

    if (!mensagem) {
      onEntrar();
    }
  }

  function limpar() {
    setUsuario('');
    setSenha('');
    setErro('');
    setMostrarSenha(false);
  }

  return (
    <SafeAreaView style={global.safeAreaLogin}>
      <StatusBar barStyle="dark-content" backgroundColor={cores.fundo} />
      <KeyboardAvoidingView
        style={global.teclado}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={global.loginScroll}
        >
          <View style={global.loginContainer}>
            <View style={styles.marcaLinha}>
              <View style={styles.logo}>
                <Image
                  source={require('../../../assets/logo.png')}
                  style={styles.logoImage}
                  resizeMode="contain"
                  accessibilityLabel="Logo PetAcolhe"
                />
              </View>
              <View>
                <Texto style={styles.marcaNome}>PetAcolhe</Texto>
                <Texto style={styles.marcaLegenda}>ADOÇÃO RESPONSÁVEL</Texto>
              </View>
            </View>

            <View style={styles.introducao}>
              <Texto style={styles.chamada}>
                Todo pet merece{'\n'}um lugar para chamar de lar.
              </Texto>
              <Texto style={styles.descricao}>
                Aproximamos animais acolhidos de pessoas prontas para oferecer cuidado e carinho.
              </Texto>
            </View>

            <View style={styles.card}>
              <Texto style={styles.cardTitulo}>Bem-vindo!</Texto>
              <Texto style={styles.cardSubtitulo}>
                Entre no ambiente de demonstração.
              </Texto>

              <Texto style={styles.rotulo}>Usuário</Texto>
              <TextInput
                value={usuario}
                onChangeText={(valor) => {
                  setUsuario(valor);
                  setErro('');
                }}
                placeholder="Digite seu usuário"
                placeholderTextColor={cores.secundario}
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="off"
                returnKeyType="next"
                style={styles.campo}
                accessibilityLabel="Usuário"
              />

              <Texto style={styles.rotulo}>Senha</Texto>
              <View style={styles.campoSenhaLinha}>
                <TextInput
                  value={senha}
                  onChangeText={(valor) => {
                    setSenha(valor);
                    setErro('');
                  }}
                  placeholder="Digite sua senha"
                  placeholderTextColor={cores.secundario}
                  secureTextEntry={!mostrarSenha}
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoComplete="off"
                  returnKeyType="done"
                  onSubmitEditing={entrar}
                  style={styles.campoSenha}
                  accessibilityLabel="Senha"
                />
                <Pressable
                  accessibilityRole="button"
                  onPress={() => setMostrarSenha(!mostrarSenha)}
                  style={styles.acaoSenha}
                >
                  <Texto style={styles.acaoSenhaTexto}>
                    {mostrarSenha ? 'Ocultar' : 'Mostrar'}
                  </Texto>
                </Pressable>
              </View>

              {erro ? (
                <Texto accessibilityRole="alert" style={styles.erro}>
                  {erro}
                </Texto>
              ) : null}
              <Botao titulo="Entrar" onPress={entrar} />
              <Pressable onPress={limpar} style={styles.limpar}>
                <Texto style={styles.limparTexto}>Limpar campos</Texto>
              </Pressable>
            </View>

            <View style={styles.credenciais}>
              <Texto style={styles.credenciaisTitulo}>ACESSO PARA TESTE</Texto>
              <Texto style={styles.credenciaisTexto}>
                Usuário: <Texto style={styles.credenciaisDestaque}>fatecano</Texto>
              </Texto>
              <Texto style={styles.credenciaisTexto}>
                Senha: <Texto style={styles.credenciaisDestaque}>1234</Texto>
              </Texto>
            </View>
            <Texto style={styles.rodape}>
              Demonstração acadêmica: o login é validado no próprio aplicativo. Nenhum usuário ou senha é enviado a um servidor ou salvo entre execuções.
            </Texto>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  marcaLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    margin: 0,
  },
  logoImage: { width: '100%', height: '100%' },
  marcaNome: {
    color: cores.principal,
    fontSize: 23,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  marcaLegenda: {
    color: cores.secundario,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.8,
    marginTop: 2,
  },
  introducao: { marginBottom: 24 },
  chamada: {
    color: cores.texto,
    fontSize: 31,
    fontWeight: '800',
    lineHeight: 37,
    letterSpacing: -0.8,
  },
  descricao: {
    color: cores.secundario,
    fontSize: 15,
    lineHeight: 23,
    marginTop: 12,
    maxWidth: 430,
  },
  card: {
    backgroundColor: cores.superficie,
    borderRadius: 13,
    padding: 22,
    borderWidth: 1,
    borderColor: cores.borda,
    shadowColor: '#1E302A',
    shadowOpacity: 0.06,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 7 },
    elevation: 2,
  },
  cardTitulo: { color: cores.texto, fontSize: 22, fontWeight: '800' },
  cardSubtitulo: {
    color: cores.secundario,
    fontSize: 14,
    marginTop: 5,
    marginBottom: 22,
  },
  rotulo: {
    color: cores.texto,
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 8,
  },
  campo: {
    minHeight: 50,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 9,
    paddingHorizontal: 14,
    color: cores.texto,
    backgroundColor: '#FCFDFC',
    fontFamily: fonteSansSerif,
    fontSize: 15,
    marginBottom: 17,
  },
  campoSenhaLinha: {
    minHeight: 50,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 9,
    backgroundColor: '#FCFDFC',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  campoSenha: {
    flex: 1,
    minWidth: 0,
    height: 50,
    color: cores.texto,
    paddingHorizontal: 14,
    fontFamily: fonteSansSerif,
    fontSize: 15,
  },
  acaoSenha: { paddingHorizontal: 13, paddingVertical: 13 },
  acaoSenhaTexto: {
    color: cores.principalClaro,
    fontSize: 12,
    fontWeight: '800',
  },
  erro: {
    color: cores.erro,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 8,
    marginBottom: 3,
  },
  limpar: {
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingVertical: 13,
    marginTop: 3,
  },
  limparTexto: {
    color: cores.secundario,
    fontSize: 13,
    fontWeight: '700',
  },
  credenciais: {
    backgroundColor: cores.verdeSuave,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 13,
    marginTop: 17,
  },
  credenciaisTitulo: {
    color: cores.principal,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.3,
    marginBottom: 5,
  },
  credenciaisTexto: {
    color: cores.secundario,
    fontSize: 12,
    lineHeight: 18,
  },
  credenciaisDestaque: { color: cores.texto, fontWeight: '800' },
  rodape: {
    color: cores.secundario,
    fontSize: 11,
    lineHeight: 17,
    textAlign: 'center',
    marginTop: 16,
    paddingHorizontal: 10,
  },
});
