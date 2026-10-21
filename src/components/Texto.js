import { StyleSheet, Text as TextoNativo } from 'react-native';
import { fonteSansSerif } from '../styles/tipografia';

const styles = StyleSheet.create({
  base: { fontFamily: fonteSansSerif },
});

/** Componente de texto compartilhado para manter a tipografia consistente. */
export default function Texto({ style, ...props }) {
  return <TextoNativo {...props} style={[styles.base, style]} />;
}
