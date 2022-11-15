import Collapsible from 'react-collapsible';
import penta from '../../images/ole-penta.mp4'

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
                    He had almost given up, then this happened ...
                </p>
                <div id="memMembers" className="flex mb-5 -space-x-4">
                    Members present:
                    <div id="memProfiles"  className="flex mb-5 -space-x-4">
                        <img className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800" src="https://media1.giphy.com/media/U3UP4fTE6QfuoooLaC/giphy.gif?cid=790b761120405ec0a71212bc059b081f34735ab76411c7e6&rid=giphy.gif&ct=g" alt="gif" />
                        <img className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800" src="https://media.tenor.com/Dzj2OFaZVL4AAAAC/friday.gif" alt="gif" />
                        <img className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800" src="https://media.tenor.com/Wg1jbWqmB8IAAAAC/nicholas-brown.gif" alt="gif" />
                        <img className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800" src="https://media.tenor.com/nDRHIQbzGz8AAAAC/dr-stone-tsukasa.gif" alt="gif" />
                    </div> 
                </div>
            </div>
            </Collapsible>

            <Collapsible trigger="League Despair">
            </Collapsible>

            <Collapsible trigger="The Zeus Incident">
                <img id="memImage" src="https://media.tenor.com/UVcnoJugdCwAAAAd/eren-grisha.gif" alt="zeus meme" />
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
                        <img className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800" src="https://media1.giphy.com/media/U3UP4fTE6QfuoooLaC/giphy.gif?cid=790b761120405ec0a71212bc059b081f34735ab76411c7e6&rid=giphy.gif&ct=g" alt="gif" />
                        <img className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800" src="https://media.tenor.com/baphOx2zAgUAAAAC/mob-psycho.gif" alt="gif" />
                        <img className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800" src="https://media.tenor.com/Wg1jbWqmB8IAAAAC/nicholas-brown.gif" alt="gif" />
                        <img className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800" src="https://media.tenor.com/tPkh9euN9e4AAAAC/itachi-uchiha-naruto.gif" alt="gif" />
                        <img className="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800" src="https://media.tenor.com/4dt6GlT1KBMAAAAC/jojo-jjba.gif" alt="gif" />
                    </div> 
                </div>
            </div>
            </Collapsible>
        </div>
    )
}

export default MemoryTable