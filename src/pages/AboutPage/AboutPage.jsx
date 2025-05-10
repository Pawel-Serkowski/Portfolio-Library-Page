import Button from "../../components/button/Button";

import "./AboutPage.css";

const AboutPage = () => {
    return (
        <section id="about-page">
            <div className="s50-50">
                <div className="wrapper">
                    <h2>The newest reviews of books</h2>
                    <p>
                        In our library we share as quick as possible reviews of new books which are on stage. We have experienced experts
                        which reads, assess and creates a reliable rating of our books, so you can have confidence that you read book and
                        you will be not disappointed.
                    </p>
                    <Button text="Check open hours" href="#contact-page" />
                </div>
                <div className="background aboutPage" />
                <div className="black-wall" />
            </div>
            <div className="s50-50">
                <div className="wrapper">
                    <h1>About us?</h1>
                    <article>
                        <h2>The meetings with famous authors</h2>
                        <p>
                            Every Friday we have meetings with famous authors which can inspire you to try new books or you will have
                            occasion to ask a question about author life, process of writing books or something else will pop into your
                            head.
                        </p>
                    </article>

                    <img src="/images/AboutImage1.jpg" alt="Sombody holding a book" />
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
