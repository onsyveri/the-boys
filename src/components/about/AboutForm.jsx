import pepeCalm from '../../images/pepe-calm.png'
import pepeSlav from '../../images/pepe-slav.png'

const AboutForm = () => {
    return (
        <>
            <section id="sect1">
                <h1>About Us</h1>
                <p>Here you can read more about what type of people we are.</p>
            </section>

            <section id="sect2">

                <article id="art2">
                    <div>
                        <h1>The Party Boys</h1>
                        <p>
                            These people love to party and drink. They keep asking themselves why they are still in Discord. For some reason they always comes back.
                        </p>
                    </div>
                    <img id="pepeSlav" src={pepeSlav} alt="Pepe-Slav" />
                </article>

                <article id="art1">
                    <img id="pepeCalm" src={pepeCalm} alt="Pepe-Calm" />
                    <div>
                        <h1>The Tilters</h1>
                        <p>
                            These guys have a short fuse. With their passion for gaming and high competitive instinct they are not far away from smashing their desk, or even worse...
                        </p>
                    </div>
                </article>

            </section>
        </>
    )
}

export default AboutForm;