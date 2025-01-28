import { InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {

        component = (
            <div className="flex justify-center bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                <div className="container flex flex-col items-center py-8 space-y-4">
                    <p className='text-2xl font-bold text-center'>
                        Blog Pessoal desenvolvido por Sandy Machado | Copyright: {data}
                    </p>
                    <p className='text-lg text-center'>Acesse minhas redes sociais</p>
                    <div className='flex gap-6'>
                        <a href="https://www.linkedin.com/in/sandy-machado-/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transform transition-all">
                            <LinkedinLogo size={56} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/sxndysm/#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transform transition-all">
                            <InstagramLogo size={56} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {component}
        </>
    )
}

export default Footer
