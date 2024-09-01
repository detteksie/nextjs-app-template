import React from 'react';

import { CardBarChart } from '|/components/notus/cards/card-bar-chart';
import { CardLineChart } from '|/components/notus/cards/card-line-chart';
import { CardPageVisits } from '|/components/notus/cards/card-page-visits';
import { CardSocialTraffic } from '|/components/notus/cards/card-social-traffic';

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}
