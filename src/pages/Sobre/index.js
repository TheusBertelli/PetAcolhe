import { ScrollView, StyleSheet, Text, View } from 'react-native';
import InfoCard from '../../components/InfoCard';
import SectionHeading from '../../components/SectionHeading';
import cores from '../../styles/cores';
import global from '../../styles/global';

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={global.scrollContent}>
      <View style={global.contentWidth}>
        <SectionHeading
          etiqueta="Nossa história"
          titulo="Acolher é o primeiro passo para transformar vidas."
          descricao="O PetAcolhe é uma iniciativa fictícia criada para incentivar a adoção responsável e o cuidado com os animais."
        />

        <View style={styles.banner}>
          <Text style={styles.bannerEmoji}>🏡</Text>
          <View style={styles.bannerConteudo}>
            <Text style={styles.bannerTitulo}>Mais que encontrar um lar</Text>
            <Text style={styles.bannerTexto}>Queremos aproximar pessoas e animais por meio de relações construídas com respeito e responsabilidade.</Text>
          </View>
        </View>

        <View style={global.sectionBlock}>
          <InfoCard icone="💚" titulo="Missão" texto="Incentivar a adoção responsável, promovendo acolhimento, orientação e respeito aos animais." />
          <InfoCard icone="🌱" titulo="Visão" texto="Contribuir para uma comunidade em que todo animal tenha acesso a cuidado, proteção e um lar seguro." />
          <InfoCard icone="🤝" titulo="Valores" texto="Empatia, responsabilidade, respeito à vida, transparência e compromisso com o bem-estar animal." />
        </View>

        <View style={styles.compromisso}>
          <Text style={styles.compromissoTitulo}>Nosso compromisso</Text>
          <View style={styles.etapa}>
            <Text style={styles.numero}>01</Text>
            <View style={styles.etapaConteudo}>
              <Text style={styles.etapaTitulo}>Acolher</Text>
              <Text style={styles.etapaTexto}>Oferecer atenção e cuidado aos animais.</Text>
            </View>
          </View>
          <View style={styles.etapa}>
            <Text style={styles.numero}>02</Text>
            <View style={styles.etapaConteudo}>
              <Text style={styles.etapaTitulo}>Conectar</Text>
              <Text style={styles.etapaTexto}>Aproximar pets e famílias responsáveis.</Text>
            </View>
          </View>
          <View style={styles.etapa}>
            <Text style={styles.numero}>03</Text>
            <View style={styles.etapaConteudo}>
              <Text style={styles.etapaTitulo}>Acompanhar</Text>
              <Text style={styles.etapaTexto}>Valorizar uma adoção consciente e duradoura.</Text>
            </View>
          </View>
        </View>

        <Text style={global.versionText}>Organização: PetAcolhe (fictícia)  •  Versão 1.0.0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  banner: { backgroundColor: cores.verdeSuave, borderRadius: 20, padding: 17, flexDirection: 'row', alignItems: 'center' },
  bannerEmoji: { fontSize: 38, marginRight: 13 },
  bannerConteudo: { flex: 1 },
  bannerTitulo: { color: cores.principal, fontSize: 15, fontWeight: '900', marginBottom: 5 },
  bannerTexto: { color: cores.secundario, fontSize: 12, lineHeight: 18 },
  compromisso: { backgroundColor: cores.principal, borderRadius: 20, padding: 19, marginTop: 8 },
  compromissoTitulo: { color: '#FFFFFF', fontSize: 17, fontWeight: '900', marginBottom: 12 },
  etapa: { flexDirection: 'row', alignItems: 'center', paddingVertical: 11, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.16)' },
  numero: { color: cores.amarelo, fontSize: 16, fontWeight: '900', width: 42 },
  etapaConteudo: { flex: 1 },
  etapaTitulo: { color: '#FFFFFF', fontSize: 13, fontWeight: '900' },
  etapaTexto: { color: '#DCE9E1', fontSize: 11, lineHeight: 17, marginTop: 3 },
});
