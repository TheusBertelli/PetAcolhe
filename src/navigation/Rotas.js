import { useEffect, useState } from 'react';
import { BackHandler, SafeAreaView, StatusBar, View } from 'react-native';
import Toolbar from '../components/Toolbar';
import cores from '../styles/cores';
import global from '../styles/global';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';

export default function Rotas() {
  const [pagina, setPagina] = useState('login');

  useEffect(() => {
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      if (pagina === 'sobre' || pagina === 'contato') {
        setPagina('home');
        return true;
      }
      return false;
    });

    return () => subscription.remove();
  }, [pagina]);

  function sair() {
    setPagina('login');
  }

  if (pagina === 'login') {
    return <Login onEntrar={() => setPagina('home')} />;
  }

  return (
    <SafeAreaView style={global.safeAreaApp}>
      <StatusBar barStyle="dark-content" backgroundColor={cores.fundo} />
      <Toolbar
        pagina={pagina}
        onInicio={() => setPagina('home')}
        onSair={sair}
      />
      <View style={global.screenArea}>
        {pagina === 'home' ? <Home onNavigate={setPagina} /> : null}
        {pagina === 'sobre' ? <Sobre /> : null}
        {pagina === 'contato' ? <Contato /> : null}
      </View>
    </SafeAreaView>
  );
}
