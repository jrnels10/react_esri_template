import React, { Component } from 'react';
import { loadModules } from 'esri-loader';


export default class Map extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};
    }

    componentDidMount() {

        // if the API hasn't already been loaded (i.e. the frist time this is run)
        // loadModules() will call loadScript() and pass these options, which,
        // in this case are only needed b/c we're using v3.x instead of the latest 4.x
        const options = { version: '4.11',css: true };

        loadModules(['esri/views/MapView', 'esri/WebMap'],options)
        .then(([MapView, WebMap]) => {
          // then we load a web map from an id
          var webmap = new WebMap({
            portalItem: { // autocasts as new PortalItem()
              id: 'f2e9b762544945f390ca4ac3671cfa72'
            }
          });
          // and we show that map in a container w/ id #viewDiv
          var view = new MapView({
            map: webmap,
            container: 'viewDiv'
          });
        })
        .catch(err => {
          // handle any errors
          console.error(err);
        });
    }

    render() {
        return (
            <div id='viewDiv' style={{height:'100vh', width:'100vw'}}></div>
        );
    }
}

Map.propTypes = {};
