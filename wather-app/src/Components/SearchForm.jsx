import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Search as SearchIcon } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
const SearchForm = (props) => {
    const APIkey = "cbd447cc6fdb408a2bb30c2732042c0b";

    const [city, setCity] = useState("");
    const [location, setLocations] = useState(null);
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();
    const navigate = useNavigate();
    const URLLatLon = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIkey}`;

    const fetchLocation = async () => {
        try {
            let response = await fetch(URLLatLon);
            if (response.ok) {
                let locationObj = await response.json();
                console.log(locationObj[0]);
                setLocations(locationObj[0]);
                setLat(locationObj[0].lat);
                setLon(locationObj[0].lon);
                props.getLat(locationObj[0].lat);
                props.getLon(locationObj[0].lon);
                navigate(`/${locationObj[0].name}`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmint = (e) => {
        e.preventDefault();
        fetchLocation();
    };

    return (
        <header className="mb-5">
            <Row sm={12}>
                <Col>
                    <div className="d-flex justify-content-between ">
                        <Form.Group className=" w-75 " controlId="formBasicEmail">
                            <Form.Control
                                type="text"
                                placeholder="New York, London, Milan"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </Form.Group>
                        <Button
                            className="btn btn-transparent ms-5 rounded-circle d-flex justify-content-center align-items-center"
                            onClick={handleSubmint}
                        >
                            <SearchIcon />
                        </Button>
                    </div>
                </Col>
            </Row>
        </header>
    );
};
export default SearchForm;
