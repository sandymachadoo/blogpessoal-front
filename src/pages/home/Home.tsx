import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";

function Home() {
    return (
        <>
            <div
                className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
                style={{
                    backgroundImage: "url('src/assets/pink.jpg')",
                }}
            >
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-bold font-[Poppins] text-pink-100 drop-shadow-lg transition-all hover:scale-105">
                            Seja Bem Vindo!
                        </h2>
                        <p className="text-2xl font-[Dancing Script] text-pink-200 drop-shadow-md italic transition-all hover:scale-105">
                            Transforme seus pensamentos em palavras
                        </p>

                        <div className="flex justify-around gap-4">
                            <ModalPostagem />
                        </div>
                    </div>

                    {/* Parte que exibia a imagem do tucano foi removida */}
                </div>
            </div>

            <ListaPostagens />
        </>
    );
}

export default Home;
