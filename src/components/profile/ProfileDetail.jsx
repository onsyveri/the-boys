import { useSearchParams, useNavigate } from "react-router-dom";
import { profiles } from "./ProfileView";

//console.log(profiles[0].name);


const ProfileDetail = () => {

    const [searchParams] = useSearchParams();
    let urlId = searchParams.get("id");
    const history = useNavigate();

    return (
            <main id="profMain">
                <button onClick={() => history(-1)} id="backBtn" type="button" className="text-white bg-indigo-400 hover:bg-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-200 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                </button>
                <img className="h-60 w-60 rounded-full" id="detailPic" src={profiles[urlId].image} alt="Profile Pic" />
                <h1 id="detailH1">{profiles[urlId].name}</h1>
                <p id="detailRole">{profiles[urlId].role}</p>
                <p id="detailDesc">{profiles[urlId].description}</p>
            </main>
    )
}

export default ProfileDetail;