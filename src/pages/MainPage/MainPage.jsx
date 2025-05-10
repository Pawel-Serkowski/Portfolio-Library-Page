import Button from "../../components/button/Button";
import "./MainPage.css";

const MainPage = () => {
    return (
        <section id="main-page">
            <div className="main-page-shape">
                <div className="page-content">
                    <h1>
                        Discover magic of reading with <br /> In Another Bookland library
                    </h1>
                    <p>
                        In our library you can borrow, read and discover new books. Do you have any ideas what you want read this time? We
                        specialise in fantasy, sci-fi and adventure books which will take you to different universe. We made you curious?
                    </p>
                    <Button text="Read more about us" href="#" />
                </div>
            </div>
            <div className="s50-50">{/* image added in css */}</div>
        </section>
    );
};

export default MainPage;
