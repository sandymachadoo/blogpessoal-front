import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemasProps {
    tema: Tema
}

function CardTemas({ tema }: CardTemasProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded-2xl overflow-hidden justify-between bg-white'>

            <div>
                <div className="flex w-full bg-[#C599B6] py-2 px-20 items-center gap-4 rounded-t-2xl">
                    <h3 className='text-lg font-bold text-center uppercase text-white'>
                        Tema
                    </h3>
                </div>
                <div className='p-4 '>
                    <p className='text-lg font-semibold uppercase'>{tema.descricao}</p>
                </div>
            </div>

            <div className="flex space-x-2 p-4 rounded-b-2xl">
                <Link to={`/editartema/${tema.id}`}
                    className='w-full text-slate-100 bg-[#4C7B8B] hover:bg-indigo-800 
                    flex items-center justify-center py-2 rounded-lg transform transition-transform hover:scale-105'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletartema/${tema.id}`} 
                    className='text-white bg-red-400 
                    hover:bg-red-700 w-full flex items-center justify-center py-2 rounded-lg transform transition-transform hover:scale-105'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardTemas
