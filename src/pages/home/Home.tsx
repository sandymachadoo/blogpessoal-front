import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"

function Home() {
    return (
        <>
            <div className="bg-[#6A1E55] flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Bem vindo!
                        </h2>
                        <p className='text-xl'>
                            Compartilhe aqui suas ideias, pensamentos e curiosidades
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                <ModalPostagem />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="src/assets/flordelotus.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>

            <ListaPostagens />
        </>
    )
}

export default Home