/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Divider } from '@mui/material';
import React from 'react';
import { IoShare } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Card = ({props}) => {
    const {
        id,
         thumbnail,
        title,
        description,
        tech,
        link,
        source

     } = props;
        console.log(props)
    return (
        <div className="card rounded-lg w-full flex flex-col justify-between border p-4">
            <Link to={`/project/${id}`} className="flex justify-end">
           <div className="  object-cover bg-cover bg-center">
           <img src={thumbnail} alt={title} className="card-image " />
           </div>
         </Link>
            <div className="flex flex-col justify-between">
            <div className="card-content w-full p-2">
                <h2 className="card-title text-xl font-bold capitalize">{title}</h2>
                <p className="card-description capitalize">{description}</p>
                <p>
                    <span className="font-bold">Tech:</span> {tech.map((item, i) => (
                        <span key={i}>{item}{i !== tech.length - 1 && ', '}</span>
                    ))}
                </p>
            </div>
            <div className="flex w-full justify-around p-2 ">
                {
                    [{
                        name: 'Demo',
                        link: link
                    },
                    {
                        name: 'Learn More',
                        link: "/project/" + id
                    },
                    {
                        name: 'Source Code',
                        link: source
                    }].map((item, i) => (
                       <Link key={i} to={item.link}  className=''> 
                       <div key={i} className='flex items-center  justify-between gap-4 w-full'>
                        <button className='p-2 text-xs bg-gray-100 w-full hover:bg-gray-200' >{item.name}</button>
                        {i !== 2 && <Divider orientation='vertical' />}
                       </div>
                       </Link>
                    ))
                }
            </div>
            </div>
        </div>
    );
};

export default Card