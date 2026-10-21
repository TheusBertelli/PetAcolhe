import { Pressable, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Texto from './Texto';
import cores from '../styles/cores';

export default function NavigationCard({ icone, titulo, descricao, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressionado]}
    >
      <View style={styles.icone}>
        <MaterialCommunityIcons
          name={icone}
          size={23}
          color={cores.principal}
          accessibilityElementsHidden
          importantForAccessibility="no"
        />
      </View>
      <View style={styles.conteudo}>
        <Texto style={styles.titulo}>{titulo}</Texto>
        <Texto style={styles.descricao}>{descricao}</Texto>
      </View>
      <Texto style={styles.seta}>›</Texto>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 76,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cores.superficie,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 11,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 10,
  },
  icone: {
    width: 43,
    height: 43,
    borderRadius: 9,
    backgroundColor: cores.verdeSuave,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  conteudo: { flex: 1 },
  titulo: { color: cores.texto, fontSize: 14, fontWeight: '800' },
  descricao: {
    color: cores.secundario,
    fontSize: 11,
    lineHeight: 16,
    marginTop: 4,
  },
  seta: { color: cores.principal, fontSize: 27, paddingLeft: 8 },
  pressionado: { opacity: 0.78 },
});
