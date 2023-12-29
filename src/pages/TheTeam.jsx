import React from 'react'
import Layout from 'Layout'
import TeamMemberCard from 'components/TeamMemberCard/TeamMemberCard'
import { Text } from 'components'

const TheTeam = () => {

  const teamMembers = [
    {
      name: 'Jake Orton',
      role: 'Owner/Stunt performer',
      description: 'With Jakes background in gymnastics & martial arts his aerial skills can be of great use when bringing daydreams to life. He also manages and coordinates the team.',
      image: "images/jake.png"
    },
    {
      name: "Josh Bregmen",
      role: 'Safety',
      description: 'Having opened around 150 new BASE jumping exits Josh has become a veteran in the sport of BASE when it comes to assessing jumps and possible hazards.',
      image: "images/josh.png"
    },
    {
      name: 'Ilko',
      role: 'Experienced Stunt performer',
      description: 'Ilko is an experienced stunt performer and BASE jumper. With his on-set experience and jumping knowledge he is a valuable asset to the team.',
      image: "images/josh.png"
    },
    {
      name: "Rigger",
      role: 'Rigger',
      description: 'Our expert Rigger, Years of experience',
      image: "images/josh.png"
    }
  ];


  return (
    
    <Layout>
      <div className='flex flex-col items-center justify-center mt-10'>
        <Text
            className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900 text-center border-b border-black-900"
            size="txtPlayfairDisplayRomanSemiBold23"
        >
              The Team
        </Text>
        <Text
          className="mt-2 md:text-center text-black-900 md:w-4/5 w-full text-center"
          size="txtPlayfairDisplayRomanRegular20"
        >
              Our team of experts are ready to perform and tackle the assessment for any BASE jump project you have in mind. Count on us to bring our expertise and make it happen seamlessly!
          </Text>

      </div>
      
      <div className="px-[12%] md:px-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center py-[18px] w-full items-center sm:flex sm:flex-col">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>

    </Layout>
  )
}

export default TheTeam
