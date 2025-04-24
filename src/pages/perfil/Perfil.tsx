import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import { ToastAlerta } from '../../utils/ToastAlerta'
import tecnologia from "../../assets/tecnologia.png";

function Perfil() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlerta('Você precisa estar logado', 'info')
            navigate("/")
        }
    }, [usuario.token])

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#09122C] to-[#872341] flex items-center justify-center py-8 px-4">
  <div className="w-full max-w-xl bg-white rounded-2xl overflow-hidden shadow-2xl">
    
    <img
      className='w-full h-50 object-cover'
      src= "/assets/capa.jpg" alt="Capa do Perfil"
    />

    <div className="relative flex justify-center">
      <img
        className='rounded-full w-40 h-40 object-cover border-4 border-white absolute -top-20 shadow-md bg-white'
        src={usuario.foto || '/assets/mulher.png'}
        alt={`Foto de perfil de ${usuario.nome}`}
      />
    </div>

    <div className="pt-30 pb-8 px-6 text-center bg-[#DBDBDB] text-black rounded-b-2xl">
      <p className="text-2xl font-semibold">Nome: {usuario.nome}</p>
      <p className="text-lg mt-2">Email: {usuario.usuario}</p>
    </div>

  </div>
</div>
    )
}

export default Perfil