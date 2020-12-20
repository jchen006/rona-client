import React from 'react';
import { 
    useParams
} from 'react-router-dom';
import { CountryStatsGraph } from '../../features/country-stats-graph';
import { WorldChorolpethMap } from '../../features/world-choropleth-map/index.jsx';
import { MobilityGraph } from '../../features/mobility-graph';
import { WorldTable } from '../../features/world-table';
import { Stats } from '../../routes';

function Workspace() {
    const { workspace } = useParams();

    const renderWorkspace = () => {
        switch(workspace) {
            case 'stats':
                return <Stats/>
            case 'heat-map':
                return <WorldChorolpethMap />
            case 'mobility':
                return <MobilityGraph />
        }
    }

    return (
        <>
            { renderWorkspace() }
        </>
    )
}

export { Workspace };