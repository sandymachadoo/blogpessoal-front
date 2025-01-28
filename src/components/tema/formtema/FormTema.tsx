import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormTema() {
    const navigate = useNavigate();
    const [tema, setTema] = useState<Tema>({} as Tema);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token },
            });
        } catch (error: any) {
            if (error.toString().includes("403")) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === "") {
            ToastAlerta("Você precisa estar logado!", "info");
            navigate("/");
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        });
    }

    function retornar() {
        navigate("/temas");
    }

    async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/temas`, tema, setTema, {
                    headers: { Authorization: token },
                });
                ToastAlerta("O Tema foi atualizado com sucesso!", "info");
            } catch (error: any) {
                if (error.toString().includes("403")) {
                    handleLogout();
                } else {
                    ToastAlerta("Erro ao atualizar o tema", "erro");
                }
            }
        } else {
            try {
                await cadastrar(`/temas`, tema, setTema, {
                    headers: { Authorization: token },
                });
                ToastAlerta("O Tema foi cadastrado com sucesso!", "sucesso");
            } catch (error: any) {
                if (error.toString().includes("403")) {
                    handleLogout();
                } else {
                    alert("Erro ao cadastrar o tema.");
                }
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto my-8">
            <h1 className="text-4xl text-center mb-6 font-semibold text-indigo-600">
                {id === undefined ? "Cadastrar Tema" : "Editar Tema"}
            </h1>

            <form
                className="w-full max-w-md flex flex-col gap-6 bg-white shadow-lg rounded-xl p-6 border-4 border-blue-500"
                onSubmit={gerarNovoTema}
            >
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="descricao"
                        className="text-lg font-medium text-gray-700"
                    >
                        Descrição do Tema
                    </label>
                    <input
                        type="text"
                        placeholder="Descreva aqui seu tema"
                        name="descricao"
                        className="border-2 border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                        value={tema.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            atualizarEstado(e)
                        }
                    />
                </div>

                <button
                    className="rounded-xl text-slate-100 bg-pink-500 hover:bg-pink-600 w-full py-3 flex justify-center items-center transition duration-300"
                    type="submit"
                >
                    {isLoading ? (
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        />
                    ) : (
                        <span className="font-semibold">
                            {id === undefined ? "Cadastrar" : "Atualizar"}
                        </span>
                    )}
                </button>
            </form>
        </div>
    );
}

export default FormTema;
