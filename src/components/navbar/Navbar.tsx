import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
        navigate('/')
    }

    let component: ReactNode

    if (usuario.token !== "") {
        component = (
            <div className='w-full bg-[#DBDBDB] text-black flex justify-center py-4'>
                <div className="container flex justify-between items-center text-lg">
                    <Link to='/home' className="flex items-center text-3xl font-bold">
                        <img src="src/assets/flordelotus.png" alt="Logo" className="mr-2 w-10 h-10" />
                        Blog Pessoal
                    </Link>

                    <div className='flex gap-7 ml-auto'>
                        <Link to='/postagens' className='hover:underline font-bold text-2xl'>Postagens</Link>
                        <Link to='/temas' className='hover:underline font-bold text-2xl'>Temas</Link>
                        <Link to='/cadastrartema' className='hover:underline font-bold text-2xl'>Cadastrar tema</Link>
                        <Link to='/perfil' className='hover:underline font-bold text-2xl'>Perfil</Link>
                        <Link to='' onClick={logout} className='hover:underline font-bold text-2xl'>Sair</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            { component }
        </>
    )
}

export default Navbar
