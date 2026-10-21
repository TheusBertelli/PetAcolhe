import { Image, StyleSheet, View } from 'react-native';
import Texto from './Texto';
import cores from '../styles/cores';

export default function PetCard({ pet }) {
  return (
    <View style={styles.card}>
      <View style={[styles.ilustracao, { backgroundColor: pet.fundo }]}>
        <Image
          source={pet.imagem}
          style={styles.imagem}
          resizeMode="cover"
          accessible
          accessibilityLabel={`Foto de ${pet.nome}`}
        />
      </View>
      <View style={styles.conteudo}>
        <Texto style={styles.nome}>{pet.nome}</Texto>
        <Texto style={styles.detalhes}>
          {pet.idade}  •  {pet.porte}
        </Texto>
        <Texto style={styles.personalidade}>{pet.personalidade}</Texto>
        <View style={styles.etiqueta}>
          <Texto style={styles.etiquetaTexto}>{pet.etiqueta}</Texto>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: cores.superficie,
    borderRadius: 9,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: cores.borda,
    marginBottom: 13,
  },
  ilustracao: { height: 130, overflow: 'hidden' },
  imagem: { width: '100%', height: '100%' },
  conteudo: { paddingHorizontal: 12, paddingTop: 11, paddingBottom: 13 },
  nome: { color: cores.texto, fontSize: 17, fontWeight: '900' },
  detalhes: { color: cores.secundario, fontSize: 10, marginTop: 3 },
  personalidade: {
    color: cores.texto,
    fontSize: 11,
    lineHeight: 16,
    marginTop: 8,
    minHeight: 32,
  },
  etiqueta: {
    backgroundColor: cores.verdeSuave,
    borderRadius: 8,
    paddingHorizontal: 7,
    paddingVertical: 6,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  etiquetaTexto: { color: cores.principal, fontSize: 9, fontWeight: '800' },
});
