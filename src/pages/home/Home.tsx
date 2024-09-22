import React, { Suspense } from "react";
// import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
// import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";

const ChartBox = React.lazy(() => import('../../components/chartBox/ChartBox'));
const BarChartBox = React.lazy(() => import('../../components/barChartBox/BarChartBox'));

import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <Suspense fallback={<div>Lazy Loading User...</div>}>
        <div className="box box2">
          <LazyChartBoxUser />
        </div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="box box3">
          <ChartBox {...chartBoxProduct} />
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="box box4">
          <PieChartBox />
        </div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="box box5">
          <ChartBox {...chartBoxConversion} />
        </div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="box box6">
          <ChartBox {...chartBoxRevenue} />
        </div>
      </Suspense>
      <div className="box box7">
        <BigChartBox />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="box box8">
          <BarChartBox {...barChartBoxVisit} />
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="box box9">
          <BarChartBox {...barChartBoxRevenue} />
        </div>
      </Suspense>

    </div>
  );
};


const fetchAboutData = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("This data is fetched from the API.");
    }, 2000); // Simulating a 2-second delay
  });
};

const LazyChartBoxUser = React.lazy(async () => {
  const data = await fetchAboutData(); // Simulate fetching data from API
  return {
    default: () => <div><ChartBox {...chartBoxUser} /></div>,
  };
});

export default Home;
