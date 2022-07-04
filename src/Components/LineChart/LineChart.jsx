import "./LineChart.scss";
import ReactApexChart from "react-apexcharts";
import { Todo } from "../ToDo/Todo";
export const LineChart = () => {
  const series = [
    {
      name: "REVENUE",
      data: [1, 5, 10, 15, 28, 40, 44, 5, 29, 35, 56, 67, 33, 33],
    },
    {
      name: "EXPENSESS",
      data: [0, 8, 15, 38, 28, 24, 22, 45, 29, 23, 12, 30, 32, 43],
    },
  ];
  const options = {
    chart: {
      type: "line",
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
      },
    },
    colors: ["#405189", "#f06548", "#E35F55"],
    dataLabels: {
      enabled: false,
    },

    stroke: {
      width: 3,
      curve: "smooth",
    },

    yaxis: {
      min: 0,
    },
    xaxis: {
      categories: [
        " 01 Jan",
        " 02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        "08 Jan",
        "09 Jan",
        "10 Jan",
        "11 Jan",
        "12 Jan",
      ],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " (mins)";
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val + " per session";
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
      ],
    },
  };
  return (
    <div className="body-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="cl-chart">
              <div className="cl-header">
                <h2 className="title">Balance Overview</h2>
                <div className="cl-filter">
                  <span>Sort By :</span>
                  <select>
                    <option>Current Year</option>
                    <option>Past Year</option>
                    <option>2013</option>
                    <option>Current Year</option>
                  </select>
                </div>
              </div>
              <div className="line-chart">
                <div className="line-chart-section">
                  <div className="bar-title">
                    <div className="d-end">
                      <div className="filter-block">
                        {/* <DropDown
                        theme="filter"
                        optionsProps={[
                          {
                            value: "This month",
                            label: "This month",
                          },
                          {
                            value: "Last 40 days",
                            label: "Last 40 days",
                          },
                        ]}
                      /> */}
                      </div>
                    </div>
                  </div>
                  <div>
                    <ReactApexChart
                      series={series}
                      options={options}
                      type="line"
                      height={350}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Todo />
          </div>
        </div>
      </div>
    </div>
  );
};
