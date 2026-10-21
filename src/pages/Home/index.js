import { ScrollView, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Botao from '../../components/Botao';
import NavigationCard from '../../components/NavigationCard';
import PetCard from '../../components/PetCard';
import Texto from '../../components/Texto';
import pets from '../../data/pets';
import cores from '../../styles/cores';
import global from '../../styles/global';

export default function Home({ onNavigate }) {
  return (
    <ScrollView contentContainerStyle={global.scrollContent}>
      <View style={global.contentWidth}>
        <View style={styles.hero}>
          <View style={styles.heroLinha}>
            <View style={styles.heroEtiqueta}>
              <Texto style={styles.heroEtiquetaTexto}>
                BEM-VINDO AO PETACOLHE
              </Texto>
            </View>
            <MaterialCommunityIcons
              name="paw"
              size={30}
              color="#FFFFFF"
              accessibilityElementsHidden
              importantForAccessibility="no"
            />
          </View>
          <Texto style={styles.heroTitulo}>
            Uma nova história começa com você.
          </Texto>
          <Texto style={styles.heroTexto}>
            Aqui você conhece animais acolhidos, entende nosso compromisso com a adoção responsável e descobre como apoiar uma nova história.
          </Texto>
          <Botao
            titulo="Conheça nosso propósito"
            variante="claro"
            compacto
            onPress={() => onNavigate('sobre')}
          />
          <Texto style={styles.heroRodape}>
            Cuidado, respeito e um novo começo.
          </Texto>
        </View>

        <View style={global.sectionBlock}>
          <View style={styles.tituloLinha}>
            <View style={styles.tituloGrupo}>
              <Texto style={global.sectionEyebrow}>
                ENCONTROS QUE TRANSFORMAM
              </Texto>
              <Texto style={global.sectionTitle}>
                Amigos à espera de um lar
              </Texto>
            </View>
            <View style={styles.contador}>
              <Texto style={styles.contadorTexto}>04 pets</Texto>
            </View>
          </View>
          <Texto style={styles.descricaoSecao}>
            Conheça quatro perfis fictícios criados para demonstrar como o PetAcolhe apresenta animais que procuram uma família responsável.
          </Texto>
          <View style={styles.gradePets}>
            {pets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </View>
        </View>

        <View style={global.sectionBlock}>
          <Texto style={global.sectionEyebrow}>SAIBA MAIS</Texto>
          <Texto style={global.sectionTitle}>
            Como você pode participar?
          </Texto>
          <NavigationCard
            icone="heart-outline"
            titulo="Sobre o PetAcolhe"
            descricao="Conheça nossa missão, visão e valores."
            onPress={() => onNavigate('sobre')}
          />
          <NavigationCard
            icone="email-outline"
            titulo="Fale com a equipe"
            descricao="Consulte nossos canais de atendimento."
            onPress={() => onNavigate('contato')}
          />
        </View>
        <Texto style={global.pageFooter}>
          PetAcolhe • Protótipo acadêmico • Versão 1.0
        </Texto>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: cores.principal,
    borderRadius: 12,
    padding: 22,
    overflow: 'hidden',
  },
  heroLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 21,
  },
  heroEtiqueta: {
    backgroundColor: 'rgba(255,255,255,0.13)',
    borderRadius: 10,
    paddingHorizontal: 11,
    paddingVertical: 7,
  },
  heroEtiquetaTexto: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },
  heroTitulo: {
    color: '#FFFFFF',
    fontSize: 29,
    lineHeight: 34,
    fontWeight: '900',
    letterSpacing: -0.7,
    maxWidth: 470,
  },
  heroTexto: {
    color: '#DCE9E1',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 10,
    maxWidth: 500,
  },
  heroRodape: { color: '#DCE9E1', fontSize: 11, marginTop: 17 },
  tituloLinha: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  tituloGrupo: { flex: 1, paddingRight: 8 },
  contador: {
    backgroundColor: cores.coralSuave,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 15,
  },
  contadorTexto: { color: cores.coral, fontSize: 11, fontWeight: '900' },
  descricaoSecao: {
    color: cores.secundario,
    fontSize: 13,
    lineHeight: 20,
    marginTop: -3,
    marginBottom: 14,
  },
  gradePets: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
