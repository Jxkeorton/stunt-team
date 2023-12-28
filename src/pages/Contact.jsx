import React from 'react';
import Layout from 'Layout'
import { Img, Text } from "components";

const Contact = () => {

  return (
    <Layout>
      <div className='flex flex-row items-center justify-center mt-[63px] md:gap-5 gap-20'>
        {/* left side */}
        <Img
          className="max-h-[900px] h-auto w-[40%] object-cover"
          src="images/img_motobase.png"
          alt="motobase"
        />

        {/* right side */}
        <div className='flex flex-col justify-center'>
          <Text
            className="sm:text-[19px] md:text-[21px] text-[23px]"
            size="txtPlayfairDisplayRomanSemiBold23"
          >
              Call or Text:
          </Text>

          <Text
            className=" my-10"
            size="txtPlayfairDisplayRomanRegular20"
          >
            (+44) 7986273803 <br /> Office Hours: Daily 9am to 9pm
          </Text>


          <div>
            <input type="text" placeholder="Your email" className=' my-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-900' />

            <button className="bg-white-A700 md:flex h-[37px] md:items-center md:justify-center m-auto rounded-[15px] w-[50%] border border-solid border-black-900 transition-all duration-300 ease-in-out hover:bg-yellow-500" >
                <Text
                  className="absolute md:flex h-max md:items-center justify-center m-auto text-black-900 text-center text-xl w-max"
                  size="txtPlayfairDisplayRomanRegular20Black900"
                >
                  Submit
                </Text>
            </button>
          </div>
          

        </div>

      </div>
    </Layout>
    
  )
}

export default Contact
