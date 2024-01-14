import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { format } from "date-fns-tz";

const Forecast = (props) => {
    const hourlyForecastsToDisplay = props.weatherData.list.slice(0, 5);
    const getDate = (dt, timezone) => {
        const utc_seconds = dt + timezone;
        const utc_milliseconds = utc_seconds * 1000;
        const local_date = new Date(utc_milliseconds);
        const formattedTime = format(local_date, "HH:mm", { timeZone: "UTC" });
        return formattedTime;
    };
    return (
        <>
            <h3 className="text-white">{props.title}</h3>
            <Row className="row-cols-5">
                {hourlyForecastsToDisplay.map((singleForecast, index) => {
                    console.log(singleForecast);
                    return (
                        <Col key={index + 1}>
                            <div className="d-flex flex-column align-items-center border rounded-4">
                                <img
                                    src={`https://openweathermap.org/img/wn/${singleForecast.weather[0].icon}@2x.png `}
                                />
                                <p className="text-white">{parseInt(singleForecast.main.temp - 273.15) + "°C"}</p>
                                <p className="text-white">
                                    {console.log(
                                        "myOBJ:",
                                        hourlyForecastsToDisplay,
                                        "dt: ",
                                        singleForecast.dt,
                                        "timezone: ",
                                        props.weatherData.city.timezone
                                    )}
                                    {getDate(singleForecast.dt, props.weatherData.city.timezone)}
                                    {/*  {singleForecast.dt_txt.split(" ")[1].split(":").slice(0, 2).join(":")} */}
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
