import { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import Botao from '../../components/Botao';
import InfoCard from '../../components/InfoCard';
import SectionHeading from '../../components/SectionHeading';
import Texto from '../../components/Texto';
import contatos from '../../data/contatos';
import cores from '../../styles/cores';
import global from '../../styles/global';
import { fonteSansSerif } from '../../styles/tipografia';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [feedback, setFeedback] = useState('');
  const [erro, setErro] = useState('');

  function validarMensagem() {
    if (!nome.trim() || !mensagem.trim()) {
      setErro('Preencha seu nome e escreva uma mensagem.');
      setFeedback('');
      return;
    }

    setErro('');
    setFeedback(
      'Mensagem validada! Esta é apenas uma simulação: nenhum dado foi enviado ou armazenado.',
    );
    setNome('');
    setMensagem('');
  }

  return (
    <ScrollView contentContainerStyle={global.scrollContent}>
      <View style={global.contentWidth}>
        <SectionHeading
          etiqueta="Estamos por aqui"
          titulo="Vamos conversar?"
          descricao="Os canais abaixo são dados fictícios da Rede PetAcolhe, incluídos para demonstrar como uma organização de adoção pode apresentar seus contatos."
        />

        <View style={styles.listaContatos}>
          {contatos.map((canal) => (
            <InfoCard
              key={canal.titulo}
              icone={canal.icone}
              titulo={canal.titulo}
              texto={canal.texto}
            />
          ))}
        </View>

        <View style={styles.formulario}>
          <Texto style={styles.formularioTitulo}>Envie uma mensagem</Texto>
          <Texto style={styles.formularioDescricao}>
            Preencha os campos para testar a validação do formulário.
          </Texto>

          <Texto style={styles.rotulo}>Seu nome</Texto>
          <TextInput
            value={nome}
            onChangeText={(valor) => {
              setNome(valor);
              setErro('');
              setFeedback('');
            }}
            placeholder="Como podemos chamar você?"
            placeholderTextColor={cores.secundario}
            style={styles.campo}
            returnKeyType="next"
            accessibilityLabel="Seu nome"
          />

          <Texto style={styles.rotulo}>Mensagem</Texto>
          <TextInput
            value={mensagem}
            onChangeText={(valor) => {
              setMensagem(valor);
              setErro('');
              setFeedback('');
            }}
            placeholder="Escreva sua mensagem..."
            placeholderTextColor={cores.secundario}
            style={[styles.campo, styles.campoMensagem]}
            multiline
            textAlignVertical="top"
            accessibilityLabel="Mensagem"
          />

          {erro ? (
            <Texto accessibilityRole="alert" style={styles.erro}>
              {erro}
            </Texto>
          ) : null}
          {feedback ? (
            <Texto style={styles.feedback}>{feedback}</Texto>
          ) : null}
          <Botao titulo="Validar mensagem" onPress={validarMensagem} />
          <Texto style={styles.aviso}>
            Protótipo acadêmico: a validação funciona localmente, mas a mensagem não é enviada nem armazenada.
          </Texto>
        </View>

        <Texto style={global.versionText}>
          Os dados de contato são fictícios e utilizados apenas no protótipo.
        </Texto>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listaContatos: { marginBottom: 14 },
  formulario: {
    backgroundColor: cores.superficie,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 10,
    padding: 18,
    marginTop: 3,
  },
  formularioTitulo: { color: cores.texto, fontSize: 18, fontWeight: '900' },
  formularioDescricao: {
    color: cores.secundario,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
    marginBottom: 18,
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
  campoMensagem: { minHeight: 105, paddingTop: 13 },
  erro: {
    color: cores.erro,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 8,
    marginBottom: 3,
  },
  feedback: { color: cores.sucesso, fontSize: 12, lineHeight: 18, marginTop: 8 },
  aviso: {
    color: cores.secundario,
    fontSize: 10,
    lineHeight: 15,
    marginTop: 11,
    textAlign: 'center',
  },
});
