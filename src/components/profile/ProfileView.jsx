import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';

export const profiles = [
    {id: 0, name: 'BenjBJar', role: 'CEO', image: 'https://media.tenor.com/6EUQjvG-IrQAAAAC/ganon-ganondorf.gif',
     description: 'Used to be good at League of Legends, but old age has taken over sadly'},
    {id: 1, name: 'Shwarma Queen', role: 'Bomb planter', image: 'https://media1.giphy.com/media/U3UP4fTE6QfuoooLaC/giphy.gif?cid=790b761120405ec0a71212bc059b081f34735ab76411c7e6&rid=giphy.gif&ct=g',
     description: 'Rank #1 Bomb Planter in CS:GO'},
    {id: 2, name: 'Snoke', role: 'LinkedIn tryhard', image: 'https://media1.giphy.com/media/hxCB1Qf11SrU4/giphy.gif?cid=ecf05e47wahmk7mdgwyed8rurap8np9tedxwueax5hhf58b5&rid=giphy.gif&ct=g',
     description: 'Spends hours on LinkedIn trying to grow his network to take over the world'},
    {id: 3, name: 'Pishva', role: 'Slimet', image: 'https://media3.giphy.com/media/Ngc1RhNgbu7LRSmCBA/giphy.gif?cid=ecf05e4710b6dd71fd20027e81c5326d88cbfdca91e56a77&rid=giphy.gif&ct=g',
     description: 'Used to be known as "Limet", but after some unfortunate events he now goes as "Slimet"'},
]
   
const ProfileView = () => {
    return (
        <>
        {profiles.map(({id, name, role, image}) => (
             <Card className="w-96" id="profCard" key={id}>
             <CardHeader floated={false} className="h-48">
               <img src={image} alt="profile pic" />
             </CardHeader>
             <CardBody className="text-center">
               <Typography variant="h4" color="white" className="mb-2">
                 {name}
               </Typography>
               <Typography id="profRole" className="font-medium" textGradient>
                {role}
               </Typography>
             </CardBody>
             <CardFooter className="flex justify-center gap-7 pt-2">
                <button id="readBtn" type="button" className="text-white bg-indigo-400 hover:bg-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-200 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                    <NavLink to={"/the-boys/profile?id=" + id}>Read More</NavLink>
                </button>
             </CardFooter>
           </Card>
        ))}
      </>
    );
  }

  export default ProfileView;