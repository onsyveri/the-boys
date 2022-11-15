import test from '../../images/yuno-peek.png'
import Collapsible from 'react-collapsible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const MemoryTable = () => {

    return (
        <>
            <Collapsible trigger="Shwarma Queen's Pentakill" >
            <iframe title="Penta Video" width="620" height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>

            <div id="memContent">
                <h1 id="memH1">
                    Shwarma Queen's Pentakill
                </h1>
                <p id="memDesc">
                    After everyone else had gotten a penta during this new period of degen League playing, Shwarma Queen was still trying to get a penta.
                    He had almost given up, then this happened ...
                </p>
                <div id="memMembers" class="flex mb-5 -space-x-4">
                    Members present:
                    <div id="memImages"  class="flex mb-5 -space-x-4">
                        <img class="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800" src="https://media1.giphy.com/media/U3UP4fTE6QfuoooLaC/giphy.gif?cid=790b761120405ec0a71212bc059b081f34735ab76411c7e6&rid=giphy.gif&ct=g" alt="gif" />
                        <img class="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800" src="https://media.tenor.com/Dzj2OFaZVL4AAAAC/friday.gif" alt="gif" />
                        <img class="w-10 h-10 rounded-full border-2 border-indigo-300 dark:border-gray-800" src="https://media.tenor.com/Wg1jbWqmB8IAAAAC/nicholas-brown.gif" alt="gif" />
                    </div> 
                </div>
            </div>
            </Collapsible>

            <Collapsible trigger="League Despair">
            </Collapsible>
        </>
    )
}

export default MemoryTable