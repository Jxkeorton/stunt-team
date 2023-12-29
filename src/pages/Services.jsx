import React from 'react';
import Layout from 'Layout';
import { Text } from 'components';

const Services = () => {
  const serviceSection = {
    marginBottom: '40px',
    display: 'flex',
    gap: '5%',
  };


  return (
    <Layout>
      <div className="bg-black-900 flex flex-col items-center justify-end mt-[40px] py-[18px] w-full">
          <div className='mb-[10%] flex flex-col items-center mx-[10px]'> 
            <Text className="text-2xl mb-4 text-white-A700" size="txtPlayfairDisplayRomanSemiBold23">
              Services 
            </Text>
            <Text className="text-gray-300 text-center w-[80%]" size="txtPlayfairDisplayRomanRegular20">
                Mountain Man BASE Productions is not just a BASE jumping team; we are storytellers of the
                skies. Our mission is to transform your BASE idea into an exhilarating narrative,
                leveraging the collective expertise and extensive knowledge of our dedicated team.
                We thrive on pushing the boundaries of what's possible in the world of extreme sports,
                delivering awe-inspiring performances that leave a lasting impact.
            </Text>
          </div>

        {/* Performing the stunt */}
        <div className='w-[80%]'>
        <div style={serviceSection}>
          <div className='flex-1'>
            <Text className="text-2xl mb-4 text-white-A700" size="txtPlayfairDisplayRomanSemiBold23">
              Performing the Stunt
            </Text>
            <Text className="text-gray-300" size="txtPlayfairDisplayRomanRegular20">
              We specialize in breathtaking BASE jumping stunts that captivate
              audiences. Our skilled team ensures a thrilling and safe performance.
            </Text>
          </div>
          
          {/* You can add an image here if needed */}
          <div className='mr-5 flex-1 h-auto bg-slate-500'>

          </div>
        </div>

        {/* Finding Suitable locations */}
        <div className="flex-row-reverse" style={serviceSection}>
          <div className='flex-1'>
            <Text className="text-white-A700 text-2xl mb-4" size="txtPlayfairDisplayRomanSemiBold23">
              Finding Suitable Locations
            </Text>
            <Text className="text-gray-300" size="txtPlayfairDisplayRomanRegular20">
              Our experienced team scouts and identifies optimal locations for BASE jumping.
              We consider factors such as safety, accessibility, and visual impact.
            </Text>
          </div>
          
          {/* You can add an image here if needed */}
          <div className='mr-5 flex-1 h-auto bg-slate-500'>

          </div>
        </div>

        {/* Risk Assessments */}
        <div className="service-section" style={serviceSection}>
          <div className='flex-1'>
            <Text className="text-white-A700 text-2xl mb-4" size="txtPlayfairDisplayRomanSemiBold23">
              Risk Assessments
            </Text>
            <Text className="text-gray-300" size="txtPlayfairDisplayRomanRegular20">
              Prioritizing safety, we conduct thorough risk assessments to identify potential hazards.
              Our commitment to safety ensures a secure environment for every performance.
            </Text>
          </div>
          
          {/* You can add an image here if needed */}
          <div className='mr-5 flex-1 h-auto bg-slate-500'>

          </div>
        </div>

        {/* Rigging */}
        <div className="flex-row-reverse" style={serviceSection}>
          <div className='flex-1'>
            <Text className="text-white-A700 text-2xl mb-4" size="txtPlayfairDisplayRomanSemiBold23">
              Rigging
            </Text>
            <Text className="text-gray-300" size="txtPlayfairDisplayRomanRegular20">
              Our expert rigging team is dedicated to setting up the necessary equipment securely.
              Rigging is a crucial aspect of ensuring a smooth and safe BASE jumping experience.
            </Text>
          </div>
          
          {/* You can add an image here if needed */}
          <div className='mr-5 flex-1 h-auto bg-slate-500'>

          </div>
        </div>

        {/* Ordering Equipment */}
        <div className="service-section" style={serviceSection}>
          <div className='flex-1'>
            <Text className="text-white-A700 text-2xl mb-4" size="txtPlayfairDisplayRomanSemiBold23">
              Ordering Equipment
            </Text>
            <Text className="text-gray-300" size="txtPlayfairDisplayRomanRegular20">
              We handle the procurement of top-notch BASE jumping equipment,
              ensuring that our team is equipped with the best gear for every performance.
            </Text>
          </div>
          
          {/* You can add an image here if needed */}
          <div className='mr-5 flex-1 h-auto bg-slate-500'>

          </div>
        </div>
        </div>

      </div>
    </Layout>
  );
}

export default Services;