import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import Postagem from "../../../models/Postagem"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function DeletarPostagem() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem)
    const { id } = useParams<{ id: string }>()
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
                headers: { 'Authorization': token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta("Você precisa estar logado", "erro")
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarPostagem() {
        setIsLoading(true)
        try {
            await deletar(`/postagens/${id}`, {
                headers: { 'Authorization': token }
            })
            ToastAlerta("Postagem apagada com sucesso", "sucesso")
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            } else {
                ToastAlerta("Erro ao deletar a postagem.", "erro")
            }
        }
        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/postagens")
    }

    return (
        <div className='min-h-screen bg-gradient-to-r from-[#09122C] to-[#872341] flex items-center justify-center py-10'>
            <div className='w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden'>
                <h1 className='text-4xl text-center text-[#09122C] font-bold mt-6'>Deletar Postagem</h1>
                <p className='text-center text-[#872341] font-semibold mt-2 mb-6 px-4'>
                    Você tem certeza de que deseja apagar a postagem a seguir?
                </p>
                <div className='border-t border-b flex flex-col'>
                    <header className='py-3 px-6 bg-[#4C7B8B] text-white font-bold text-2xl'>
                        Postagem
                    </header>
                    <div className="p-6 bg-slate-100 text-[#09122C]">
                        <p className='text-xl font-semibold'>{postagem.titulo}</p>
                        <p>{postagem.texto}</p>
                    </div>
                    <div className="flex">
                        <button 
                            className='text-white bg-[#872341] hover:bg-[#6b1b30] w-full py-3 font-semibold transition-all'
                            onClick={retornar}>
                            Não
                        </button>
                        <button 
                            className='text-white bg-[#90C67C] hover:bg-[#050b1c] w-full py-3 font-semibold flex items-center justify-center transition-all'
                            onClick={deletarPostagem}>
                            {isLoading ? (
                                <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="24"
                                    visible={true}
                                />
                            ) : (
                                <span>Sim</span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletarPostagem
