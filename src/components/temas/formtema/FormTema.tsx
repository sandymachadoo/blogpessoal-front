import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormTema() {

    const navigate = useNavigate();

    const [tema, setTema] = useState<Tema>({} as Tema)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta("Você precisa estar logado!","info")
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/temas")
    }

    async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/temas`, tema, setTema, {
                    headers: { 'Authorization': token }
                })
                ToastAlerta("O Tema foi atualizado com sucesso!","sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    ToastAlerta("Erro ao atualizar o tema.","erro")
                }
            }
        } else {
            try {
                await cadastrar(`/temas`, tema, setTema, {
                    headers: { 'Authorization': token }
                })
                ToastAlerta("O Tema foi cadastrado com sucesso!","sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    ToastAlerta("Erro ao cadastrar o tema.","erro")
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#09122C] to-[#872341] flex items-center justify-center">
            <div className="w-full max-w-md px-8 py-6 bg-[#4C7B8B] rounded-2xl shadow-xl">
                <h1 className="text-4xl text-center mb-8 text-white">
                    {id === undefined ? 'Cadastrar Tema' : 'Editar Tema'}
                </h1>

                <form className="flex flex-col gap-6" onSubmit={gerarNovoTema}>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="descricao" className="text-white font-semibold">Descrição do Tema</label>
                        <input
                            type="text"
                            placeholder="Descreva aqui seu tema"
                            name='descricao'
                            className="border-2 rounded-lg p-3 bg-white text-black focus:outline-none"
                            value={tema.descricao}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <button
                        className="text-white bg-[#872341]  hover:bg-[#872341] w-full flex items-center justify-center py-2 rounded-lg transform transition-transform hover:scale-105"
                        type="submit">
                        {isLoading ? 
                            <RotatingLines 
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                        }
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormTema;
