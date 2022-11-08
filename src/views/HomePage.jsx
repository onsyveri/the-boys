import pepPunch from '../images/pngegg.png'

const HomePage = () => {
    return (
        <div id="homeContent">
            <h1 id="homeH1">IMAGINE A PLACE...</h1>
            <p id="homeParag">
                ...where you can belong to a school club, a gaming group, or a worldwide art community. 
                Where just you and a handful of friends can spend time together. 
                A place that makes it easy to talk every day and hang out more often.
            </p>
            <div id="home">
                <img id="homeImg" src={pepPunch} alt="home banner" />
            </div>
        </div>
    )
}

export default HomePage