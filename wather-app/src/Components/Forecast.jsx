import { useState } from "react";
import { Col, Row } from "react-bootstrap";

const Forecast = (props) => {
    const hourlyForecastsToDisplay = props.weatherData.slice(0, 5);
    return (
        <>
            <h3 className="text-white">{props.title}</h3>
            <Row className="row-cols-5">
                {hourlyForecastsToDisplay.map((singleForecast) => {
                    console.log(singleForecast);
                    return (
                        <Col>
                            <div className="d-flex flex-column align-items-center border rounded-4">
                                <img
                                    src={`https://openweathermap.org/img/wn/${singleForecast.weather[0].icon}@2x.png `}
                                />
                                <p className="text-white">{parseInt(singleForecast.main.temp - 273.15) + "°C"}</p>
                                <p className="text-white">
                                    {singleForecast.dt_txt.split(" ")[1].split(":").slice(0, 2).join(":")}
                                </p>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};

export default Forecast;
