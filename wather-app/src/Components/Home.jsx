import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SearchForm from "./SearchForm";
import { useEffect, useState } from "react";
import WeatherShown from "./WeatherShown";

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
        <Container className="weather-bg  py-4" style={{ maxWidth: "768px" }}>
            <SearchForm getLat={getLat} getLon={getLon} />
            <WeatherShown lat={lat} lon={lon} />
        </Container>
    );
};
export default Home;
