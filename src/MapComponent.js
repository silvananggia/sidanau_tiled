import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import "./map.css";
import Map from "ol/Map";
import View from "ol/View";
import LayerGroup from "ol/layer/Group";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      target: mapRef.current,
      layers: [
        new LayerGroup({
          title: "Basemap",
          layers: [
            new TileLayer({
              title: "Basemap",
              source: new XYZ({
                url: "https://abcd.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
              }),
            }),
          ],
        }),
        new LayerGroup({
          title: "Danau",
          layers: [
            new TileLayer({
              title: "Danau Tempe",
              extent: [
                13345459.999994, -466654.923253, 13361661.639061,
                -449832.455001,
              ],
              source: new XYZ({
                minZoom: 10,
                maxZoom: 15,
                url: "../tiles_danau/danau_tempe/{z}/{x}/{-y}.png",
              }),
            }),
            new TileLayer({
              title: "Danau Batur",
              extent: [
                12843299.999964, -925983.497346, 12849639.058752,
                -918276.006819,
              ],
              source: new XYZ({
                minZoom: 10,
                maxZoom: 15,
                url: "../tiles_danau/danau_batur/{z}/{x}/{-y}.png",
              }),
            }),
            new TileLayer({
              title: "Danau Maninjau",
              extent: [
                11147799.999992, -45340.309309, 11157840.126695, -27820.088209,
              ],
              source: new XYZ({
                minZoom: 10,
                maxZoom: 15,
                url: "../tiles_danau/danau_maninjau/{z}/{x}/{-y}.png",
              }),
            }),
            new TileLayer({
              title: "Danau Toba",
              extent: [
                10967080.000043, 258187.171018, 11037713.740774, 323198.225873,
              ],
              source: new XYZ({
                minZoom: 10,
                maxZoom: 15,
                url: "../tiles_danau/danau_toba/{z}/{x}/{-y}.png",
              }),
            }),
            new TileLayer({
              title: "Danau Kerinci",
              extent: [
                11292199.999962, -243275.315219, 11302882.901433,
                -234793.011429,
              ],
              source: new XYZ({
                minZoom: 10,
                maxZoom: 15,
                url: "../tiles_danau/danau_kerinci/{z}/{x}/{-y}.png",
              }),
            }),
          ],
        }),
      ],
      // Set the view of the map
      view: new View({
        center: [13124075.715923082, -277949.29803053016],
        zoom: 6,
      }),
    });

    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <>
      <div
        ref={mapRef}
        className="map"
        style={{ width: "100vw", height: "100vh" }}
      ></div>
      <div className="legend-box">
        <img src="../legend.png" alt="legend" />
      </div>
    </>
  );
};

export default MapComponent;
