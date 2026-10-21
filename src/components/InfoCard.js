import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Texto from './Texto';
import cores from '../styles/cores';

export default function InfoCard({ icone, titulo, texto }) {
  return (
    <View style={styles.card}>
      <View style={styles.icone}>
        <MaterialCommunityIcons
          name={icone}
          size={21}
          color={cores.principal}
          accessibilityElementsHidden
          importantForAccessibility="no"
        />
      </View>
      <View style={styles.conteudo}>
        <Texto style={styles.titulo}>{titulo}</Texto>
        <Texto style={styles.texto}>{texto}</Texto>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: cores.superficie,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 11,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  icone: {
    width: 40,
    height: 40,
    borderRadius: 9,
    backgroundColor: cores.coralSuave,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  conteudo: { flex: 1, paddingTop: 2 },
  titulo: {
    color: cores.texto,
    fontSize: 14,
    fontWeight: '900',
    marginBottom: 5,
  },
  texto: { color: cores.secundario, fontSize: 13, lineHeight: 20 },
});
