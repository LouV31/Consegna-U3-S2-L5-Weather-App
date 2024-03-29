import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Search as SearchIcon } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
const SearchForm = (props) => {
    const APIkey = "cbd447cc6fdb408a2bb30c2732042c0b";

    const [city, setCity] = useState("");

    const navigate = useNavigate();
    const URLLatLon = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIkey}`;

    const fetchLocation = async () => {
        try {
            let response = await fetch(URLLatLon);
            if (response.ok) {
                let locationObj = await response.json();
                console.log(locationObj[0]);
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
            <Row>
                <Col className="col-10">
                    <Form.Group className="" controlId="formBasicEmail">
                        <Form.Control
                            type="text"
                            placeholder="New York, London, Milan"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="transparent"
                        />
                    </Form.Group>
                </Col>
                <Col className="col-2  ">
                    <div className="d-flex justify-content-end">
                        <Button
                            variant="transparent"
                            className="btn btn-transparent border-white rounded-circle d-flex align-items-center p-0 justify-content-center"
                            style={{ width: "37px", height: "37px" }}
                            onClick={handleSubmint}
                        >
                            <SearchIcon className="text-white" />
                        </Button>
                    </div>
                </Col>
            </Row>
        </header>
    );
};
export default SearchForm;
