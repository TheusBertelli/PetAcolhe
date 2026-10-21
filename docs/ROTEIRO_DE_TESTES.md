# Roteiro de testes manuais — PetAcolhe

Este roteiro segue os nove cenários indicados na atividade prática de Navegação e Toolbar. Execute-os no Expo Snack ou em dispositivo/emulador. **Status inicial: pendente de execução neste ambiente.** Marque cada item somente depois de observar o resultado esperado.

## Preparação

1. Inicie o aplicativo. A primeira tela deve ser Login.
2. Use `fatecano` como usuário e `1234` como senha para o cenário de login válido.
3. Para recomeçar os cenários, utilize **Sair** na Home ou reinicie a aplicação.

## Cenários

- [ ] **T1 — Usuário vazio:** deixe Usuário vazio, informe uma senha e toque em Entrar. Esperado: a mensagem solicita o preenchimento do usuário e a tela continua em Login.
- [ ] **T2 — Senha vazia:** informe `fatecano`, deixe Senha vazia e toque em Entrar. Esperado: a mensagem solicita o preenchimento da senha e a tela continua em Login.
- [ ] **T3 — Credenciais inválidas:** informe valores diferentes de `fatecano` / `1234`. Esperado: mensagem de credenciais inválidas; nenhuma navegação ocorre.
- [ ] **T4 — Login válido:** informe `fatecano` / `1234`. Esperado: navegação para Home.
- [ ] **T5 — Acesso a Sobre:** na Home, toque em **Conheça nosso propósito** ou em **Sobre o PetAcolhe**. Esperado: abre Sobre e a Toolbar exibe o título Sobre.
- [ ] **T6 — Retorno de Sobre:** em Sobre, toque em **Início** na Toolbar. Esperado: retorna à Home.
- [ ] **T7 — Acesso a Contato:** na Home, toque em **Fale com a equipe**. Esperado: abre Contato e a Toolbar exibe o título Contato.
- [ ] **T8 — Retorno de Contato:** em Contato, toque em **Início** na Toolbar. Esperado: retorna à Home.
- [ ] **T9 — Reinício:** encerre completamente a aplicação e abra novamente. Esperado: inicia na tela Login; o acesso não persiste entre execuções.

## Verificações complementares de interface

- [ ] O campo Senha oculta os caracteres por padrão; **Mostrar/Ocultar** alterna sua visibilidade.
- [ ] **Limpar campos** limpa usuário, senha, mensagem de erro e estado de exibição da senha.
- [ ] O formulário de Contato bloqueia o envio simulado quando nome ou mensagem está vazio e informa que não envia nem armazena dados.
- [ ] A Toolbar mantém identidade visual consistente e permite voltar à Home nas telas internas.
- [ ] A logo e as fotos dos animais aparecem sem erro de carregamento.
- [ ] A interface continua legível em uma tela estreita e ao abrir o teclado.

## Registro da execução

- Ambiente/dispositivo: ______________________________
- Data: ____ / ____ / ______
- Resultado geral: [ ] aprovado  [ ] precisa de correções
- Observações/erros encontrados:

  ____________________________________________________

  ____________________________________________________
