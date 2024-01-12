import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

const WeatherShown = (props) => {
    const APIkey = "cbd447cc6fdb408a2bb30c2732042c0b";
    const URLWeather = `http://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&appid=${APIkey}`;
    const [data, setData] = useState(null);
    //const [weatherIcon, setWeatherIcon] = useState(clear_icon);

    const fetchCityWeather = async () => {
        try {
            let response = await fetch(URLWeather);
            if (response.ok) {
                let cityObj = await response.json();
                console.log(cityObj);
                setData(cityObj);
                /* if (cityObj.list[0].weather[0].icon === "01d" || cityObj.list[0].weather[0].icon === "01n") {
                    setWeatherIcon(clear_icon);
                } else if (cityObj.list[0].weather[0].icon === "02d" || cityObj.list[0].weather[0].icon === "02n") {
                    setWeatherIcon(cloud_icon);
                } else if (cityObj.list[0].weather[0].icon === "03d" || cityObj.list[0].weather[0].icon === "03n") {
                    setWeatherIcon(drizzle_icon);
                } else if (cityObj.list[0].weather[0].icon === "04d" || cityObj.list[0].weather[0].icon === "04n") {
                    setWeatherIcon(drizzle_icon);
                } else if (cityObj.list[0].weather[0].icon === "09d" || cityObj.list[0].weather[0].icon === "09n") {
                    setWeatherIcon(rain_icon);
                } else if (cityObj.list[0].weather[0].icon === "10d" || cityObj.list[0].weather[0].icon === "10n") {
                    setWeatherIcon(rain_icon);
                } else if (cityObj.list[0].weather[0].icon === "13d" || cityObj.list[0].weather[0].icon === "13n") {
                    setWeatherIcon(snow_icon);
                } else {
                    setWeatherIcon(clear_icon);
                } */
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (props.lat && props.lon !== undefined) {
            fetchCityWeather();
            console.log("quante volte avviene la fetch?");
        }
    }, [props.lat, props.lon]);

    return (
        <main>
            {data ? (
                <Container>
                    <Row className="row-cols-1 row-cols-lg-2 justify-content-center">
                        <Col>
                            <div className="d-flex flex-column align-items-center mt-5 pt-5">
                                <h1 className="text-white display-1 fw-normal">{data.city.name}</h1>
                                <div className="d-flex align-items-center w-75 justify-content-between px-5 mt-5 pt-3 mb-5">
                                    <h3 className="text-white display-3 fw-normal">
                                        {parseInt(data.list[0].main.temp - 273.15) + "°C"}{" "}
                                    </h3>
                                    <div className="vertical-line "></div>
                                    <img
                                        className="weatherIcon"
                                        src={`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png `}
                                    />
                                </div>
                                <div className="d-flex justify-content-between px-5 w-75 mt-5 pt-5">
                                    <div className="d-flex align-items-center">
                                        <img src={wind_icon} />
                                        <p className="text-white mb-0 ms-2">{data.list[0].wind.speed + "Km/h"}</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <img src={humidity_icon} />
                                        <p className="text-white mb-0 ms-2">{data.list[0].main.humidity + "%"}</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            ) : (
                ""
            )}

            {/* <h1>{cityObj.name}</h1> */}
            {/* <img src={}/> */}
        </main>
    );
};
export default WeatherShown;

/* https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png */
/* https://openweathermap.org/img/wn/10d@2x.png */
