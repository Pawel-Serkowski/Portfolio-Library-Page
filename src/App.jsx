import Navbar from "./components/navbar/Navbar";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
    return (
        <>
            <Navbar />
            <MainPage />
            <AboutPage />
            <ContactPage />
        </>
    );
}

export default App;
