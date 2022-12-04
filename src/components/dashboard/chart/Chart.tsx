import { FC } from "react";
import Plot from "react-plotly.js";

interface IChartType {
  /* children: ReactNode; */
}

export const Chart: FC<IChartType> = () => (
  <Plot
    data={[
      {
        type: "bar",
        x: ["Sun", "Man", "Tue", "Wed", "Thu", "Fri", "Sat"],
        y: [2, 5, 3, 2, 5, 3, 5],
        marker: {
          color: [
            "rgba(145, 85, 253,0.3)",
            "rgba(145, 85, 253,0.3)",
            "rgba(145, 85, 253,0.3)",
            "rgba(145, 85, 253,0.3)",
            "rgba(145, 85, 253,1)",
            "rgba(145, 85, 253,0.3)",
            "rgba(145, 85, 253,0.3)",
          ],
        },
        width: 0.3,
      },
    ]}
    layout={{
      title: "Weekly Earning",
      height: 210,
      autosize: true,
      margin: {
        l: 10,
        r: 10,
        b: 20,
        t: 30,
        pad: 0,
      },
    }}
    config={{ displayModeBar: false }}
    useResizeHandler={true}
    style={{ width: "100%" }}
  />
);
