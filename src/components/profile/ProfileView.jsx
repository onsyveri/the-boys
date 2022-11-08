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
    {id: 0, name: 'BenjBjar', role: 'CEO / King', image: 'https://media.tenor.com/ETtJihFiaOAAAAAd/one-piece-usopp.gif',
     description: 'The Creator of Tilt. Trying to find the One Piece'},
    {id: 1, name: 'Shwarma Queen', role: 'Bomb Planter', image: 'https://media1.giphy.com/media/U3UP4fTE6QfuoooLaC/giphy.gif?cid=790b761120405ec0a71212bc059b081f34735ab76411c7e6&rid=giphy.gif&ct=g',
     description: 'Rank #1 Bomb Planter in CS:GO. Has a weird habit of sniffing stuff'},
    {id: 2, name: 'Snoke', role: 'LinkedIn Tryhard', image: 'https://media2.giphy.com/media/ERc5g8ThElMQM/giphy.gif?cid=ecf05e47ylsvgujyhonswqyxljezl0fm8w12tcl7waexymr1&rid=giphy.gif&ct=g',
     description: 'Spends hours on LinkedIn trying to grow his network to take over the world'},
    {id: 3, name: 'Pishva', role: 'Slimet', image: 'https://media.tenor.com/tPkh9euN9e4AAAAC/itachi-uchiha-naruto.gif',
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
     description: 'Is always right, and everyone knows it'},
    {id: 9, name: 'Bjørn', role: 'Philosopher', image: 'https://media0.giphy.com/media/NgsF4XElEeinS/giphy.gif?cid=ecf05e47o646noj8atafioqw9dy6t6k476jp98p7xam34igo&rid=giphy.gif&ct=g',
     description: 'Asks the questions you don\'t care about. Also an undisputed Taliyah prodigy'},
    {id: 10, name: 'Typhex', role: 'Jungler', image: 'https://media.tenor.com/nDRHIQbzGz8AAAAC/dr-stone-tsukasa.gif',
     description: 'Has been banned more then you can count. Asks questions you don\'t know the answer to'},
    {id: 11, name: 'Emil', role: 'Cum', image: 'https://media.tenor.com/Twu9nxt3Jb0AAAAC/hisoka-hunter-x-hunter.gif',
     description: 'Cum'},
    {id: 12, name: 'Sir. Fred', role: 'Cartographer', image: 'https://media.tenor.com/yprFslRjh_0AAAAC/bakemonogatari-araragi.gif',
     description: 'Loves to play with maps. Is also a dark lord'},
    {id: 13, name: 'Erlend', role: 'Meh', image: 'https://media.tenor.com/XYMkH4QW_9AAAAAC/ginko-mushishi.gif',
     description: 'First of the MAGNU clones. Luck is in his DNA'},
    {id: 14, name: 'Sveinung', role: 'Apocalypse Expert', image: 'https://media.tenor.com/XYMkH4QW_9AAAAAC/ginko-mushishi.gif',
     description: 'Second of the MAGNU clones. Hates everything unrealistic'},
     {id: 15, name: 'Oskarsen', role: 'Hunter', image: 'https://media.tenor.com/TI9Skt7G3dIAAAAC/lupin-the-third-lupin-iii.gif',
     description: 'Will shoot your pet if it looks like an ugly fox. Nice guy'},
    {id: 16, name: 'Dr. Jake', role: 'Sussy Doctor', image: 'https://media2.giphy.com/media/H55l0bcEOOqWqlrNbt/giphy.gif?cid=ecf05e47tf3uslrjezjj4a5n94l8wh2j2lm4ngvrxdfsw697&rid=giphy.gif&ct=g',
     description: 'Seems like a nice guy, but has been spotted crawling into vents before. Kinda sus'},
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