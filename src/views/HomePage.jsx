import banner from "../images/yuno-peek.png"

const HomePage = () => {
    return (
        <>
            <h1 id="homeH1">TILT</h1>
            <div id="home">
                <img id="homeImg3" src="https://media4.giphy.com/media/YbHnru6KfNiUGeNeCf/giphy.gif?cid=ecf05e47d7d7k0y1ia2cogz7vrm2jd4w3m1u6el2g4vw4j9l&rid=giphy.gif&ct=g" alt="home gif" />
                <img id="homeImg" src={banner} alt="home gif" />
                <img id="homeImg2" src="https://media4.giphy.com/media/dxld1UBIiGuoh31Fus/giphy.gif?cid=ecf05e47r5hkit7nt1sydby8orn6idg07092ky07kb3mtt4d&rid=giphy.gif&ct=g" alt="home gif" />
            </div>
        </>
    )
}

export default HomePage