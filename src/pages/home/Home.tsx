import React, { Suspense, useEffect } from "react";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import { dashboardDataRequest } from "../../redux/slices/dashboardSlice";
const ChartBox = React.lazy(() => import('../../components/chartBox/ChartBox'));
const BarChartBox = React.lazy(() => import('../../components/barChartBox/BarChartBox'));

import {
  barChartBoxRevenue,
  // barChartBoxVisit,
  // chartBoxConversion,
  chartBoxProduct,
  // chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/reducer";

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.dashboard
  );

  useEffect(() => {
    dispatch(dashboardDataRequest());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
          <ChartBox {...data?.salesDataConversion} />
        </div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="box box6">
          <ChartBox {...data?.salesDataRevenue} />
        </div>
      </Suspense>
      <div className="box box7">
        <BigChartBox />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="box box8">
          <BarChartBox {...data?.salesDataVisit} />
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


const fetchUser = (): Promise<typeof chartBoxUser> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(chartBoxUser);
    }, 2000); // Simulating a 2-second delay
  });
};

const LazyChartBoxUser = React.lazy(async () => {
  const data = await fetchUser();
  return {
    default: () => <div><ChartBox {...data} /></div>,
  };
});

export default Home;
