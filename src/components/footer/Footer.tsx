import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {

        component = (
            <div className="flex justify-center bg-[#DBDBDB] text-black">
                <div className="container flex flex-col items-center py-8 animate-footer">
                    <p className='text-xl font-bold'>
                        Blog Pessoal | Copyright: {data}
                    </p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/sandy-machado-" target="_blank">
                            <LinkedinLogo size={48} weight='bold' />
                        </a>
                        <a href="https://www.github.com/sandymachadoo" target="_blank">
                            <GithubLogo size={48} weight='bold' />
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
