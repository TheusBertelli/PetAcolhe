import { Pressable, StyleSheet, Text, View } from 'react-native';
import cores from '../styles/cores';

const titulos = { home: 'Home', sobre: 'Sobre', contato: 'Contato' };

export default function Toolbar({ pagina, onInicio, onSair }) {
  return (
    <View style={styles.toolbar}>
      <View style={styles.marcaLinha}>
        <View style={styles.marcaIcone}><Text style={styles.marcaEmoji}>🐾</Text></View>
        <View>
          <Text style={styles.marcaNome}>PetAcolhe</Text>
          <Text style={styles.tituloPagina}>{titulos[pagina]}</Text>
        </View>
      </View>
      {pagina === 'home' ? (
        <Pressable accessibilityRole="button" accessibilityLabel="Sair da aplicação" onPress={onSair} style={styles.acao}>
          <Text style={styles.acaoTexto}>Sair</Text>
        </Pressable>
      ) : (
        <Pressable accessibilityRole="button" accessibilityLabel="Voltar para Home" onPress={onInicio} style={styles.acao}>
          <Text style={styles.acaoTexto}>‹ Início</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: { minHeight: 76, paddingHorizontal: 20, paddingVertical: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: cores.borda, backgroundColor: cores.fundo },
  marcaLinha: { flexDirection: 'row', alignItems: 'center' },
  marcaIcone: { width: 42, height: 42, borderRadius: 14, backgroundColor: cores.principal, justifyContent: 'center', alignItems: 'center', marginRight: 11 },
  marcaEmoji: { fontSize: 21 },
  marcaNome: { color: cores.principal, fontSize: 16, fontWeight: '900' },
  tituloPagina: { color: cores.secundario, fontSize: 11, marginTop: 2 },
  acao: { minHeight: 38, justifyContent: 'center', paddingHorizontal: 13, borderRadius: 11, backgroundColor: cores.verdeSuave },
  acaoTexto: { color: cores.principal, fontSize: 13, fontWeight: '800' },
});
