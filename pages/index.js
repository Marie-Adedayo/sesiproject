import NavBar from '../components/NavBar';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Project from '../components/Project';
import ImageGallery from '../components/Imagegallery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  return (
    <div>
      <NavBar />

      <div className="w-full h-full bg-custom-white text-center flex flex-col items-center justify-center px-4 md:flex-row md:gap-28 md:px-12 md:pb-48 text-black z-[8]">
        <div className="flex flex-col gap-8 md:gap-12 max-w-lg px-6  md:px-6 mt-32 md:mt-12">
          <div>
            <h1 className=" w-[17px] md:w-[450px] text-4xl font-neuemachina font-normal text-left mt-10 md:text-7xl md:mt-12 z-[25]">
              Spectacular Enterpreneurial Successful Innovative
            </h1>
          </div>
      
         <div className="-ml-28">
            <Image
              src='/object1.png'
              width={100}
              height={100}
              alt='symbol'
              className='md:w-[280px] md:h-[150px] z-10 order-1 -mt-10 scale-[0.5] md:scale-[0.8]'
            />
          </div> 

          <div className='flex flex-col text-left justify-start gap-4 md:mb-16 -mt-10'>
            <p className="font-cabinetGrotesk font-medium text-black text-base md:text-lg">
              Born into the royal family of Maseno in Ikoga-Zebbe, located in the Badagry Local Government area of Lagos State,
              Sesi Oluwaseun Whingan is a Nigerian Politician and a current House of Representatives member in the 10th National Assembly.
            </p>
            
            <Link href='/about' legacyBehavior>
              <a className='font-neuemachina font-extrabold text-xl text-custom-green'>
                Learn More &#x2192;
              </a>
            </Link>
          </div>

         
        </div>
        <div className="mt-8 md:mt-20">
          <Image
            src="/picture.png"
            width={300}
            height={350}
            alt="Sample description"
            className=" rounded-t-[50px] rounded-b-[50px] md:rounded-b-[180px] md:rounded-t-[180px] align-top md:w-[550px] md:h-[590px] mb-20 md:mb-2"
          />
        </div>
      </div>

      <div className="relative h-full md:h-auto bg-custom-orange md:rounded-t-[150px] flex flex-col items-center justify-center md:flex-row -mt-10 md:pb-56 md:-mt-28 z-[8] shadow-[inset_0_15px_10px_-10px_rgba(0,0,0,0.3)]">
        <div className="w-full max-w-6xl px-2">
          <div className="flex items-center justify-center gap-6 md:gap-8 mb-6 mt-12">
            <div>
              <Image
                src="/house.png"
                width={70}
                height={70}
                alt="House illustration"
                className='md:w-[100px] md:h-[100px]'
              />
            </div>
            <div>
              <h1 className="font-neuemachina font-normal text-2xl md:text-5xl text-custom-white text-center">
                Representing Badagry
              </h1>
            </div>
          </div>
          <div className='flex flex-col md:flex md:flex-row gap-6 md:gap-0'>
            <div className="mt-6 text-center">
              <p className=" font-cabinetGrotesk relative md:w-[365px] mx-3 text-lg md:text-left text-custom-white mt-2 md:-ml-8 md:mt-60">
                Sesi Whingan is a member of the All Progressive Congress (APC) representing Badagry Federal Constituency in the 10th National Assembly.
                Through strategic partnerships and initiatives, he is a vocal advocate for development in Badagry.
              </p>
            </div>
            <div className='ml-0 md:-ml-10'>
              <ImageGallery/>
            </div>
            <div className='md:mt-96 invisible md:visible md:-mr-[200px] '>
              <Image
                src='/object1.png'
                width={150}
                height={100}
                alt='symbol'
                className='md:w-[200px] md:h-[100px] z-10 order-1 -mt-10 scale-[0.6] md:scale-[1.3]'
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-auto  bg-custom-white rounded-t-[50px] md:rounded-t-[150px] p-4 -mt-10 md:-mt-32 shadow-[inset_0_15px_10px_-10px_rgba(0,0,0,0.3)] z-[8]">
        <div>
          <h1 className='font-neuemachina mt-10 text-custom-green text-4xl md:text-[64px] justify-center text-center'> Projects</h1>
        </div>
        <div className=' flex flex-col'>
          <div className='block justify-center items-center'>
            <Project/>
          </div>
          <div className='flex justify-end items-end'>
            <Image
              src='/Frame.png'
              width={150}
              height={50}
              className='md:w-[255px] h-[86px]'
            />
          </div>
        </div>
      </div>
 
      <div className='bg-custom-white items-center justify-center'>
        <div className='flex flex-col md:flex-row gap-8 md:gap-24 p-4 md:p-14 justify-center items-center'>
          <div className='justify-center items-center'>
            <Image
              src='/Images/ReachOut.jpg'
              width={300}
              height={200}
              alt='Rectangle shape'
              className='ml-8 md:ml-2 md:w-[460px] md:h-[360] justify-center rounded-[75px]'
            />
          </div>  
          <div>
            <form className="w-full md:mt-14 ">
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  className="w-[350px] md:w-[407px] bg-custom-white px-4 py-2 border-b-2 border-b-custom-orange focus:outline-none focus:placeholder-transparent"
                />
              </div>
              <div className="mb-6">
                <input
                 type="email"
                 placeholder="YOUR EMAIL"
                 className="w-[350px] md:w-[407px] bg-custom-white px-4 py-2 border-b-2 border-b-custom-orange focus:outline-none focus:placeholder-transparent"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="YOUR REQUEST/CONTRIBUTION"
                  className="w-[350px] md:w-[407px] bg-custom-white px-4 py-2 border-b-2 border-b-custom-orange focus:outline-none focus:placeholder-transparent"
                />
              </div>
              <button
                type="submit"
                className="bg-custom-grey text-xl w-[150px] h-[50px] ml-48 md:ml-60 text-custom-orange border-2 border-custom-orange rounded-l-full rounded-r-full hover:bg-custom-orange hover:text-custom-white"
              >
                Submit &#x2192;
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer/>
      
    </div>
  );
}
