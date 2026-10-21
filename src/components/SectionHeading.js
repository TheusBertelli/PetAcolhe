import { StyleSheet, Text, View } from 'react-native';
import cores from '../styles/cores';

export default function SectionHeading({ etiqueta, titulo, descricao }) {
  return (
    <View style={styles.container}>
      {etiqueta ? <Text style={styles.etiqueta}>{etiqueta.toUpperCase()}</Text> : null}
      <Text style={styles.titulo}>{titulo}</Text>
      {descricao ? <Text style={styles.descricao}>{descricao}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 22 },
  etiqueta: { color: cores.coral, fontSize: 10, fontWeight: '900', letterSpacing: 1.4, marginBottom: 8 },
  titulo: { color: cores.texto, fontSize: 28, lineHeight: 34, fontWeight: '900', letterSpacing: -0.7 },
  descricao: { color: cores.secundario, fontSize: 14, lineHeight: 22, marginTop: 10 },
});
