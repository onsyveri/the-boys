import { useSearchParams } from "react-router-dom";
import { profiles } from "./ProfileView";

//console.log(profiles[0].name);


const ProfileDetail = () => {

    const [searchParams] = useSearchParams();
    let urlId = searchParams.get("id");

    return (
            <main id="profMain">
                <img className="h-60 w-60 rounded-full" id="detailPic" src={profiles[urlId].image} alt="Profile Pic" />
                <h1 id="detailH1">{profiles[urlId].name}</h1>
                <p id="detailRole">{profiles[urlId].role}</p>
                <p id="detailDesc">{profiles[urlId].description}</p>
            </main>
    )
}

export default ProfileDetail;