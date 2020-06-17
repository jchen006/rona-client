import React from 'react';
import { Layout } from '../components/Layout';
import { VerticalTabs } from '../components/VerticalTabs';
import { makeStyles } from '@material-ui/core/styles';
import { Newsfeed } from '../features/newsfeed';
import { MobilityGraph } from '../features/mobility-graph';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 450
  }
}));

const tabs = [
  {
    label: 'Maps',
    component: () => (
      <>
        <h1> Test </h1>
      </>
    )
  },
  {
    label: 'Heat Maps',
    component: () => <h1> Heat Map </h1>
  },
  {
    label: 'Mobility',
    title: 'Mobility of people',
    component: () => <MobilityGraph />
  }
];

const renderVerticalTabs = () => {
  return <VerticalTabs tabs={tabs} />;
};

const renderNewsfeed = () => <Newsfeed />;

function Home() {
  const classes = useStyles();

  return <Layout renderToolbar={renderNewsfeed}>{renderVerticalTabs()}</Layout>;
}

export { Home };
