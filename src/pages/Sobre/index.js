import { ScrollView, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import InfoCard from '../../components/InfoCard';
import SectionHeading from '../../components/SectionHeading';
import Texto from '../../components/Texto';
import cores from '../../styles/cores';
import global from '../../styles/global';

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={global.scrollContent}>
      <View style={global.contentWidth}>
        <SectionHeading
          etiqueta="Nossa história"
          titulo="Acolher é o primeiro passo para transformar vidas."
          descricao="A Rede PetAcolhe é uma organização fictícia criada para aproximar famílias preparadas de animais acolhidos e incentivar decisões de adoção conscientes."
        />

        <View style={styles.banner}>
          <MaterialCommunityIcons
            name="home-heart"
            size={38}
            color={cores.principal}
            style={styles.bannerIcone}
            accessibilityElementsHidden
            importantForAccessibility="no"
          />
          <View style={styles.bannerConteudo}>
            <Texto style={styles.bannerTitulo}>Mais que encontrar um lar</Texto>
            <Texto style={styles.bannerTexto}>
              Queremos aproximar pessoas e animais por meio de relações construídas com respeito e responsabilidade.
            </Texto>
          </View>
        </View>

        <View style={global.sectionBlock}>
          <InfoCard
            icone="heart-outline"
            titulo="Missão"
            texto="Incentivar a adoção responsável, promovendo acolhimento, orientação e respeito aos animais."
          />
          <InfoCard
            icone="sprout"
            titulo="Visão"
            texto="Contribuir para uma comunidade em que todo animal tenha acesso a cuidado, proteção e um lar seguro."
          />
          <InfoCard
            icone="handshake-outline"
            titulo="Valores"
            texto="Empatia, responsabilidade, respeito à vida, transparência e compromisso com o bem-estar animal."
          />
        </View>

        <View style={styles.compromisso}>
          <Texto style={styles.compromissoTitulo}>Nosso compromisso</Texto>
          <View style={styles.etapa}>
            <Texto style={styles.numero}>01</Texto>
            <View style={styles.etapaConteudo}>
              <Texto style={styles.etapaTitulo}>Acolher</Texto>
              <Texto style={styles.etapaTexto}>
                Oferecer atenção e cuidado aos animais.
              </Texto>
            </View>
          </View>
          <View style={styles.etapa}>
            <Texto style={styles.numero}>02</Texto>
            <View style={styles.etapaConteudo}>
              <Texto style={styles.etapaTitulo}>Conectar</Texto>
              <Texto style={styles.etapaTexto}>
                Aproximar pets e famílias responsáveis.
              </Texto>
            </View>
          </View>
          <View style={styles.etapa}>
            <Texto style={styles.numero}>03</Texto>
            <View style={styles.etapaConteudo}>
              <Texto style={styles.etapaTitulo}>Acompanhar</Texto>
              <Texto style={styles.etapaTexto}>
                Valorizar uma adoção consciente e duradoura.
              </Texto>
            </View>
          </View>
        </View>

        <Texto style={global.versionText}>
          Organização: Rede PetAcolhe (fictícia) • Versão 1.0.0
        </Texto>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: cores.verdeSuave,
    borderRadius: 12,
    padding: 17,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerIcone: { marginRight: 13 },
  bannerConteudo: { flex: 1 },
  bannerTitulo: {
    color: cores.principal,
    fontSize: 15,
    fontWeight: '900',
    marginBottom: 5,
  },
  bannerTexto: { color: cores.secundario, fontSize: 12, lineHeight: 18 },
  compromisso: {
    backgroundColor: cores.principal,
    borderRadius: 12,
    padding: 19,
    marginTop: 8,
  },
  compromissoTitulo: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
    marginBottom: 12,
  },
  etapa: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 11,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.16)',
  },
  numero: { color: cores.amarelo, fontSize: 16, fontWeight: '900', width: 42 },
  etapaConteudo: { flex: 1 },
  etapaTitulo: { color: '#FFFFFF', fontSize: 13, fontWeight: '900' },
  etapaTexto: { color: '#DCE9E1', fontSize: 11, lineHeight: 17, marginTop: 3 },
});
