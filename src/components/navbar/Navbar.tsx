import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);

    function logout() {

        handleLogout();
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info');
        navigate('/');
    }
    
    let component: ReactNode;

    if (usuario.token !== "") {

        component = (
            <div className='w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white 
                flex justify-center py-4 shadow-lg'>
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold hover:scale-105 transform transition-all">
                        Blog Pessoal
                    </Link>

                    <div className='flex gap-6'>
                        <Link to='/postagens' className='hover:underline hover:text-yellow-300 transition-all'>
                            Postagens
                        </Link>
                        <Link to='/temas' className='hover:underline hover:text-yellow-300 transition-all'>
                            Temas
                        </Link>
                        <Link to='/cadastrartema' className='hover:underline hover:text-yellow-300 transition-all'>
                            Cadastrar tema
                        </Link>
                        <Link to='/perfil' className='hover:underline hover:text-yellow-300 transition-all'>
                            Perfil
                        </Link>
                        <Link to='' onClick={logout} className='hover:underline hover:text-red-400 transition-all'>
                            Sair
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            { component }
        </>
    );
}

export default Navbar;
