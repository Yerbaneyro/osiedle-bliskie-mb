import * as React from "react";
import styled from "styled-components";

import { StaticImage } from "gatsby-plugin-image";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

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
`;

const MapWraper = styled.div`
    position: absolute;
    right: 0;
    width: 604px;
    height: 604px;
    border-bottom-right-radius: 15px;
    overflow: hidden;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.15));
`;

const Localisation = () => {
    return (
        <LocalisationContainer>
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
