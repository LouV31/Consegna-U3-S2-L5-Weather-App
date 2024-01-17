import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";
import Forecast from "./Forecast";

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
        <main className="pt-5">
            {data ? (
                <>
                    <Row className="row-cols-1 justify-content-center gy-5 mb-5">
                        <Col>
                            <div>
                                <h1 className="text-white display-6 fw-normal text-center">{data.city.name}</h1>
                            </div>
                        </Col>
                        <Col className="col-4 px-3 ">
                            <div className="d-flex justify-content-between pb-2 border-bottom border-white">
                                <h3 className="text-white display-5 fw-normal mb-0">
                                    {parseInt(data.list[0].main.temp - 273.15) + "°C"}
                                </h3>

                                <img
                                    className="weatherIcon"
                                    src={`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png `}
                                />
                            </div>
                            <Row className="pt-4">
                                <Col className="col-6 border-end border-white">
                                    <div className="d-flex align-items-center">
                                        <img src={wind_icon} style={{ width: "25px" }} />
                                        <span className="text-white ms-2">
                                            {parseInt(data.list[0].wind.speed) + "Km/h"}
                                        </span>
                                    </div>
                                </Col>
                                <Col className="col-6">
                                    <div className="d-flex align-items-center">
                                        <img src={humidity_icon} style={{ width: "25px" }} />
                                        <span className="text-white ms-2">{data.list[0].main.humidity + "%"}</span>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Forecast title="Hourly forecast" weatherData={data} />
                </>
            ) : (
                ""
            )}
        </main>
    );
};
export default WeatherShown;
