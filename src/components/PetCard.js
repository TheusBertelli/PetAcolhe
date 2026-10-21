import { StyleSheet, Text, View } from 'react-native';
import cores from '../styles/cores';

export default function PetCard({ pet }) {
  return (
    <View style={styles.card}>
      <View style={[styles.ilustracao, { backgroundColor: pet.fundo }]}>
        <Text style={styles.emoji}>{pet.emoji}</Text>
      </View>
      <View style={styles.conteudo}>
        <Text style={styles.nome}>{pet.nome}</Text>
        <Text style={styles.detalhes}>{pet.idade}  •  {pet.porte}</Text>
        <Text style={styles.personalidade}>{pet.personalidade}</Text>
        <View style={styles.etiqueta}><Text style={styles.etiquetaTexto}>{pet.etiqueta}</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { width: '48.5%', backgroundColor: cores.superficie, borderRadius: 18, overflow: 'hidden', borderWidth: 1, borderColor: cores.borda, marginBottom: 13 },
  ilustracao: { minHeight: 112, alignItems: 'center', justifyContent: 'center' },
  emoji: { fontSize: 56 },
  conteudo: { paddingHorizontal: 12, paddingTop: 11, paddingBottom: 13 },
  nome: { color: cores.texto, fontSize: 17, fontWeight: '900' },
  detalhes: { color: cores.secundario, fontSize: 10, marginTop: 3 },
  personalidade: { color: cores.texto, fontSize: 11, lineHeight: 16, marginTop: 8, minHeight: 32 },
  etiqueta: { backgroundColor: cores.verdeSuave, borderRadius: 8, paddingHorizontal: 7, paddingVertical: 6, marginTop: 8, alignSelf: 'flex-start' },
  etiquetaTexto: { color: cores.principal, fontSize: 9, fontWeight: '800' },
});
