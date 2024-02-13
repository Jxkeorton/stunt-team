import React, {useRef, useState} from 'react';
import Layout from 'Layout'
import { Img, Text } from "components";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_y3gnaar',
        'template_5fv1vj2',
        form.current,
        'e3dNwKxoG5Xuv3hqO'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
          setIsSuccess(true);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const resetForm = () => {
    setIsSuccess(false);
  };

  return (
    <Layout>
      <div className='flex flex-row md:flex-col items-center justify-center mt-[63px] md:gap-5 gap-20'>
        {/* left side */}
        <div className='flex w-full h-full md:justify-center'>
          <Img
            className="max-h-[900px] h-auto w-[80%] object-cover"
            src="images/contactImg.png"
            alt="motobase"
          />
        </div>
        

        {/* right side */}
        <div className='flex flex-col justify-center md:items-center w-[80%]'>
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


          <div className=' flex flex-col md:items-center w-full'>

          <Text
            className="sm:text-[19px] md:text-[21px] text-[23px]"
            size="txtPlayfairDisplayRomanSemiBold23"
          >
            Email
          </Text>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col md:items-center w-full'>
              <input type="text" placeholder="Name" name="user_name" className=' my-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-900 w-[70%] md:w-full'/>
              <input type="email" placeholder="Your email" name="user_email" className=' my-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-900 w-[70%] md:w-full' />
              <textarea placeholder="Message" name="message"  rows={8} className='my-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-900 w-[70%] md:w-full ' />

              <input 
                type="submit" 
                className="bg-white-A700 h-[37px] rounded-[15px] w-[50%] border-2 border-solid border-black-900 transition-all duration-300 ease-in-out hover:bg-yellow-500 font-bold" 
                disabled={isSubmitting}
                value={
                  isSubmitting
                    ? 'Sending...'
                    : isSuccess
                    ? 'Sent! Send Another?'
                    : 'Send'
                }
                onClick={isSuccess ? resetForm : undefined}
              />
              
            </form>
            
          </div>
          

        </div>

      </div>
    </Layout>
    
  )
}

export default Contact
