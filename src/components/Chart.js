import { useState } from "react";
import BarChart from "./components/BarChart";
import { UserData } from "./Data";

function Chart() {
    const [userData, setUserData] = useState({
      labels: UserData.map((data) => data.year),
      datasets: [
        {
          label: "Users Gained",
          data: UserData.map((data) => data.userGain),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });

    return (
        <div className="col-5 col-md-12 col-sm-12">

        <div className="box f-height">
            <div className="box-header">
                Biếu đồ
            </div>
            <div className="box-body">
            <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
            </div>
        </div>

    </div>
    );
  }
  
  export default Chart;
  