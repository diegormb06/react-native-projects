const INITIAL_STATE = {
  nome: '',
  email: '',
  senha: '',
  erroCadastro: ''
}

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case 'modifica_nome':
      return { ...state, nome: action.payload }

    case 'modifica_email':
      return { ...state, email: action.payload }

    case 'modifica_senha':
      return { ...state, senha: action.payload }

    case 'erro_cadastro':
      if (action.payload == 'auth/email-already-in-use') {
        return { ...state, erroCadastro: 'O e-mail informado já está sendo utilizado' }
      }
      if (action.payload == 'auth/weak-password') {
        return { ...state, erroCadastro: 'A senha precisa ter no mínimo 6 caracteres' }
      }

    default:
      return state;
  }
}
