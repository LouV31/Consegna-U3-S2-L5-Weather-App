import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { format } from "date-fns-tz";
import { getDay } from "date-fns";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";

const Forecast = (props) => {
    const [filteredDay, setFilteredDay] = useState(null);
    const hourlyForecastsToDisplay = props.weatherData.list.slice(0, 5);
    const getDate = (dt, timezone) => {
        const utc_seconds = dt + timezone;
        const utc_milliseconds = utc_seconds * 1000;
        const local_date = new Date(utc_milliseconds);
        const formattedTime = format(local_date, "HH:mm", { timeZone: "UTC" });
        return formattedTime;
    };

    const customDate = () => {
        let daysArr = [];
        let daysArrNumber = [];
        const toDay = new Date().getDate();
        props.weatherData.list.forEach((daysInterval) => {
            console.log("DAY: ", daysInterval);
            const daysNumber = daysInterval.dt_txt.split(" ")[0].split("-")[2];
            const h12 = daysInterval.dt_txt.split(" ")[1].split(":")[0];
            console.log("NEXT DAY: ", daysNumber);

            if (!daysArrNumber.includes(daysNumber) && h12 == "12") {
                daysArr.push(daysInterval);
                daysArrNumber.push(daysNumber);
            }
        });

        setFilteredDay(daysArr);
        console.log("DAYSARR", daysArr);
    };

    useEffect(() => {
        customDate();
    }, [props.weatherData]);

    return (
        <>
            <HourlyForecast weatherData={hourlyForecastsToDisplay} getDate={getDate} city={props.weatherData.city} />
            <DailyForecast weatherData={filteredDay} getDate={getDate} city={props.weatherData.city} />
        </>
    );
};

export default Forecast;
