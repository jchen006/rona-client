import React from 'react';
import { Layout } from '../components/Layout';
import { MobilityGraph } from '../features/mobility-graph';
import { Newsfeed } from '../features/newsfeed';

function Mobility() {
  return (
    <Layout title={'Mobility Tracker'}>
      <MobilityGraph />;
    </Layout>
  );
}

export { Mobility };
