import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded-xl overflow-hidden justify-between font-poppins 
            shadow-lg transition-all hover:scale-105'>
                
            <div>
                <div className="flex w-full bg-blue-400 py-2 px-4 items-center gap-4 rounded-t-xl">
                    <img
                        src={postagem.usuario?.foto}
                        className='h-12 rounded-full'
                        alt={postagem.usuario?.nome} />
                    <h3 className='text-lg font-semibold text-center uppercase'>
                        {postagem.usuario?.nome}
                    </h3>
                </div>
                <div className='p-4'>
                    <h4 className='text-lg font-semibold uppercase'>{postagem.titulo}</h4>
                    <p className="text-base">{postagem.texto}</p>
                    <p className="text-sm text-gray-600">Tema: {postagem.tema?.descricao}</p>
                    <p className="text-sm text-gray-600">Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(postagem.data))}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarpostagem/${postagem.id}`}
                    className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                    flex items-center justify-center py-2 rounded-bl-xl'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarpostagem/${postagem.id}`} 
                    className='text-white bg-pink-400 
                    hover:bg-red-700 w-full flex items-center justify-center rounded-br-xl'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem
