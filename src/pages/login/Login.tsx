import { Link, useNavigate } from 'react-router-dom'; 
import './Login.css';
import { AuthContext } from '../../contexts/AuthContext';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
    const navigate = useNavigate();
    const { usuario, handleLogin, isLoading } = useContext(AuthContext);

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home');
        }
    }, [usuario]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        });
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }

    return (
        <div className="bg-gradient-to-r from-[#09122C] to-[#872341] grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold" style={{ backgroundColor: '#C599B6' }}>
            <div className="bg-white shadow-lg rounded-2xl p-10 w-96 flex flex-col items-center">
                <h2 className="text-slate-900 text-5xl mb-4">Entrar</h2>
                <form className="flex flex-col w-full gap-4" onSubmit={login}>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuário"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuarioLogin.usuario}
                            onChange={atualizarEstado}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuarioLogin.senha}
                            onChange={atualizarEstado}
                        />
                    </div>
                    <button type="submit" className="rounded bg-purple-400 flex justify-center hover:bg-indigo-900 text-white w-1/2 py-2">
                        {isLoading ? (
                            <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} />
                        ) : (
                            <span>Entrar</span>
                        )}
                    </button>
                    <hr className="border-slate-800 w-full" />
                    <p>
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="text-indigo-800 hover:underline">Cadastre-se</Link>
                    </p>
                </form>
            </div>
            <div className="fundoLogin hidden lg:block"></div>
        </div>
    );
}

export default Login;
