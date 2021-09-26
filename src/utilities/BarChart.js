import React from "react";
import { Bar } from "react-chartjs-2";
import "../styles/App.css";

const BarChart = ({ barTitle, barValue }) => {
  const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const dateArray = barValue.map((e) => new Date(e.published_at).getMonth());
  console.log(dateArray, array);

  dateArray.forEach((e) => {
    console.log(e, array[e]);
    array[e] = array[e] + 1;
    console.log(e, array[e]);
  });
  console.log("newArray", array);
  const state = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Posts",
        backgroundColor: "rgba(190,120,192,1)",
        borderColor: "rgba(0,0,0,1)",
        fontColor: "black",
        borderWidth: 1,
        data: array,
      },
    ],
  };
  return (
    <div
      className="card h-480 bgCard m-2 bigCard"
      style={{ width: "auto", minWidth: "250px" }}
    >
      <div className="card-body ">
        <h5 className="card-title text-warning text-center">
          <i className="fal fa-chart-bar"></i>&nbsp;&nbsp;{barTitle}
        </h5>
        <div className="card-text bg-light border rounded-2 mt-5 py-3 px-1 mb-3">
          <Bar
            data={state}
            options={{
              legend: {
                display: true,
                position: "top",
              },
            }}
          />
        </div>
        <div className="text-center">Number of Posts per months</div>
      </div>
    </div>
  );
};
export default BarChart;
