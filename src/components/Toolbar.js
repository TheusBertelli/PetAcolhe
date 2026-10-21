import { Image, Pressable, StyleSheet, View } from 'react-native';
import Texto from './Texto';
import cores from '../styles/cores';

const titulos = {
  home: 'Home',
  sobre: 'Sobre',
  contato: 'Contato',
};

export default function Toolbar({ pagina, onInicio, onSair }) {
  return (
    <View style={styles.toolbar}>
      <View style={styles.marcaLinha}>
        <View style={styles.marcaIcone}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logoImagem}
            resizeMode="contain"
            accessibilityLabel="Logo PetAcolhe"
          />
        </View>
        <View>
          <Texto style={styles.marcaNome}>PetAcolhe</Texto>
          <Texto style={styles.tituloPagina}>{titulos[pagina]}</Texto>
        </View>
      </View>
      {pagina === 'home' ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Sair da aplicação"
          onPress={onSair}
          style={styles.acao}
        >
          <Texto style={styles.acaoTexto}>Sair</Texto>
        </Pressable>
      ) : (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Voltar para Home"
          onPress={onInicio}
          style={styles.acao}
        >
          <Texto style={styles.acaoTexto}>‹ Início</Texto>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    minHeight: 76,
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: cores.borda,
    backgroundColor: cores.fundo,
  },
  marcaLinha: { flexDirection: 'row', alignItems: 'center' },
  marcaIcone: {
    width: 42,
    height: 42,
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 11,
  },
  logoImagem: { width: 37, height: 27 },
  marcaNome: { color: cores.principal, fontSize: 16, fontWeight: '900' },
  tituloPagina: { color: cores.secundario, fontSize: 11, marginTop: 2 },
  acao: {
    minHeight: 38,
    justifyContent: 'center',
    paddingHorizontal: 13,
    borderRadius: 9,
    backgroundColor: cores.verdeSuave,
  },
  acaoTexto: { color: cores.principal, fontSize: 13, fontWeight: '800' },
});
