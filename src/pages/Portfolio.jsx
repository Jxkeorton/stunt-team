import React from 'react'
import Layout from 'Layout'
import { Text } from 'components';
import { Link } from "react-scroll";
import ReactPlayer from 'react-player/lazy'


const Portfolio = () => {
  const portfolioSection = {
    marginBottom: "20px",
  };

  const gradientButtonStyle = {
    backgroundImage: 'linear-gradient(to bottom, #000000 30%, #808080 89%)',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <Layout>
      <div className='flex flex-col items-center justify-center mt-[50px]'>
        <div className='flex flex-col items-center justify-center w-[100%] mb-10'>
          <Text
              className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900 text-center border-b border-black-900"
              size="txtPlayfairDisplayRomanSemiBold23"
          >
                Portfolio
          </Text>

          <Text
                className="mt-4 mx-3 text-black-900 w-[90%]"
                size="txtPlayfairDisplayRomanRegular20"
          >
            Only through hard training commitment and team work are any of these tasks able to be completed. The experience across this team of unique individuals is what creates these surreal stunts, making it extremely difficult to replicate.
          </Text>
          
          {/* Buttons */}
          <div className='flex flex-row w-[100%] justify-center gap-5 mt-5'>
            <Link
              to="moto"  // Replace with the actual id of the section
              spy={true}
              smooth={true}
              duration={500}
            >
              <button style={gradientButtonStyle} className=" hover:scale-[120%] flex rounded-[15px] w-full transition-all duration-300 ease-in-out items-center justify-center" >
                <Text
                  className="my-4 mx-3 text-white-A700 text-center text-lg w-full"
                  size="txtPlayfairDisplayRomanRegular20Black900"
                >
                  Moto BASE
                </Text>
              </button>
            </Link>

            <Link
              to="balloon"  // Replace with the actual id of the section
              spy={true}
              smooth={true}
              duration={500}
            >
              <button style={gradientButtonStyle} className="hover:scale-[120%] flex m-auto rounded-[15px] w-full transition-all duration-300 ease-in-out items-center" >
                <Text
                  className="my-4 mx-3 text-white-A700 text-center text-xl w-full"
                  size="txtPlayfairDisplayRomanRegular20Black900"
                >
                  Balloon BASE
                </Text>
              </button>
            </Link>

            <Link
              to="ski"  // Replace with the actual id of the section
              spy={true}
              smooth={true}
              duration={500}
            >
              <button style={gradientButtonStyle} className="hover:scale-[120%] flex m-auto rounded-[15px] w-full transition-all duration-300 ease-in-out items-center" >
                <Text
                  className="my-4 mx-3 text-white-A700 text-center text-xl w-full"
                  size="txtPlayfairDisplayRomanRegular20Black900"
                >
                  Ski BASE
                </Text>
              </button>
            </Link>
          </div>
          
        </div>

        {/* moto base section */}
        <div className='flex flex-col items-center justify-center' style={portfolioSection} id="moto">
          <Text
              className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900 text-center border-b border-black-900"
              size="txtPlayfairDisplayRomanSemiBold23"
          >
                Moto BASE
          </Text>

          <div className='mt-5 flex flex-row sm:flex-col'>
            <div className='flex-1 ml-5 flex justify-center'>
            <ReactPlayer url="/videoes/motoBASE.mp4" controls width="auto"/>
            </div>
            
            <div className='flex-1 sm:mx-10'>
              <Text
                className="mt-11 mr-3 text-black-900 w-full"
                size="txtPlayfairDisplayRomanRegular20"
              >
                No detail was overlooked during the Moto BASE stunt. <br /> We had the jump specifically made for the jump and the bike rigged with its own round parachute by a professional parachute rigger and camera mounts.  
              </Text>
              <Text
                className="mt-4 mr-3 text-black-900 w-full"
                size="txtPlayfairDisplayRomanRegular20"
              >
                The jump and landing area was assessed and the stunt was performed according to plan with no bikes harmed in the making. Leading to this surreal looking shot of Luke taking his morning ride to the next level.
              </Text>
            </div>
            

          </div>
          
        </div>

        {/* balloon base section */}
        <div className='flex flex-col items-center justify-center' style={portfolioSection} id="balloon">
          <Text
              className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900 text-center border-b border-black-900"
              size="txtPlayfairDisplayRomanSemiBold23"
          >
                Balloon BASE
          </Text>

          <div className='mt-5 flex flex-row sm:flex-col'>
            <div className='flex-1 ml-5 flex justify-center'>
            <ReactPlayer url="/videoes/balloonBASE.mp4" controls width="auto"/>
            </div>
            
            <div className='flex-1 sm:mx-10'>
              <Text
                className="mt-11 mr-3 text-black-900 w-full font-bold"
                size="txtPlayfairDisplayRomansemibold20"
              >
                 How did you get to the top of the balloon ?
              </Text>
              <Text
                className="mt-4 mr-3 text-black-900 w-full"
                size="txtPlayfairDisplayRomanRegular20"
              >
                A question we get asked alot, well this is thanks to Ilko and his years of experience with stunt work allowing us to fix ropes to the top of the balloon that hoisted us up as the balloon was inflated. 
                <br />
                The Jumpers used radios to coordinate with the balloon pilot and drone pilot in the basket below so they knew when everyone was ready and it was safe to jump.
              </Text>
            </div>
            

          </div>
        </div>

        {/* ski base section */}
        <div className='flex flex-col items-center justify-center' style={portfolioSection} id="ski">
          <Text
              className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900 text-center border-b border-black-900"
              size="txtPlayfairDisplayRomanSemiBold23"
          >
                Ski BASE
          </Text>

          <div className='mt-5 flex flex-row sm:flex-col'>
            <div className='flex-1 ml-5 flex justify-center'>
            <ReactPlayer url="/videoes/skiBASE.mp4" controls width="auto"/>
            </div>
            
            <div className='flex-1 sm:mx-10'>
              <Text
                className="mt-11 mr-3 text-black-900 w-full"
                size="txtPlayfairDisplayRomanRegular20"
              >
                  Josh spent days searching for a suitable location for his ski BASE. 
                  <br /> 
              </Text>
              <Text
                className="mt-4 mr-3 text-black-900 w-full"
                size="txtPlayfairDisplayRomanRegular20"
              >
                After finally finding the perfect spot through his thorough assessment and experience he could confidentally complete the task at hand.
              </Text>
            </div>
            

          </div>
        </div>
      </div>
      
    </Layout>
  )
}

export default Portfolio
