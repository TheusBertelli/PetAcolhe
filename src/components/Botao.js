import { Pressable, StyleSheet, Text } from 'react-native';
import cores from '../styles/cores';

export default function Botao({ titulo, onPress, variante = 'principal', compacto = false }) {
  const botao = variante === 'claro'
    ? styles.claro
    : variante === 'contorno'
      ? styles.contorno
      : styles.principal;
  const texto = variante === 'claro'
    ? styles.textoEscuro
    : variante === 'contorno'
      ? styles.textoContorno
      : styles.textoClaro;

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.botao, botao, compacto && styles.compacto, pressed && styles.pressionado]}
    >
      <Text style={[styles.texto, texto]}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: { minHeight: 51, borderRadius: 14, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 18, marginTop: 10 },
  principal: { backgroundColor: cores.principal },
  claro: { backgroundColor: '#FFFFFF', alignSelf: 'flex-start', paddingHorizontal: 17 },
  contorno: { backgroundColor: 'transparent', borderWidth: 1, borderColor: cores.principal },
  compacto: { minHeight: 43, marginTop: 19 },
  texto: { fontSize: 14, fontWeight: '800' },
  textoClaro: { color: '#FFFFFF' },
  textoEscuro: { color: cores.principal },
  textoContorno: { color: cores.principal },
  pressionado: { opacity: 0.78, transform: [{ scale: 0.99 }] },
});
