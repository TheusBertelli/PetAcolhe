import { Pressable, StyleSheet } from 'react-native';
import Texto from './Texto';
import cores from '../styles/cores';

export default function Botao({
  titulo,
  onPress,
  variante = 'principal',
  compacto = false,
}) {
  const estiloBotao =
    variante === 'claro'
      ? styles.claro
      : variante === 'contorno'
        ? styles.contorno
        : styles.principal;

  const estiloTexto =
    variante === 'claro'
      ? styles.textoEscuro
      : variante === 'contorno'
        ? styles.textoContorno
        : styles.textoClaro;

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.botao,
        estiloBotao,
        compacto && styles.compacto,
        pressed && styles.pressionado,
      ]}
    >
      <Texto style={[styles.texto, estiloTexto]}>{titulo}</Texto>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    minHeight: 51,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    marginTop: 10,
  },
  principal: { backgroundColor: cores.principal },
  claro: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
    paddingHorizontal: 17,
  },
  contorno: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: cores.principal,
  },
  compacto: { minHeight: 43, marginTop: 19 },
  texto: { fontSize: 14, fontWeight: '800' },
  textoClaro: { color: '#FFFFFF' },
  textoEscuro: { color: cores.principal },
  textoContorno: { color: cores.principal },
  pressionado: { opacity: 0.78, transform: [{ scale: 0.99 }] },
});
