import Image from "next/image";
import NavBar from '../../components/NavBar';
import Footer from "../../components/Footer";


function About() {
    return (
        <>
            <NavBar/>
            <section className="h-full bg-custom-white text-center flex flex-col items-center justify-center px-4 md:flex-row md:gap-28 md:px-12 text-black md:mt-20 z-[8] md:pb-40">
                <div className=" flex flex-col gap-8 max-w-lg md:px-6 w-screen h-full md:w-[600px] md:h-[367px] font-cabinetGrotesk text-black text-justify text-sm md:text-[16px] font-medium leading-[25px] p-8 mt-20 md:-mt-44">
                    <p>
                        Born into the royal family of Maseno in Ikoga-Zebbe, located in the Badagry Local Government area of Lagos State, Sesi Oluwaseun Whingan is a Nigerian Politician and
                        a current House of Representatives member in the 10th National Assembly.
                    </p>
                    <p>
                        Following his win of the House of Representatives seat for Badagry Federal Constituency in year 2023 till date, he has sponsored fifteen bills and moved many motions at the National Assembly. He also serves as the Deputy Chairman of the House Committee on Petroleum Resources (Upstream). 
                        Before his election to the National Assembly to represent Badagry Federal Constituency, Whingan held positions as the Managing Director of Pogs Luxury, the Regional Manager and Partner of FAB Pharmaceutical Nigeria Limited, a Journalist in Paramount FM Radio Station and Gateway Mirror in Ogun State. 
                    </p>
                    <p>
                        He holds his first degree in Mass Communication from the prestigious Olabisi Onabanjo University in Ago Iwoye, Ogun State, and also obtained a Master of Business Administration (MBA) from Anglia Ruskin University in the United Kingdom. Sesi Oluwaseun Whingan also doubles as the founder
                        of the Sesi Whingan Foundation in Badagry, through which he has significantly contributed to the growth and development of residents of the Badagry Federal Constituency.
                    </p>
                </div>
                <div className="mt-8 md:mt-20">
                    <Image
                        src="/picture.png"
                        width={300}
                        height={350}
                        alt="Sample description"
                        className=" rounded-tl-[80px] rounded-tr-[80px] rounded-br-[80px] rounded-bl-[80px] md:rounded-tl-[150px] md:rounded-tr-[150px] md:rounded-br-[150px] md:rounded-bl-[150px] md:w-[500px] md:h-[520px] "
                    />
                </div>
            </section>
            <Footer/>

        </>
    )
}

export default About;