import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemasProps {
    tema: Tema
}

function CardTemas({ tema }: CardTemasProps) {
    return (
        <div className='border border-yellow-300 flex flex-col rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-2xl bg-pink-100'>

        
            <header className='py-4 px-6 bg-pink-300 text-yellow-900 font-bold text-2xl text-center'>
                Tema
            </header>

     
            <p className='p-6 text-2xl bg-white-100 h-full text-yellow-900 font-semibold text-center'>
                {tema.descricao}
            </p>

          
            <div className="flex">
                <Link to={`/editartema/${tema.id}`}
                    className='w-full text-yellow-900 bg-blue-300 hover:bg-yellow-400 transition-all flex items-center justify-center py-3 font-bold rounded-bl-xl'>
                    Editar
                </Link>

                <Link to={`/deletartema/${tema.id}`}
                    className='w-full text-white bg-pink-400 hover:bg-pink-500 transition-all flex items-center justify-center font-bold py-3 rounded-br-xl'>
                    Deletar
                </Link>
            </div>
        </div>
    )
}

export default CardTemas
