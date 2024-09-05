import NavBar from '../components/NavBar';
import Image from 'next/image';
import Footer from '../components/Footer';
import ImageGallery from '../components/Imagegallery';

export default function Home() {
  return (
    <div>
      <NavBar />

      <div className="w-full h-auto bg-custom-white text-center flex flex-col items-center justify-center px-4 md:flex-row md:gap-28 md:px-12 md:pb-20 text-black z-[8]">
        <div className="flex flex-col gap-8 md:gap-12 max-w-lg md:px-6 mt-32 md:mt-12">
          <div>
            <h1 className="text-6xl font-neuemachina font-normal -mt-10 md:text-8xl md:mt-12 z-[25]">
              Lorem ipsum consecte
            </h1>
          </div>
      
          <div className="">
            <div className=''>
              <img
                src='/Ellipse5.svg'
                width={2000}
                height={2000}
                className='z-10 relative'
              />
            </div>

            <div className=' absolute top-[250px] md:top-[450px] z-20'>
              <Image
                src='/object1.png'
                width={200}
                height={200}
              />
            </div>

          </div>

          <div className='flex flex-col text-justify justify-start gap-4 md:mb-16'>
            <p className="font-cabinetGrotesk font-medium text-black text-base md:text-lg">
             Born into the royal family of Maseno in Ikoga-Zebbe, located in the Badagry Local Government area of Lagos State,
              Sesi Oluwaseun Whingan is a Nigerian Politician and a current House of Representatives member in the 10th National Assembly.

            </p>
            <a href='/about' className='font-neuemachina font-extrabold text-xl text-custom-green'>Learn More &#x2192;</a>

          </div>
         
        </div>
        <div className="mt-8 md:mt-0">
          <Image
            src="/picture.png"
            width={300}
            height={350}
            alt="Sample description"
            className=" rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[100px] md:rounded-tl-[219px] md:rounded-tr-[219px] md:rounded-br-[219px] md:rounded-bl-[219px] md:w-[500px] md:h-[520px] mb-20 md:mb-2"
          />
        </div>
      </div>

      <div className="h-full md:h-auto bg-custom-orange rounded-t-[50px] md:rounded-t-[150px] flex flex-col items-center justify-center md:flex-row -mt-16 md:pb-24 md:-mt-32 z-[8]">
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
          <div className='flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-6 md:gap-4'>
            <div className="mt-6 text-center">
              <p className="relative md:w-[365px] mx-3 text-lg text-justify text-custom-white mt-2 md:mx-0 md:mt-40">
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
              </p>
            </div>
            <div>
              <ImageGallery/>
            </div>
          </div>
          
        </div>
      </div>

      <div className="relative  w-full h-auto  items-center justify-center bg-custom-white rounded-t-[50px] md:rounded-t-[150px] flex flex-col  md:flex-row p-4 md:p-6 -mt-14 md:-mt-28 z-[8]">
        <div className='flex flex-col md:flex-row gap-8 md:gap-24 p-4 md:p-14'>
          <div className='justify-center items-center'>
            <Image
              src='/rectangle.png'
              width={300}
              height={200}
              alt='Rectangle shape'
              className='ml-8 md:ml-2 md:w-[460px] md:h-[360] justify-center'
            />
          </div>  
          <div>
            <form className="w-full md:mt-14 ">
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-[350px] md:w-[407px] bg-custom-white px-4 py-2 border-b-2 border-b-custom-orange focus:outline-none focus:border-b-custom-green"
                />
              </div>
              <div className="mb-6">
                <input
                 type="text"
                 placeholder="Last Name"
                 className="w-[350px] md:w-[407px] bg-custom-white px-4 py-2 border-b-2 border-b-custom-orange focus:outline-none focus:border-b-custom-green"
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-[350px] md:w-[407px] bg-custom-white px-4 py-2 border-b-2 border-b-custom-orange focus:outline-none focus:border-b-custom-green"
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
