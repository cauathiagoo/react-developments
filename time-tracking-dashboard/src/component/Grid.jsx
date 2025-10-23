import exercise from "../images/icon-exercise.svg";
import play from "../images/icon-play.svg";
import selfcare from "../images/icon-self-care.svg";
import social from "../images/icon-social.svg";
import study from "../images/icon-study.svg";
import work from "../images/icon-work.svg";
import { useState } from "react"
import Rectangle from "./Rectangle";
import Square from "./Square";
function Grid() {

  const [timeframe, setTimeframe] = useState("daily");

  return (
    <div className="dashboard">
      <Rectangle setTimeframe={setTimeframe} />
      <Square activity={work} className={"theme-card--work"} number={0} timeframe={timeframe} />
      <Square activity={play} className={"theme-card--play"} number={1} timeframe={timeframe} />
      <Square activity={study} className={"theme-card--study"} number={2} timeframe={timeframe} />
      <Square activity={exercise} className={"theme-card--exercise"} number={3} timeframe={timeframe} />
      <Square activity={social} className={"theme-card--social"} number={4} timeframe={timeframe} />
      <Square activity={selfcare} className={"theme-card--selfcare"} number={5} timeframe={timeframe} />
    </div>
  );
}

export default Grid;