import { InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-purple-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal de Sandy Machado | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
                    <a href="https://www.linkedin.com/in/sandy-machado-/" target="_blank" rel="noopener noreferrer">
                    <LinkedinLogo size={48} weight='bold' />
                    </a>
                    <a href="https://www.instagram.com/sxndysm" target="_blank" rel="noopener noreferrer">
    <InstagramLogo size={48} weight='bold' />
  </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer