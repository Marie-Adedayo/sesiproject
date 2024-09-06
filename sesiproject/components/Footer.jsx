import Image from "next/image";
import Link from "next/link";



function Footer()  {
    return(
        <>
            <footer className="bg-custom-white p-8 md:p-10">
                <div className='flex flex-col gap-8 md:gap-12'>
                    <div className='flex flex-row md:grid md:grid-cols-[1fr_2fr] md:gap-24  gap-6 mt-12'>
                        <div className='flex flex-col gap-8 justify-center items-center'>
                            <ul className="flex flex-col gap-6">
                                <li className="text-xl font-neuemachina font-light text-custom-green text-left hover:underline hover:decoration-custom-orange underline-offset-2">
                                    <Link href="/">About</Link>
                                </li>
                                <li className="text-xl font-neuemachina font-light text-custom-green text-left hover:underline hover:decoration-custom-orange underline-offset-2">
                                    <Link href="/">Foundations</Link>
                                </li>
                                <li className="text-xl font-neuemachina font-light text-custom-green text-left hover:underline hover:decoration-custom-orange underline-offset-2">
                                    <Link href="/">Projects</Link>
                                </li>
                                <Link href="/">
                                    <button className="bg-custom-grey justify-center items-center mt-10 text-xl text-custom-orange px-3 py-1 border-2 border-custom-orange rounded-full hover:bg-custom-orange hover:text-custom-white">
                                        CONTACT
                                    </button>
                                </Link>
                            </ul>
                        </div>
                        <div className='flex flex-col md:ml-20 gap-12'>
                            <div className='flex flex-col md:flex-row gap-6 md:gap-20 items-center justify-center'>
                                <div>
                                    <ul className='flex flex-col gap-6'>
                                        <li className="text-xl font-neuemachina font-light text-custom-green text-center hover:underline hover:decoration-custom-orange underline-offset-2">
                                            <Link href="/">Linkedin</Link>
                                        </li>
                                        <li className="text-xl font-neuemachina font-light text-custom-green text-center hover:underline hover:decoration-custom-orange underline-offset-2">
                                            <Link href="/">Instagram</Link>
                                        </li>
                                        <li className="text-xl font-neuemachina font-light text-custom-green text-center hover:underline hover:decoration-custom-orange underline-offset-2">
                                            <Link href="/">Facebook</Link>
                                        </li>
                                        <li className="text-xl font-neuemachina font-light text-custom-green text-center hover:underline hover:decoration-custom-orange underline-offset-2">
                                            <Link href="/">X(Twitter)</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>Address 1, National Assembly,FCT Abuja.</h3>
                                </div>
                            </div>
                            <div>
                                <a href='' className='text-custom-green underline underline-offset-2 decoration-custom-green hover:decoration-custom-orange hover:text-custom-orange md:ml-[70px]'>
                                     hello@sesiwhingan.com
                                </a>
                            </div>
                        </div>    
                    </div>
                    <div className='flex flex-row gap-4 items-start justify-start md:gap-[50em] mt-8 md:ml-20'>
                        <Link href="/" className='flex flex-row gap-0 md:gap-4'>
                            <Image
                                src="/logo.png"
                                width={30}
                                height={28}
                                alt="logo"
                                className="md:w-[50px] md:h-[48px]"
                            />
                            <h2 className="text-3xl md:text-5xl text-black font-sacramento font-normal ">Whingan</h2>
                        </Link>
                        <div className=" md:-mr-24">
                            <Image
                                src='/object1.png'
                                width={50}
                                height={50}
                                alt="symbol"
                                className='md:w-[280px] md:h-[150px] z-10 order-1 -mt-10 scale-[0.4] md:scale-[0.8]'
                            />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;