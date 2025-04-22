import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import './Cadastro.css';
import { RotatingLines } from 'react-loader-spinner';
import { ToastAlerta } from '../../utils/ToastAlerta';

function Cadastro() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmaSenha, setConfirmaSenha] = useState<string>('');
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate('/login');
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        ToastAlerta('Usuário cadastrado com sucesso!', 'sucesso');
      } catch (error) {
        ToastAlerta('Erro ao cadastrar o usuário!', 'erro');
      }
      setIsLoading(false);
    } else {
      ToastAlerta('Dados do usuário inconsistentes! Verifique as informações.', 'erro');
      setUsuario({ ...usuario, senha: '' });
      setConfirmaSenha('');
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen bg-gradient-to-r from-[#872341] to-[#09122C] place-items-center">
      <div className="fundoCadastro hidden lg:block"></div>
      <div className="shadow-lg rounded-2xl p-8 w-full max-w-md border border-gray-200 bg-white">
        <h2 className="text-gray-900 text-3xl font-bold text-center mb-6">Cadastrar</h2>
        <form className="space-y-4" onSubmit={cadastrarNovoUsuario}>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium" htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
              value={usuario.nome || ''}
              onChange={atualizarEstado}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium" htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Digite seu usuário"
              className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
              value={usuario.usuario || ''}
              onChange={atualizarEstado}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium" htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Digite a URL da sua foto"
              className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
              value={usuario.foto || ''}
              onChange={atualizarEstado}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium" htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
              className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
              value={usuario.senha || ''}
              onChange={atualizarEstado}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium" htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirme sua senha"
              className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
              value={confirmaSenha}
              onChange={handleConfirmarSenha}
            />
          </div>
          <div className="flex gap-4 mt-4">
            <button
              type="button"
              className="w-1/2 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
              onClick={retornar}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="w-1/2 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700 flex justify-center"
            >
              {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : 'Cadastrar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
