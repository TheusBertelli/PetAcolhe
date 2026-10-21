import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Botao from '../../components/Botao';
import NavigationCard from '../../components/NavigationCard';
import PetCard from '../../components/PetCard';
import pets from '../../data/pets';
import cores from '../../styles/cores';
import global from '../../styles/global';

export default function Home({ onNavigate }) {
  return (
    <ScrollView contentContainerStyle={global.scrollContent}>
      <View style={global.contentWidth}>
        <View style={styles.hero}>
          <View style={styles.heroLinha}>
            <View style={styles.heroEtiqueta}><Text style={styles.heroEtiquetaTexto}>ADOÇÃO COM RESPONSABILIDADE</Text></View>
            <Text style={styles.heroPata}>🐾</Text>
          </View>
          <Text style={styles.heroTitulo}>Uma nova história começa com você.</Text>
          <Text style={styles.heroTexto}>Cada adoção é um encontro. Conheça nosso trabalho e descubra como fazer parte dessa transformação.</Text>
          <Botao titulo="Conheça nosso propósito" variante="claro" compacto onPress={() => onNavigate('sobre')} />
          <Text style={styles.heroRodape}>Cuidado, respeito e um novo começo.</Text>
        </View>

        <View style={global.sectionBlock}>
          <View style={styles.tituloLinha}>
            <View style={styles.tituloGrupo}>
              <Text style={global.sectionEyebrow}>ENCONTROS QUE TRANSFORMAM</Text>
              <Text style={global.sectionTitle}>Amigos à espera de um lar</Text>
            </View>
            <View style={styles.contador}><Text style={styles.contadorTexto}>04 pets</Text></View>
          </View>
          <Text style={styles.descricaoSecao}>Estes perfis são ilustrativos e representam os animais acolhidos pelo projeto.</Text>
          <View style={styles.gradePets}>
            {pets.map((pet) => <PetCard key={pet.nome} pet={pet} />)}
          </View>
        </View>

        <View style={global.sectionBlock}>
          <Text style={global.sectionEyebrow}>SAIBA MAIS</Text>
          <Text style={global.sectionTitle}>Como você pode participar?</Text>
          <NavigationCard
            icone="💚"
            titulo="Sobre o PetAcolhe"
            descricao="Conheça nossa missão, visão e valores."
            onPress={() => onNavigate('sobre')}
          />
          <NavigationCard
            icone="✉️"
            titulo="Fale com a equipe"
            descricao="Consulte nossos canais de atendimento."
            onPress={() => onNavigate('contato')}
          />
        </View>
        <Text style={global.pageFooter}>PetAcolhe • Protótipo acadêmico • Versão 1.0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hero: { backgroundColor: cores.principal, borderRadius: 24, padding: 22, overflow: 'hidden' },
  heroLinha: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 21 },
  heroEtiqueta: { backgroundColor: 'rgba(255,255,255,0.13)', borderRadius: 20, paddingHorizontal: 11, paddingVertical: 7 },
  heroEtiquetaTexto: { color: '#FFFFFF', fontSize: 9, fontWeight: '900', letterSpacing: 1 },
  heroPata: { fontSize: 29 },
  heroTitulo: { color: '#FFFFFF', fontSize: 29, lineHeight: 34, fontWeight: '900', letterSpacing: -0.7, maxWidth: 470 },
  heroTexto: { color: '#DCE9E1', fontSize: 14, lineHeight: 22, marginTop: 10, maxWidth: 500 },
  heroRodape: { color: '#DCE9E1', fontSize: 11, marginTop: 17 },
  tituloLinha: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' },
  tituloGrupo: { flex: 1, paddingRight: 8 },
  contador: { backgroundColor: cores.coralSuave, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 6, marginBottom: 15 },
  contadorTexto: { color: cores.coral, fontSize: 11, fontWeight: '900' },
  descricaoSecao: { color: cores.secundario, fontSize: 13, lineHeight: 20, marginTop: -3, marginBottom: 14 },
  gradePets: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
});
