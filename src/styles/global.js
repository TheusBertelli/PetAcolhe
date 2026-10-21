import { StyleSheet } from 'react-native';
import cores from './cores';

const global = StyleSheet.create({
  safeAreaLogin: { flex: 1, backgroundColor: cores.fundo },
  safeAreaApp: { flex: 1, backgroundColor: cores.fundo },
  teclado: { flex: 1 },
  loginScroll: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 22,
    paddingVertical: 28,
  },
  loginContainer: { width: '100%', maxWidth: 480, alignSelf: 'center' },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 19,
    paddingTop: 22,
    paddingBottom: 30,
  },
  contentWidth: { width: '100%', maxWidth: 700, alignSelf: 'center' },
  screenArea: { flex: 1 },
  sectionBlock: { marginTop: 29 },
  sectionEyebrow: {
    color: cores.coral,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.3,
    marginBottom: 7,
  },
  sectionTitle: {
    color: cores.texto,
    fontSize: 21,
    lineHeight: 27,
    fontWeight: '900',
    letterSpacing: -0.4,
    marginBottom: 13,
  },
  pageFooter: {
    color: cores.secundario,
    fontSize: 10,
    textAlign: 'center',
    marginTop: 20,
  },
  versionText: {
    color: cores.secundario,
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 17,
    marginTop: 19,
  },
});

export default global;
