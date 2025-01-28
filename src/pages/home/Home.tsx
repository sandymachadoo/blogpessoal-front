import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";

function Home() {
    return (
        <>
            <div className="min-h-screen w-full bg-pink-100 flex flex-col justify-center items-center">
                <div className="container grid grid-cols-2 text-black">
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-bold font-[Poppins] drop-shadow-lg transition-all hover:scale-105">
                            Seja Bem-Vindo!
                        </h2>
                        <p className="text-2xl font-[Dancing Script] drop-shadow-md italic transition-all hover:scale-105">
                            Transforme seus pensamentos em palavras
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="border-4 border-pink-500 p-4 rounded">
                                <ModalPostagem />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img src="src/assets/tucano.jpg" alt="Turtle" className="w-96 h-auto shadow-lg rounded-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl" />
                    </div>
                </div>
            </div>

            <ListaPostagens />
        </>
    );
}

export default Home;
