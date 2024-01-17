import { Row, Col } from "react-bootstrap";

const DailyForecast = (props) => {
    const getNameOfTheDay = (date) => {
        const day = new Date(date);
        const days = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
        const indexOfTheDay = day.getDay();
        const nameOfTheDay = days[indexOfTheDay];
        return nameOfTheDay;
    };
    return (
        <Row>
            <h3 className="text-white">Weekly Forecast</h3>
            {props.weatherData !== null &&
                props.weatherData.map((singleForecast, index) => {
                    return (
                        <Col key={index}>
                            <div className="d-flex flex-column align-items-center border rounded-4">
                                <img
                                    src={`https://openweathermap.org/img/wn/${singleForecast.weather[0].icon}@2x.png`}
                                />
                                <p className="text-white">{parseInt(singleForecast.main.temp - 273.15) + "°C"}</p>
                                <p className="text-white">{getNameOfTheDay(singleForecast.dt_txt)}</p>
                            </div>
                        </Col>
                    );
                })}
        </Row>
    );
};
export default DailyForecast;
