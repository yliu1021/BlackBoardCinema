import Chart from "react-apexcharts";

export default function RatingsChartView(props) {
  const ratings = props.ratings ?? []
  const ratingData = ratings.map(rating => [parseFloat(rating.metrics["entertainment"]), parseFloat(rating.metrics["quality"])])
  const options = {
    chart: {
      zoom: {
        enabled: true,
        type: 'xy'
      }
    },
    xaxis: {
      type: "numeric"
    },
    yaxis: {
      type: "numeric"
    }
  };
  const series = [{
    name: "Ratings",
    data: ratingData
  }];

  return (
    <Chart
      options={options}
      series={series}
      width="400px"
      height="400px"
      type="scatter"
    />
  )
}
