/// <reference types="arcgis-js-api" />
import Map = require('esri/Map');
import MapView = require('esri/views/MapView');

import * as React from 'react';



const styles = {
    container: {
        height: '100vh',
        // width: '100vw'
    },
    mapDiv: {
        padding: 0,
        margin: 0,
        height: '92vh',

    },
}



class MapGeneral extends React.PureComponent {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        const map = new Map({
            basemap: "streets"
        })

        const view = new MapView({
            map: map,
            container: "dvGenMap",
            zoom: 13,
            center: [151.2094, -33.865]
        });
    }


    render() {

        return (
            <div style={styles.container}>
                <div id='dvGenMap' style={styles.mapDiv}>
                </div>
            </div>

        )
    }

}


export default MapGeneral;