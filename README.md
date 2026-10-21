# PetAcolhe

**Nome do aluno:** [preencher com o nome completo antes da entrega]  
**Aplicação:** PetAcolhe — protótipo acadêmico de adoção responsável  
**Versão:** 1.0.0

## Sobre o projeto

O PetAcolhe é um protótipo mobile da fictícia **Rede PetAcolhe**, uma iniciativa que apresenta animais acolhidos e divulga informações para incentivar a adoção responsável. A aplicação foi organizada para demonstrar login simulado, navegação entre telas, Toolbar, validação de entradas, componentes reutilizáveis e estilização consistente.

Os perfis de Luna, Orelha, Mel e Tobias são exemplos ilustrativos, assim como os dados da área de contato. O aplicativo não realiza adoções reais, não envia mensagens e não mantém cadastro de usuários.

## Tecnologias

- React Native `0.81.5` e React `19.1.0`.
- Expo SDK `54`.
- JavaScript e `StyleSheet.create()` para os estilos.
- `@expo/vector-icons` para ícones da interface (dependência já utilizada pelo projeto).
- Tipografia sem serifa usando a família nativa da plataforma: `System` no iOS e `sans-serif` no Android e na Web.

## Como executar

### No Expo Snack

1. Abra [snack.expo.dev](https://snack.expo.dev/).
2. Crie ou abra o Snack do projeto e importe os arquivos mantendo a estrutura descrita abaixo.
3. Confirme que todos os arquivos da pasta `assets/` foram enviados, em especial `logo.png`, `luna.jpg`, `orelha.jpg`, `mel.jpg` e `tobias.jpg`.
4. Execute a pré-visualização e teste os nove cenários de `docs/ROTEIRO_DE_TESTES.md`.

Os caminhos das imagens são relativos aos arquivos que as utilizam. Por exemplo, a tela de login usa `require('../../../assets/logo.png')` e a Toolbar usa `require('../../assets/logo.png')`.

### Localmente com Expo CLI

Requisitos: Node.js compatível com o Expo SDK utilizado e npm.

```bash
npm install
npx expo start
```

No terminal do Expo, abra o aplicativo em um dispositivo com Expo Go ou utilize um emulador Android compatível. Para iniciar diretamente com o destino Android:

```bash
npm run android
```

O identificador Android configurado para uma futura compilação é `br.com.petacolhe.app`. Nenhum APK foi gerado como parte desta entrega.

## Credenciais para teste

O login é **simulado** e valida as credenciais diretamente no código, sem API, backend, banco de dados ou armazenamento persistente.

- **Usuário:** `fatecano`
- **Senha:** `1234`

Com campos vazios, a tela mostra uma mensagem indicando o dado faltante. Com credenciais incorretas, a tela informa que o usuário ou a senha são inválidos. Com as credenciais acima, o aplicativo abre a Home. Ao encerrar e iniciar uma nova execução, o estado inicial é novamente a tela de Login.

## Funcionalidades implementadas

- **Login:** imagem de marca, campos de usuário e senha, ocultação e exibição da senha, validação, feedback de erro e ação para limpar os campos.
- **Home:** mensagem de boas-vindas, apresentação de quatro perfis ilustrativos de animais e cartões de acesso a Sobre e Contato.
- **Sobre:** descrição da Rede PetAcolhe fictícia, missão, visão, valores, compromisso institucional e versão.
- **Contato:** telefone, e-mail e endereço fictícios, horário de atendimento e formulário com validação local. O formulário informa que a mensagem não é enviada.
- **Toolbar:** marca, título correspondente à tela, botão para voltar à Home nas telas internas e opção de sair na Home.
- **Navegação:** Login → Home → Sobre/Contato; retorno à Home pela Toolbar e pelo botão físico Voltar do Android nas telas internas.
- **Identidade visual:** cores centralizadas, fonte sem serifa, imagens locais e ícones vetoriais em vez de emojis.

## Estrutura resumida

```text
petacolhe/
├── App.js
├── index.js
├── app.json
├── assets/                 # Logo, ícone e fotos locais
├── docs/
│   ├── ROTEIRO_DE_TESTES.md
│   └── capturas/           # Capturas reais a incluir após executar no Snack
├── src/
│   ├── components/         # Texto, Botao, Toolbar, cartões e cabeçalhos
│   ├── data/               # Perfis ilustrativos, contatos e credenciais
│   ├── navigation/         # Estado e navegação entre as páginas
│   ├── pages/              # Login, Home, Sobre e Contato
│   └── styles/             # Cores, tipografia e estilos compartilhados
├── .editorconfig
└── .prettierrc.json
```

## Convenções de manutenção

- Componentes reutilizáveis ficam em `src/components/`.
- Cada tela fica em seu próprio diretório dentro de `src/pages/`.
- Dados de demonstração ficam separados da apresentação em `src/data/`.
- Paleta, tipografia e estilos compartilhados ficam em `src/styles/`.
- Prefira `StyleSheet.create()` e nomes de estilo descritivos; evite estilos extensos no JSX.
- Use o componente `Texto` para preservar a tipografia sem serifa dos textos comuns.
- Use `@expo/vector-icons` para elementos pictográficos; não inserir emojis nos textos da interface.
- Não adicione persistência de login, autenticação real, serviços externos ou banco de dados para esta atividade.

## Capturas de tela exigidas para a entrega

O PDF da atividade pede capturas da aplicação **em funcionamento** para Login, Home, Sobre e Contato. Elas precisam ser feitas após abrir este projeto no Expo Snack ou em um dispositivo/emulador; não foram simuladas nem incluídas neste ZIP, pois não foi possível executar o bundle neste ambiente.

Salve as capturas reais na pasta `docs/capturas/` com estes nomes:

- `login.png`
- `home.png`
- `sobre.png`
- `contato.png`

Depois, inclua-as no README usando links relativos, por exemplo `![Tela de Login](docs/capturas/login.png)`. Antes da entrega, substitua também o campo **Nome do aluno** no início deste arquivo.

## Checklist final

Consulte `docs/ROTEIRO_DE_TESTES.md`. Os testes precisam ser executados no Snack/emulador e marcados como aprovados antes da entrega acadêmica.
