import Collapsible from 'react-collapsible';
import penta from '../../images/ole-penta.mp4';
import zeus from '../../images/schultz-zeus.png';
import viktor from '../../images/viktor-despair.png';
import peaky from '../../images/peaky-blinders.png';
import plan from '../../images/the-plan.png';
import { NavLink } from 'react-router-dom';

const MemoryTable = () => {

    return (
        <div id="memTable">
            <Collapsible trigger="Shwarma Queen's Pentakill" >
            <video id="memVideo" controls>
                <source src={penta} type="video/mp4" />
            </video>

            <div id="memContent">
                <h1 id="memH1">
                    Shwarma Queen's Pentakill
                </h1>
                <p id="memDesc">
                    After everyone else had gotten a penta during this new period of degen League playing, Shwarma Queen was still trying to get a penta.
                    He had almost given up, then this happened...
                </p>
                <div id="memMembers" className="flex mb-5 -space-x-4">
                    Members present:
                    <div id="memProfiles"  className="flex mb-5 -space-x-4">
                        <NavLink to={"/profile?id=1"}><img title="Shwarma Queen" className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800 hover:border-white" src="https://media1.giphy.com/media/U3UP4fTE6QfuoooLaC/giphy.gif?cid=790b761120405ec0a71212bc059b081f34735ab76411c7e6&rid=giphy.gif&ct=g" alt="gif" /> </NavLink>
                        <NavLink to={"/profile?id=5"}> <img title="Ruen" className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800 hover:border-white" src="https://media.tenor.com/Dzj2OFaZVL4AAAAC/friday.gif" alt="gif" /> </NavLink>
                        <NavLink to={"/profile?id=7"}> <img title="Titow" className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800 hover:border-white" src="https://media.tenor.com/Wg1jbWqmB8IAAAAC/nicholas-brown.gif" alt="gif" /> </NavLink>
                        <NavLink to={"/profile?id=10"}> <img title="Typhex" className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800 hover:border-white" src="https://media.tenor.com/nDRHIQbzGz8AAAAC/dr-stone-tsukasa.gif" alt="gif" /> </NavLink>
                    </div> 
                </div>
            </div>
            </Collapsible>

            <Collapsible trigger="League Despair">
            <img id="memImage" src={viktor} alt="viktor despair" />
            <div id="memContent">
                <h1 id="memH1">
                    League Despair
                </h1>
                <p id="memDesc">
                    After the League of Legends tv-show Arcane dropped, 
                    there was created a piece of art that perfectly encapsulates everything someone feels when they play just one more game of league...
                </p>
                <div id="memMembers" className="flex mb-5 -space-x-4">
                    Members present:
                    <div id="memProfiles"  className="flex mb-5 -space-x-4">
                        <NavLink to={"/profile?id=0"}> <img title="BenjBjar" className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800 hover:border-white" src="https://media.tenor.com/ETtJihFiaOAAAAAd/one-piece-usopp.gif" alt="gif" /> </NavLink>
                        <NavLink to={"/profile?id=7"}> <img title="Titow" className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800 hover:border-white" src="https://media.tenor.com/Wg1jbWqmB8IAAAAC/nicholas-brown.gif" alt="gif" /> </NavLink>
                        <NavLink to={"/profile?id=10"}> <img title="Typhex" className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800 hover:border-white" src="https://media.tenor.com/nDRHIQbzGz8AAAAC/dr-stone-tsukasa.gif" alt="gif" /> </NavLink>
                        <NavLink to={"/profile?id=4"}> <img title="Schultzern" className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800 hover:border-white" src="https://media.tenor.com/4dt6GlT1KBMAAAAC/jojo-jjba.gif" alt="gif" /> </NavLink>
                        <a className="flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-indigo-300 hover:bg-gray-600 dark:border-gray-800 hover:border-white" href="/the-boys/#/members">+13</a>
                    </div> 
                </div>
            </div>
            </Collapsible>

            <Collapsible trigger="The Zeus Incident">
                <img id="memImage" src={zeus} alt="zeus meme" />
                <div id="memContent">
                    <h1 id="memH1">
                        The Zeus Incident
                    </h1>
                    <p id="memDesc">
                        The Boys where on their way to stomp some kids in CS:GO. 
                        Schultz therefore decided it would be funny to go for a zeus kill. 
                        Little did he know this was gonna be the worst decision he would take in his entire life.
                        After Schultz lost them the round, the team crumbled and lost in a way that cant be repeated in words or text.
                    </p>
                    <div id="memMembers" className="flex mb-5 -space-x-4">
                        Members present:
                        <div id="memProfiles"  className="flex mb-5 -space-x-4">
                            <NavLink to={"/profile?id=1"}> <img title="Shwarma Queen" className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800 hover:border-white" src="https://media1.giphy.com/media/U3UP4fTE6QfuoooLaC/giphy.gif?cid=790b761120405ec0a71212bc059b081f34735ab76411c7e6&rid=giphy.gif&ct=g" alt="gif" /> </NavLink>
                            <NavLink to={"/profile?id=6"}> <img title="Vladmit" className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800 hover:border-white" src="https://media.tenor.com/baphOx2zAgUAAAAC/mob-psycho.gif" alt="gif" /> </NavLink>
                            <NavLink to={"/profile?id=7"}> <img title="Titow" className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800 hover:border-white" src="https://media.tenor.com/Wg1jbWqmB8IAAAAC/nicholas-brown.gif" alt="gif" /> </NavLink>
                            <NavLink to={"/profile?id=3"}> <img title="Pishva" className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800 hover:border-white" src="https://media.tenor.com/tPkh9euN9e4AAAAC/itachi-uchiha-naruto.gif" alt="gif" /> </NavLink>
                            <NavLink to={"/profile?id=4"}> <img title="Schultzern" className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800 hover:border-white" src="https://media.tenor.com/4dt6GlT1KBMAAAAC/jojo-jjba.gif" alt="gif" /> </NavLink>
                        </div> 
                    </div>
                </div>
            </Collapsible>

            <Collapsible trigger="Peaky Fookin Blinders">
            <img id="memImage" src={peaky} alt="peaky blinders" />
            <div id="memContent">
                <h1 id="memH1">
                    Peaky Fookin Blinders
                </h1>
                <p id="memDesc">
                    After a tragic ending in the best class at RA, five of the boys decided to form the Peaky Fookin Blinders.
                </p>
                <div id="memMembers" className="flex mb-5 -space-x-4">
                    Members present:
                    <div id="memProfiles"  className="flex mb-5 -space-x-4">
                        <NavLink to={"/profile?id=1"}> <img title="Shwarma Queen" className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800 hover:border-white" src="https://media1.giphy.com/media/U3UP4fTE6QfuoooLaC/giphy.gif?cid=790b761120405ec0a71212bc059b081f34735ab76411c7e6&rid=giphy.gif&ct=g" alt="gif" /> </NavLink>
                        <NavLink to={"/profile?id=2"}> <img title="Snoke" className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800 hover:border-white" src="https://media2.giphy.com/media/ERc5g8ThElMQM/giphy.gif?cid=ecf05e47ylsvgujyhonswqyxljezl0fm8w12tcl7waexymr1&rid=giphy.gif&ct=g" alt="gif" /> </NavLink>
                        <NavLink to={"/profile?id=16"}> <img title="Dr. Jake" className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800 hover:border-white" src="https://media2.giphy.com/media/H55l0bcEOOqWqlrNbt/giphy.gif?cid=ecf05e47tf3uslrjezjj4a5n94l8wh2j2lm4ngvrxdfsw697&rid=giphy.gif&ct=g" alt="gif" /> </NavLink>
                        <NavLink to={"/profile?id=4"}> <img title="Schultzern" className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800 hover:border-white" src="https://media.tenor.com/4dt6GlT1KBMAAAAC/jojo-jjba.gif" alt="gif" /> </NavLink>
                        <p className="flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-indigo-300 dark:border-gray-800 hover:border-white">+1</p>
                    </div> 
                </div>
            </div>
            </Collapsible>

            <Collapsible trigger="The Plan">
            <img id="memImage" src={plan} alt="the plan meme" />
            <div id="memContent">
                <h1 id="memH1">
                    The Plan
                </h1>
                <p id="memDesc">
                    Ole revealed to the boys that he had a plan that would make all his wishes come true. Doubters begone, believers are welcome. Just TRUST. 
                </p>
                <div id="memMembers" className="flex mb-5 -space-x-4">
                    Members present:
                    <div id="memProfiles"  className="flex mb-5 -space-x-4">
                        <NavLink to={"/profile?id=1"}><img title="Shwarma Queen" className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800 hover:border-white" src="https://media1.giphy.com/media/U3UP4fTE6QfuoooLaC/giphy.gif?cid=790b761120405ec0a71212bc059b081f34735ab76411c7e6&rid=giphy.gif&ct=g" alt="gif" /></NavLink>
                    </div> 
                </div>
            </div>
            </Collapsible>
        </div>
    )
}

export default MemoryTable