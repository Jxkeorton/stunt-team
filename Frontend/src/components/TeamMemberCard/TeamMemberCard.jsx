import React from 'react'
import { Img } from 'components';

const TeamMemberCard = ({ name, role, description, image }) => {
    const cardStyle = {
        color: '#fff',
        textAlign: 'center',
        height: '80%', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      };

      const imageStyle = {
        marginBottom: '15px',
        marginTop: '5px',
        flex: '0 0 auto',
        objectFit: 'cover', // Preserve aspect ratio by covering the container
        
      };
    
      return (
        <div style={cardStyle} className='flex flex-col md:pb-[30%] sm:pb-[5%] md:m-[5px]'>
            <Img
                className="mx-5"
                style={imageStyle}
                src={image}
                alt="motobase"
            />
            <div className='mx-5'>
                <h2 className="text-2xl font-bold sm:text-lg text-black-900 text-left">{name}</h2>
                <p className="text-lg sm:text-sm text-black-900 text-left">{role}</p>
                <p className="mt-2 text-black-900 text-left text-sm sm:text-sm">{description}</p>
            </div>
        </div>
      );
}

export default TeamMemberCard
