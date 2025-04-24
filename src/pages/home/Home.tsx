import { useEffect, useState } from "react";
import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";
import { motion } from "framer-motion";

function Home() {
    const [texto, setTexto] = useState("");
    const mensagem = "Bem-vindo!";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < mensagem.length) {
            const timeout = setTimeout(() => {
                setTexto((prev) => prev + mensagem[index]);
                setIndex(index + 1);
            }, 100); 
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <>
            <div className="bg-gradient-to-r from-[#09122C] to-[#872341] flex justify-center">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        
                        <h2 className="text-6xl font-bold">{texto}</h2>

                        
                        <motion.p 
                            className="text-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Compartilhe suas ideias, pensamentos e curiosidades
                        </motion.p>

                        
                        <motion.div 
                            className="flex justify-around gap-4"
                            whileHover={{ scale: 1.1 }}
                        >
                            <ModalPostagem />
                        </motion.div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="/assets/flordelotus.png"
                            alt="Imagem de uma Flor de Lótus"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>

            <ListaPostagens />
        </>
    );
}

export default Home;
