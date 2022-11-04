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
    {id: 0, name: 'BenjBjar', role: 'CEO', image: 'https://media.tenor.com/ETtJihFiaOAAAAAd/one-piece-usopp.gif',
     description: 'Used to be good at League of Legends, but old age has taken over sadly'},
    {id: 1, name: 'Shwarma Queen', role: 'Bomb Planter', image: 'https://media1.giphy.com/media/U3UP4fTE6QfuoooLaC/giphy.gif?cid=790b761120405ec0a71212bc059b081f34735ab76411c7e6&rid=giphy.gif&ct=g',
     description: 'Rank #1 Bomb Planter in CS:GO'},
    {id: 2, name: 'Snoke', role: 'LinkedIn Tryhard', image: 'https://media1.giphy.com/media/hxCB1Qf11SrU4/giphy.gif?cid=ecf05e47wahmk7mdgwyed8rurap8np9tedxwueax5hhf58b5&rid=giphy.gif&ct=g',
     description: 'Spends hours on LinkedIn trying to grow his network to take over the world'},
    {id: 3, name: 'Pishva', role: 'Slimet', image: 'https://media3.giphy.com/media/Ngc1RhNgbu7LRSmCBA/giphy.gif?cid=ecf05e4710b6dd71fd20027e81c5326d88cbfdca91e56a77&rid=giphy.gif&ct=g',
     description: 'Used to be known as "Limet", but after some unfortunate events he now goes as "Slimet"'},
    {id: 4, name: 'Schultzern', role: 'Mr. Worldwide / Dressman Model', image: 'https://media.tenor.com/4dt6GlT1KBMAAAAC/jojo-jjba.gif',
     description: 'Known as most handsome man ever and forever. Can easily steal your girl'},
    {id: 5, name: 'Ruen', role: 'Muffin Enjoyer', image: 'https://media.tenor.com/Dzj2OFaZVL4AAAAC/friday.gif',
     description: 'Bad takes.'},
    {id: 6, name: 'Vladmit', role: 'Russian Mushroom Farmer', image: 'https://media.tenor.com/baphOx2zAgUAAAAC/mob-psycho.gif',
     description: 'Operates a legal mushroom farm. Can solder everything'},
    {id: 7, name: 'Titow', role: 'Spydeberg Mob Boss', image: 'https://media.tenor.com/Wg1jbWqmB8IAAAAC/nicholas-brown.gif',
     description: 'If you are not careful, he will call his boys. Ageing rapidly'},
    {id: 8, name: 'Sighaa', role: 'Smart', image: 'https://media3.giphy.com/media/3pTtbLJ7Jd0YM/giphy.gif?cid=790b7611c37c59293bb819474bc4952612e9937402e1b0bf&rid=giphy.gif&ct=g',
     description: 'Is always right and everyone knows it'},
    {id: 9, name: 'Bjørn', role: 'Philosopher', image: 'https://media0.giphy.com/media/NgsF4XElEeinS/giphy.gif?cid=ecf05e47o646noj8atafioqw9dy6t6k476jp98p7xam34igo&rid=giphy.gif&ct=g',
     description: 'Asks the questions you do not care about. Also a undisputed Taliyah prodigy'},
    {id: 10, name: 'Typhex', role: 'Jungler', image: 'https://media2.giphy.com/media/ayMW3eqvuP00o/giphy.gif?cid=ecf05e4715g1gzp1zbxi6vrdb7ozjugmiinpbzohqzhn2358&rid=giphy.gif&ct=g',
     description: 'Has been banned more then you can count. Asks questions you do not know the answer to'},
    {id: 11, name: 'Emil', role: 'C*m', image: 'https://media.tenor.com/Twu9nxt3Jb0AAAAC/hisoka-hunter-x-hunter.gif',
     description: 'C*m.'},
    {id: 12, name: 'Sir. Fred', role: 'Cartographer', image: 'https://media.tenor.com/yprFslRjh_0AAAAC/bakemonogatari-araragi.gif',
     description: 'Loves to play with maps. Is also a dark lord'},
    {id: 13, name: 'Erlend', role: 'Meh', image: 'https://media.tenor.com/XYMkH4QW_9AAAAAC/ginko-mushishi.gif',
     description: 'First of the MAGNU clones. Luck is in his DNA'},
    {id: 14, name: 'Sveflimag', role: 'Apocalypse Expert', image: 'https://media.tenor.com/XYMkH4QW_9AAAAAC/ginko-mushishi.gif',
     description: 'Second of the MAGNU clones. Hates everything unrealistic'},
]
   
const ProfileView = () => {
    return (
        <>
        {profiles.map(({id, name, role, image}) => (
             <Card className="w-96" id="profCard" key={id}>
             <CardHeader id="headerImg" floated={false} className="h-48">
               <img id={"gif" + id} src={image} alt="profile pic" />
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
                    <NavLink to={"/profile?id=" + id}>Read More</NavLink>
                </button>
             </CardFooter>
           </Card>
        ))}
      </>
    );
  }

  export default ProfileView;