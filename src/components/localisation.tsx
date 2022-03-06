import * as React from "react";
import styled from "styled-components";

import { StaticImage } from "gatsby-plugin-image";
import Map, { Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass =
    require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

import { Navigation } from "../../types";

//styled-components
const LocalisationContainer = styled.div`
    width: 1274px;
    height: 640px;
    margin-top: 178px;
    margin-left: 50%;
    transform: translate(-50%);

    h2 {
        position: absolute;
        top: 125px;
        left: 30px;
        font-weight: 700;
        font-size: 43px;
        color: #2a4819;
    }
    @media (max-width: 1024px) {
        max-width: 534px;
        height: 880px;
        margin-top: 30px;

        h2 {
            top: 0px;
            left: 0px;
            margin-left: 50%;
            transform: translate(-50%);
        }
    }
    @media (max-width: 428px) {
        height: 750px;
        width: 428px;
    }
`;

const TextContainer = styled.div`
    position: absolute;
    top: 189px;
    width: 899px;
    height: 261px;
    background: #9ac259;
    border-radius: 15px;
    color: white;

    p {
        margin-top: 54px;
        margin-left: 30px;
        width: 604px;
        font-size: 18px;
        line-height: 21px;
    }

    @media (max-width: 1024px) {
        top: 60px;
        max-width: 630px;
        height: 235px;
        margin-left: 50%;
        transform: translate(-50%);
        text-align: center;

        p {
            margin: 40px 20px;
            max-width: 604px;
        }
    }
    @media (max-width: 428px) {
        max-width: 350px;
        height: 500px;

        p {
            width: 300px;
        }
    }
`;

const MapWraper = styled.div`
    position: absolute;
    right: 0;
    width: 604px;
    height: 604px;
    border-bottom-right-radius: 15px;
    overflow: hidden;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.15));
    @media (max-width: 1024px) {
        position: relative;
        top: 320px;
        margin-left: 50%;
        transform: translate(-50%);
        border-radius: 15px;
    }
    @media (max-width: 428px) {
        width: 330px;
        height: 330px;
        top: 450px;
        border: 10px solid #9ac259;
    }
`;

const Localisation = ({ id }: Navigation) => {
    return (
        <LocalisationContainer id={id}>
            <h2>Lokalizacja</h2>
            <TextContainer>
                <p>
                    Osiedle Ogrody Marysin przy ul. Ludowej znajduje się w
                    cichej i spokojnej miejscowości Marysin (gm. Lesznowola),
                    położonej ok. 20km od centrum Warszawy. Okolica z zabudową
                    domków jednorodzinnych jest otoczona rozległymi terenami
                    zielonymi. Wyróżnia ją dobre połączenie z kluczowymi
                    tarasami. Bardzo szybko dotrzesz do Alei Krakowskiej, która
                    prowadzi do dróg S7 i S8, zapewniających wygodny dojazd do
                    samego serca stolicy.
                </p>
            </TextContainer>
            <MapWraper>
                <Map
                    initialViewState={{
                        longitude: 17.5084302,
                        latitude: 51.9509421,
                        zoom: 14,
                    }}
                    style={{ width: 655, height: 655 }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxAccessToken="pk.eyJ1IjoieWVyYmFuZXlybyIsImEiOiJjbDBlNGlsZHQwMm1kM2JtdDAxaGk1MGVuIn0.HSQhqfM-6uumrpJmR0CcYA"
                >
                    <Marker
                        longitude={17.5084302}
                        latitude={51.9509421}
                        anchor="bottom-left"
                    >
                        <StaticImage src="../images/marker.png" alt="marker" />
                    </Marker>
                </Map>
            </MapWraper>
        </LocalisationContainer>
    );
};

export default Localisation;
