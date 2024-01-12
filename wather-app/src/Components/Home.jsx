import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SearchForm from "./SearchForm";
import { useEffect, useState } from "react";
import WeatherShown from "./WeatherShown";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = () => {
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();

    const getLat = (lat) => {
        setLat(lat);
    };

    const getLon = (lon) => {
        setLon(lon);
    };

    useEffect(() => {
        console.log("Home ", lat);
        console.log("Home ", lon);
    }, [lat, lon]);
    return (
        <BrowserRouter>
            <Container className="weather-bg  py-4" style={{ maxWidth: "768px" }}>
                <SearchForm getLat={getLat} getLon={getLon} />
                <Routes>
                    <Route path="/" element={<></>} />
                    <Route path="/:name" element={<WeatherShown lat={lat} lon={lon} />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};
export default Home;
