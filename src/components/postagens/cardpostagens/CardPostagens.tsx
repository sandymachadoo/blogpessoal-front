import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded-2xl overflow-hidden justify-between bg-[#F6E6CB]'>
                
            <div>
                <div className="flex w-full bg-[#C599B6] py-2 px-4 items-center gap-4 rounded-t-2xl">
                    <img
                        src={postagem.usuario?.foto || '/assets/user.png'}
                        className='h-12 rounded-full'
                        alt={postagem.usuario?.nome} />
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {postagem.usuario?.nome}
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{postagem.titulo}</h4>
                    <p>{postagem.texto}</p>
                    <p><strong className='font-bold'>Tema:</strong>  {postagem.tema?.descricao}</p>
                    <p><strong className='font-bold'>Data:</strong> {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(postagem.data))}</p>
                </div>
            </div>
            <div className="flex space-x-2 p-4 rounded-b-2xl">
                <Link to={`/editarpostagem/${postagem.id}`}
                    className='w-full text-slate-100 bg-[#4C7B8B] hover:bg-[#4C7B8B]
                    flex items-center justify-center py-2 rounded-lg transform transition-transform hover:scale-105'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarpostagem/${postagem.id}`} 
                    className='text-white bg-red-400 
                    hover:bg-red-700 w-full flex items-center justify-center py-2 rounded-lg transform transition-transform hover:scale-105'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem
