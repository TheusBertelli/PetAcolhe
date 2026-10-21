# Verificação de conformidade — Atividade Prática de Navegação e Toolbar

Esta revisão compara o código entregue com os requisitos descritos em **Atividade Prática — Construção de Aplicação Mobile com Login, Navegação e Toolbar**. A verificação estática foi feita nos arquivos do projeto. O aplicativo não pôde ser iniciado no Expo Snack neste ambiente porque o registro npm não respondeu durante a tentativa de instalação de dependências; portanto, nenhum teste de interface em execução é declarado como concluído.

## Requisitos funcionais

| Requisito da atividade | Implementação no PetAcolhe | Situação da revisão |
|---|---|---|
| RF01 — Iniciar em Login | `src/navigation/Rotas.js` inicializa o estado em `login`. | Verificado no código |
| RF02 — Entrada de usuário | `src/pages/Login/index.js` mantém o usuário em estado local e oferece campo dedicado. | Verificado no código |
| RF03 — Entrada de senha protegida | `secureTextEntry` oculta a senha por padrão; o controle Mostrar/Ocultar alterna a visualização. | Verificado no código |
| RF04 — Validar campos obrigatórios | `src/data/credenciais.js` valida usuário e senha vazios separadamente. | Função executada em teste isolado |
| RF05 — Validar credenciais de demonstração | Credenciais definidas em `src/data/credenciais.js`: `fatecano` / `1234`. | Função executada em teste isolado |
| RF06 — Mensagem para credenciais inválidas | A função retorna mensagem informativa; Login exibe o retorno com papel acessível de alerta. | Função executada em teste isolado |
| RF07 — Login válido abre Home | `Login` chama `onEntrar`; `Rotas` altera a página para `home`. | Verificado estaticamente; teste manual pendente |
| RF08 — Acesso a Sobre | Cards e botão de destaque na Home navegam para `sobre`. | Verificado no código |
| RF09 — Acesso a Contato | Card de contato na Home navega para `contato`. | Verificado no código |
| RF10 — Retorno à Home | Toolbar oferece **Início**; botão físico Voltar do Android também trata Sobre e Contato. | Verificado no código |
| RF11 — Toolbar por tela | A Toolbar mostra títulos para Home, Sobre e Contato e alterna suas ações. | Verificado no código |
| RF12 — Stylesheet | Componentes e telas usam `StyleSheet.create()`; paleta e estilos globais estão centralizados. | Verificado no código |
| RF13 — Organização dos arquivos | Telas, componentes, dados, navegação, estilos e assets estão separados por diretório. | Verificado no código |

## Requisitos de conteúdo e interface

- **Login:** logo local, título, campos de usuário e senha, botão Entrar, mensagens de validação, controle de senha, ação Limpar campos e credenciais de teste documentadas.
- **Home:** saudação específica ao PetAcolhe, conteúdo de adoção responsável, quatro perfis ilustrativos e atalhos para Sobre e Contato.
- **Sobre:** nome do projeto, organização fictícia Rede PetAcolhe, descrição, missão, visão, valores, compromisso institucional e versão.
- **Contato:** telefone, e-mail, endereço e horário fictícios, identificados como demonstrativos, mais formulário de validação local.
- **Identidade visual:** cores compartilhadas, fonte sem serifa, componentes consistentes, imagens locais, cartões e Toolbar; layout utiliza rolagem e limites de largura para acomodar diferentes telas.
- **Assets:** `assets/logo.png` e fotos dos animais existem no pacote. Os caminhos relativos da logo no Login e na Toolbar apontam para o arquivo correto.
- **Emojis:** a varredura dos arquivos JS/JSX/JSON/Markdown não encontrou caracteres emoji. Os símbolos da interface são ícones vetoriais ou elementos de texto.

## Requisitos técnicos e restrições

- O projeto usa React Native com Expo e não foi adicionada nenhuma dependência para esta revisão.
- A autenticação é simulada; não há chamadas de API, backend, banco de dados, `localStorage` ou `AsyncStorage` no código JavaScript verificado.
- As credenciais estão documentadas no README e não são salvas em armazenamento persistente.
- O formulário de contato apenas valida os campos e avisa que não envia nem armazena a mensagem.
- `app.json` possui o nome PetAcolhe e um identificador Android (`br.com.petacolhe.app`) para uma futura compilação.

## Verificações executadas

- Análise sintática dos 20 arquivos JavaScript/JSX: aprovada.
- Resolução de imports relativos e assets referenciados: aprovada.
- Teste isolado da validação de login: usuário vazio, senha vazia, credenciais inválidas, credenciais válidas e usuário com caixa/espaços externos: aprovados.
- Varredura de emojis literais: nenhum encontrado.
- Teste de execução do Expo/Snack, navegação tátil e renderização visual real: **não executado neste ambiente**.

## Itens finais que exigem ação antes da entrega acadêmica

1. Substituir o campo `Nome do aluno` no `README.md` pelo nome completo do aluno.
2. Executar os nove cenários de `docs/ROTEIRO_DE_TESTES.md` no Snack ou em emulador e marcar os resultados após observá-los.
3. Capturar as telas reais de Login, Home, Sobre e Contato e salvar em `docs/capturas/login.png`, `home.png`, `sobre.png` e `contato.png`; depois vinculá-las no README. Elas não foram falsificadas nem simuladas nesta revisão.
4. Publicar o código-fonte completo no GitHub e informar o repositório no README, conforme a entrega solicitada no PDF.

Até que esses itens externos sejam concluídos, o código atende estaticamente aos requisitos funcionais descritos acima, mas a entrega acadêmica ainda não está completa em termos de evidências de execução e publicação.
