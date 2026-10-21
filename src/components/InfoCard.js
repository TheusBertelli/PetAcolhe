import { StyleSheet, Text, View } from 'react-native';
import cores from '../styles/cores';

export default function InfoCard({ icone, titulo, texto }) {
  return (
    <View style={styles.card}>
      <View style={styles.icone}><Text style={styles.iconeTexto}>{icone}</Text></View>
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.texto}>{texto}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: cores.superficie, borderWidth: 1, borderColor: cores.borda, borderRadius: 17, padding: 15, flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 },
  icone: { width: 40, height: 40, borderRadius: 13, backgroundColor: cores.coralSuave, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  iconeTexto: { fontSize: 19 },
  conteudo: { flex: 1, paddingTop: 2 },
  titulo: { color: cores.texto, fontSize: 14, fontWeight: '900', marginBottom: 5 },
  texto: { color: cores.secundario, fontSize: 13, lineHeight: 20 },
});
