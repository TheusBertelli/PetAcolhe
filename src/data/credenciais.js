const credenciais = {
  usuario: 'visitante',
  senha: 'PetAcolhe26',
};

export function validarLogin(usuario, senha) {
  if (!usuario.trim()) return 'Informe seu usuário para continuar.';
  if (!senha.trim()) return 'Informe sua senha para continuar.';

  const usuarioValido = usuario.trim().toLowerCase() === credenciais.usuario;
  const senhaValida = senha === credenciais.senha;

  if (!usuarioValido || !senhaValida) {
    return 'Usuário ou senha inválidos. Confira os dados de demonstração.';
  }

  return '';
}

export default credenciais;
