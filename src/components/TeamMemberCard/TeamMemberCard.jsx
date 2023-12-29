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
        margin: "5px"
      };

      const imageStyle = {
        marginBottom: '15px',
        marginTop: '5px',
        flex: '0 0 auto',
      };
    
      return (
        <div style={cardStyle} className='flex flex-col md:pb-[30%]'>
            <Img
                className="h-[80%]"
                style={imageStyle}
                src={image}
                alt="motobase"
            />
            <div className='md:ml-[10px]'>
                <h2 className="text-2xl font-bold text-black-900 text-left">{name}</h2>
                <p className="text-lg text-black-900 text-left">{role}</p>
                <p className="mt-2 text-black-900 text-left text-sm">{description}</p>
            </div>
        </div>
      );
}

export default TeamMemberCard
