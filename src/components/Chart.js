import React, { useState, useEffect } from "react";
import { CanvasJSChart } from "canvasjs-react-charts";
import { getDailyChartForSymbol } from "../ApiConnector";

// const initialStockData = [
//   [
//     "2018-03-27",
//     304.0,
//     304.27,
//     277.18,
//     279.18,
//     13696168.0,
//     0.0,
//     1.0,
//     304.0,
//     304.27,
//     277.18,
//     279.18,
//     13696168.0,
//   ],
//   [
//     "2018-03-26",
//     307.34,
//     307.59,
//     291.36,
//     304.18,
//     8324639.0,
//     0.0,
//     1.0,
//     307.34,
//     307.59,
//     291.36,
//     304.18,
//     8324639.0,
//   ],
//   [
//     "2018-03-23",
//     311.25,
//     311.61,
//     300.45,
//     301.54,
//     6600538.0,
//     0.0,
//     1.0,
//     311.25,
//     311.61,
//     300.45,
//     301.54,
//     6600538.0,
//   ],
//   [
//     "2018-03-22",
//     313.89,
//     318.82,
//     308.18,
//     309.1,
//     4914307.0,
//     0.0,
//     1.0,
//     313.89,
//     318.82,
//     308.18,
//     309.1,
//     4914307.0,
//   ],
//   [
//     "2018-03-21",
//     310.25,
//     322.44,
//     310.19,
//     316.53,
//     5927881.0,
//     0.0,
//     1.0,
//     310.25,
//     322.44,
//     310.19,
//     316.53,
//     5927881.0,
//   ],
//   [
//     "2018-03-20",
//     314.87,
//     316.25,
//     308.76,
//     310.55,
//     4726182.0,
//     0.0,
//     1.0,
//     314.87,
//     316.25,
//     308.76,
//     310.55,
//     4726182.0,
//   ],
//   [
//     "2018-03-19",
//     316.5,
//     320.75,
//     309.67,
//     313.56,
//     7440766.0,
//     0.0,
//     1.0,
//     316.5,
//     320.75,
//     309.67,
//     313.56,
//     7440766.0,
//   ],
//   [
//     "2018-03-16",
//     325.96,
//     327.4,
//     319.07,
//     321.35,
//     6058612.0,
//     0.0,
//     1.0,
//     325.96,
//     327.4,
//     319.07,
//     321.35,
//     6058612.0,
//   ],
//   [
//     "2018-03-15",
//     329.38,
//     332.85,
//     321.1,
//     325.6,
//     6366922.0,
//     0.0,
//     1.0,
//     329.38,
//     332.85,
//     321.1,
//     325.6,
//     6366922.0,
//   ],
//   [
//     "2018-03-14",
//     336.76,
//     339.81,
//     323.93,
//     326.63,
//     7932511.0,
//     0.0,
//     1.0,
//     336.76,
//     339.81,
//     323.93,
//     326.63,
//     7932511.0,
//   ],
//   [
//     "2018-03-13",
//     344.92,
//     345.12,
//     336.2635,
//     341.84,
//     5932110.0,
//     0.0,
//     1.0,
//     344.92,
//     345.12,
//     336.2635,
//     341.84,
//     5932110.0,
//   ],
//   [
//     "2018-03-12",
//     328.61,
//     347.21,
//     326.5,
//     345.51,
//     8212156.0,
//     0.0,
//     1.0,
//     328.61,
//     347.21,
//     326.5,
//     345.51,
//     8212156.0,
//   ],
//   [
//     "2018-03-09",
//     324.1,
//     328.49,
//     322.37,
//     327.17,
//     5479716.0,
//     0.0,
//     1.0,
//     324.1,
//     328.49,
//     322.37,
//     327.17,
//     5479716.0,
//   ],
//   [
//     "2018-03-08",
//     332.86,
//     333.3,
//     326.274,
//     329.1,
//     3476944.0,
//     0.0,
//     1.0,
//     332.86,
//     333.3,
//     326.274,
//     329.1,
//     3476944.0,
//   ],
//   [
//     "2018-03-07",
//     325.44,
//     332.5,
//     321.74,
//     332.3,
//     5007297.0,
//     0.0,
//     1.0,
//     325.44,
//     332.5,
//     321.74,
//     332.3,
//     5007297.0,
//   ],
//   [
//     "2018-03-06",
//     333.75,
//     336.37,
//     327.03,
//     328.2,
//     4285744.0,
//     0.0,
//     1.0,
//     333.75,
//     336.37,
//     327.03,
//     328.2,
//     4285744.0,
//   ],
//   [
//     "2018-03-05",
//     332.39,
//     337.75,
//     329.2929,
//     333.35,
//     3823769.0,
//     0.0,
//     1.0,
//     332.39,
//     337.75,
//     329.2929,
//     333.35,
//     3823769.0,
//   ],
// ];
const Chart = (props) => {
  const [stockData, setStockData] = useState([]);

  // Fetch daily stock chart for TSLA when the component mounts
  useEffect(() => {
    console.log(`Chartjs symbole ${props.symbol}`)
     // setStockData(formatStockData(initialStockData))
    const fetchStockData = async () => {
      const result = await getDailyChartForSymbol(props.symbol);
      setStockData(formatStockData(result.data["dataset_data"]["data"]));
    };
    fetchStockData();
  }, [props.symbol]);

  return (
    <CanvasJSChart
      options={{
        axisY: {
          // Minimum value is 10% less than the lowest price in the dataset
          minimum: Math.min(...stockData.map((data) => data.low)) / 1.1,
          // Minimum value is 10% more than the highest price in the dataset
          maximum: Math.max(...stockData.map((data) => data.high)) * 1.1,
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
          },
        },
        axisX: {
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
          },
          scaleBreaks: {
            spacing: 0,
            fillOpacity: 0,
            lineThickness: 0,
            customBreaks: stockData.reduce((breaks, value, index, array) => {
              // Just return on the first iteration
              // Since there is no previous data point
              if (index === 0) return breaks;

              // Time in UNIX for current and previous data points
              const currentDataPointUnix = Number(new Date(value.date));
              const previousDataPointUnix = Number(
                new Date(array[index - 1].date)
              );

              // One day converted to milliseconds
              const oneDayInMs = 86400000;

              // Difference between the current and previous data points
              // In milliseconds
              const difference = previousDataPointUnix - currentDataPointUnix;

              return difference === oneDayInMs
                ? // Difference is 1 day, no scale break is needed
                  breaks
                : // Difference is more than 1 day, need to create
                  // A new scale break
                  [
                    ...breaks,
                    {
                      startValue: currentDataPointUnix,
                      endValue: previousDataPointUnix - oneDayInMs,
                    },
                  ];
            }, []),
          },
        },
        data: [
          {
            type: "candlestick",
            dataPoints: stockData.map((stockData) => ({
              x: new Date(stockData.date),
              // The OHLC for the data point
              // The order is IMPORTANT!
              y: [
                stockData.open,
                stockData.high,
                stockData.low,
                stockData.close,
              ],
            })),
          },
        ],
      }}
    />
  );
};

function formatStockData(stockData) {
  // Convert stockData  to an array of objects
  console.log(stockData)
  const dataSet = [];
  stockData.forEach((item) => {
    dataSet.push({
      date: item[0],
      open: Number(item[1]),
      high: Number(item[2]),
      low: Number(item[3]),
      close: Number(item[4]),
    });
  });
  return dataSet;
}

export default Chart;
