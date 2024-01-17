import { Col, Row } from "react-bootstrap";
import { Rainbow } from "react-bootstrap-icons";
const HourlyForecast = (props) => {
    return (
        <Row className="mb-5">
            <h3 className="text-white">Hourly Forecast</h3>
            {props.weatherData.map((singleForecast, index) => {
                return (
                    <Col key={index + 1}>
                        <div className="d-flex flex-column align-items-center border rounded-4">
                            <img src={`https://openweathermap.org/img/wn/${singleForecast.weather[0].icon}@2x.png`} />
                            <p className="text-white">{parseInt(singleForecast.main.temp - 273.15) + "°C"}</p>
                            <p className="text-white">{props.getDate(singleForecast.dt, props.city.timezone)}</p>
                        </div>
                    </Col>
                );
            })}
        </Row>
    );
};
export default HourlyForecast;
