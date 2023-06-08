import React, { useEffect, useState } from "react";
import Svg, { Defs, ClipPath, Path, G, Text, TSpan } from "react-native-svg";


export default function Jurema(props) {

  const Pedido = props.Pedido
  return (
    <Svg
      width="900.0mm"
      height="700.0mm"
      viewBox="0 0 220.0 110.0"
      id="SVGRoot"
      xmlSpace="preserve">


      <Defs id="defs4313">
        <ClipPath clipPathUnits="userSpaceOnUse" id="clipPath4356">
          <Path d="M 9,1 H 13984 V 9881 H 9 V 1" id="path4354" />
        </ClipPath>
        <ClipPath clipPathUnits="userSpaceOnUse" id="clipPath4454">
          <Path d="M 9,1 H 13984 V 9881 H 9 V 1" id="path4452" />
        </ClipPath>
        <ClipPath clipPathUnits="userSpaceOnUse" id="clipPath4466">
          <Path d="M 9,1 H 13984 V 9881 H 9 V 1" id="path4464" />
        </ClipPath>
        <ClipPath clipPathUnits="userSpaceOnUse" id="clipPath5074">
          <Path d="M 9,1 H 13984 V 9881 H 9 V 1" id="path5072" />
        </ClipPath>
        <ClipPath clipPathUnits="userSpaceOnUse" id="clipPath5086">
          <Path d="M 9,1 H 13984 V 9881 H 9 V 1" id="path5084" />
        </ClipPath>
        <ClipPath clipPathUnits="userSpaceOnUse" id="clipPath5236">
          <Path d="M 8,0 H 13986 V 9883 H 8 V 0" id="path5234" />
        </ClipPath>
        <ClipPath clipPathUnits="userSpaceOnUse" id="clipPath5274">
          <Path d="M 8,0 H 13986 V 9883 H 8 V 0" id="path5272" />
        </ClipPath>
        <ClipPath clipPathUnits="userSpaceOnUse" id="clipPath5286">
          <Path d="M 8,0 H 13986 V 9883 H 8 V 0" id="path5284" />
        </ClipPath>
        <ClipPath clipPathUnits="userSpaceOnUse" id="clipPath5306">
          <Path d="M 8,0 H 13986 V 9883 H 8 V 0" id="path5304" />
        </ClipPath>
        <ClipPath clipPathUnits="userSpaceOnUse" id="clipPath5318">
          <Path d="M 8,0 H 13986 V 9883 H 8 V 0" id="path5316" />
        </ClipPath>
      </Defs>
      <G id="layer1">

        {Pedido.map((item) => (
          <>
            {item.numero == '29' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 45.37035,13.376581 10.104821,1.389774 -3.82188,19.862195 -8.888767,-1.216052 z"
                id="L29" />

            )}
          </>
        ))}


        {Pedido.map((item) => (
          <>
            {item.numero == '27' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 55.491496,14.788431 7.812754,1.08123 -3.83662,19.863233 -7.812757,-1.063789 z"
                id="L27" />
            )}
          </>
        ))}


        {Pedido.map((item) => (
          <>
            {item.numero == '25' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 63.30425,15.869661 7.830195,1.06379 -3.854061,19.932992 -7.795315,-1.08123 z"
                id="L25"
              />
            )}
          </>
        ))}



        {Pedido.map((item) => (
          <>
            {item.numero == '23' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 71.134445,16.985769 7.812757,1.06379 -3.836622,19.863235 -7.812754,-1.046351 z"
                id="L23"
              />
            )}
          </>
        ))}



        {Pedido.map((item) => (
          <>
            {item.numero == '21' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="M 78.941077,18.033572 86.773305,19.12973 82.95443,39.00202 75.086844,37.9589 Z"
                id="L21"
              />
            )}
          </>
        ))}


        {Pedido.map((item) => (
          <>
            {item.numero == '19' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 86.755625,19.12973 7.832228,1.096159 -3.818875,19.889968 -7.867586,-1.078478 z"
                id="L19"
              />
            )}
          </>
        ))}



        {Pedido.map((item) => (
          <>
            {item.numero == '17' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 94.587853,20.225889 7.832227,1.096158 -3.836553,19.889968 -7.832228,-1.078478 z"
                id="L17"
              />
            )}
          </>
        ))}


        {Pedido.map((item) => (
          <>
            {item.numero == '15' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 102.4024,21.286687 7.83223,1.113838 -3.83656,19.889969 -7.849902,-1.078479 z"
                id="L15"
              />
            )}
          </>
        ))}

        {Pedido.map((item) => (
          <>
            {item.numero == '13' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 110.23463,22.400525 7.79687,1.078479 -3.81888,19.889969 -7.8499,-1.04312 z"
                id="L13"
              />
            )}
          </>
        ))}


        {Pedido.map((item) => (
          <>
            {item.numero == '11' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 118.0315,23.479004 7.8499,1.078478 -3.83655,19.925328 -7.83223,-1.060799 z"
                id="L11"
              />
            )}
          </>
        ))}


        {Pedido.map((item) => (
          <>
            {item.numero == '9' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 125.8814,24.539802 7.81455,1.043118 -3.85423,19.978369 -7.83223,-1.078479 z"
                id="L9"
              />
            )}
          </>
        ))}

        {Pedido.map((item) => (
          <>
            {item.numero == '7' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 133.69595,25.58292 7.84991,1.060799 -3.85423,20.013728 -7.83223,-1.060799 z"
                id="L7"
              />
            )}
          </>
        ))}

        {Pedido.map((item) => (
          <>
            {item.numero == '5' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 141.52818,26.626039 7.81455,1.060797 -3.85424,20.031411 -7.81454,-1.0608 z"
                id="L5"
              />
            )}
          </>
        ))}

        {Pedido.map((item) => (
          <>
            {item.numero == '1' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 149.35005,27.680163 22.36439,2.986154 -1.75781,9.127889 -22.30085,-3.113225 z"
                id="L1"
                className="L1"
              />
            )}
          </>
        ))}

        {Pedido.map((item) => (
          <>
            {item.numero == '2' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 147.67696,36.723338 -2.13902,11.012765 22.25849,3.134405 2.13902,-11.055125 z"
                id="L2"
              />
            )}
          </>
        ))}


        {Pedido.map((item) => (
          <>
            {item.numero == '30' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 41.603776,42.386699 8.307705,1.196137 -3.827635,19.921098 -7.155066,-1.000406 z"
                id="L30"
              />
            )}
          </>
        ))}


        {Pedido.map((item) => (
          <>
            {item.numero == '28' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 49.911481,43.561089 7.851,1.109144 -3.827635,19.942844 -7.807502,-1.087397 z"
                id="L28"
              />
            )}
          </>
        ))}

        {Pedido.map((item) => (
          <>
            {item.numero == '26' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 57.762481,44.670233 7.785756,1.087395 -3.805886,19.921099 -7.851,-1.087398 z"
                id="L26"
              />
            )}
          </>
        ))}


        {Pedido.map((item) => (
          <>
            {item.numero == '24' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 65.548237,45.714134 7.850999,1.109144 -3.84938,19.964592 -7.851,-1.109143 z"
                id="L24"
              />
            )}
          </>
        ))}


        {Pedido.map((item) => (
          <>
            {item.numero == '22' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 73.399236,46.823278 7.785759,1.065646 -3.827634,20.00809 -7.807505,-1.087397 z"
                id="L22"
              />
            )}
          </>
        ))}


        {Pedido.map((item) => (
          <>
            {item.numero == '20' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 81.22849,47.954168 7.807505,1.087397 -3.871132,19.921096 -7.807502,-1.109144 z"
                id="L20"
              />
            )}
          </>
        ))}


        {Pedido.map((item) => (
          <>
            {item.numero == '18' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 89.014246,48.998068 7.807505,1.109144 -3.849383,19.986341 -7.807505,-1.087395 z"
                id="L18"
              />
            )}
          </>
        ))}


        {Pedido.map((item) => (
          <>
            {item.numero == '16' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 96.865246,50.12896 7.829254,1.022152 -3.89288,20.051585 -7.807504,-1.130892 z"
                id="L16"
              />
            )}
          </>
        ))}


        {Pedido.map((item) => (
          <>
            {item.numero == '14' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 104.6945,51.19461 7.76401,1.087395 -3.84939,20.008087 -7.8075,-1.087395 z"
                id="L14"
              />
            )}
          </>
        ))}

        {Pedido.map((item) => (
          <>
            {item.numero == '12' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 112.502,52.325502 7.78576,1.065647 -3.85685,20.056882 -7.80707,-1.115296 z"
                id="L12"
              />
            )}
          </>
        ))}

        {Pedido.map((item) => (
          <>
            {item.numero == '10' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 120.30509,53.387399 7.80706,1.056595 -3.85951,20.119332 -7.83641,-1.129969 z"
                id="L10"
              />
            )}
          </>
        ))}

        {Pedido.map((item) => (
          <>
            {item.numero == '8' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 128.11215,54.458671 7.83641,1.085945 -3.87418,20.14868 -7.86576,-1.144646 z"
                id="L8"
              />
            )}
          </>
        ))}


        {Pedido.map((item) => (
          <>
            {item.numero == '6' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 135.94856,55.544616 7.80707,1.085943 -3.88886,20.134005 -7.80706,-1.115293 z"
                id="L6"
              />
            )}
          </>
        ))}


        {Pedido.map((item) => (
          <>
            {item.numero == '3' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 143.76469,56.619563 22.33185,3.10611 -2.14214,11.085597 -22.31847,-3.10611 z"
                id="L3"
              />
            )}
          </>
        ))}


        {Pedido.map((item) => (
          <>
            {item.numero == '4' && (
              <Path
                style={{
                  fill: item.cor,
                  strokeWidth: 0.264583,
                }}
                d="m 141.63593,67.691772 -1.75388,9.050562 22.30508,3.213216 1.76727,-9.14428 z"
                id="L4"
              />
            )}
          </>
        ))}

      </G>
      <G
        id="g4350"
        transform="matrix(0.01558518,0,0,-0.01558518,1.5898021,133.49067)"
      >
        <G id="g4352" clipPath="url(#clipPath4356)">
          <Path
            d="m 10989,6588 v 0"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 1,
              strokeLinecap: "round",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4358"
          />
          <Path
            d="m 7528,7050 v 0"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 1,
              strokeLinecap: "round",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4360"
          />
          <Path
            d="m 2808,7709 v 0"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 1,
              strokeLinecap: "round",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4362"
          />
          <Path
            d="m 2595,6052 v 0"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 1,
              strokeLinecap: "round",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4364"
          />
          <Path
            d="m 2395,4554 v 0"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 1,
              strokeLinecap: "round",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4366"
          />
          <Path
            d="m 6008,4046 v 0"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 1,
              strokeLinecap: "round",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4368"
          />
          <Path
            d="m 10377,3424 v 0"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 1,
              strokeLinecap: "round",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4370"
          />
          <Path
            d="m 9909,4560 v 0"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 1,
              strokeLinecap: "round",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4372"
          />
          <Path
            d="m 11024,4560 v 0"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 1,
              strokeLinecap: "round",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4374"
          />
          <Path
            d="M 2633,6346 10652,5229"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4376"
          />
          <Path
            d="M 10917,6598 7528,7050 2808,7709 2595,6052 2395,4554 6008,4046 10305,3435"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4378"
          />
          <Path
            d="m 10305,3435 265,1368 -7993,1113"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4380"
          />
          <Path
            d="m 10652,5229 265,1369"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4382"
          />
          <Path
            d="M 10556,4732 2567,5845"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4384"
          />
          <Path
            d="M 10666,5301 2642,6418"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4386"
          />
          <Path
            d="m 4105,5630 -501,70 -248,-1281 501,-70 248,1281"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4388"
          />
          <Path
            d="m 4607,5561 -502,69 -248,-1281 502,-71 248,1283"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4390"
          />
          <Path
            d="m 5109,5491 -502,70 -248,-1283 502,-70 248,1283"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4392"
          />
          <Path
            d="m 5611,5421 -502,70 -248,-1283 501,-71 249,1284"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4394"
          />
          <Path
            d="m 6112,5351 -501,70 -249,-1284 502,-70 248,1284"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4396"
          />
          <Path
            d="m 6614,5281 -502,70 -248,-1284 144,-21 357,-51 249,1286"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4398"
          />
          <Path
            d="m 7116,5211 -502,70 -249,-1286 502,-71 249,1287"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4400"
          />
          <Path
            d="m 7617,5141 -501,70 -249,-1287 501,-71 249,1288"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4402"
          />
          <Path
            d="m 8119,5072 -502,69 -249,-1288 501,-72 250,1291"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4404"
          />
          <Path
            d="m 8621,5002 -502,70 -250,-1291 502,-71 250,1292"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4406"
          />
          <Path
            d="m 9123,4932 -502,70 -250,-1292 501,-71 251,1293"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4408"
          />
          <Path
            d="m 10418,4022 -1433,199 -113,-582 1433,-204 113,587"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4410"
          />
          <Path
            d="m 10556,4732 -1433,200 -138,-711 1433,-199 138,710"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4412"
          />
          <Path
            d="m 10803,6011 -1433,200 -137,-711 1433,-199 137,710"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4414"
          />
          <Path
            d="m 10917,6598 -1435,191 -112,-578 1433,-200 114,587"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4416"
          />
          <Path
            d="m 9482,6789 -502,67 -249,-1286 502,-70 249,1289"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4418"
          />
          <Path
            d="m 8980,6856 -503,67 -248,-1283 502,-70 249,1286"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4420"
          />
          <Path
            d="m 8477,6923 -502,67 -248,-1280 502,-70 248,1283"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4422"
          />
          <Path
            d="m 7975,6990 -447,60 -55,8 -247,-1278 501,-70 248,1280"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4424"
          />
          <Path
            d="m 7473,7058 -502,70 -247,-1279 502,-69 247,1278"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4426"
          />
          <Path
            d="m 6971,7128 -501,70 -248,-1279 502,-70 247,1279"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4428"
          />
          <Path
            d="m 6470,7198 -502,70 -247,-1279 501,-70 248,1279"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4430"
          />
          <Path
            d="m 5968,7268 -502,70 -247,-1279 502,-70 247,1279"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4432"
          />
          <Path
            d="m 5466,7338 -501,70 -248,-1279 502,-70 247,1279"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4434"
          />
          <Path
            d="m 4965,7408 -502,70 -248,-1279 502,-70 248,1279"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4436"
          />
          <Path
            d="m 4463,7478 -502,70 -247,-1279 501,-70 248,1279"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4438"
          />
          <Path
            d="m 3961,7548 -501,70 -248,-1279 502,-70 247,1279"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4440"
          />
          <Path
            d="m 3604,5700 -502,70 -248,-1281 502,-70 248,1281"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4442"
          />
          <Path
            d="m 3102,5770 -535,75 -172,-1291 459,-65 248,1281"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4444"
          />
          <Path
            d="m 3460,7618 -652,91 -166,-1291 570,-79 248,1279"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path4446"
          />
        </G>
      </G>
      <G
        id="g4448"
        transform="matrix(0.01558518,0,0,-0.01558518,1.5898021,133.49067)"
      >
        <G id="g4450" clipPath="url(#clipPath4454)">
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99126,-0.13192,-0.13192,-0.99126,10049,6569)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4458"
          >
            <TSpan
              x="0 58.525017 117.05003 147.88898 206.41399"
              y={0}
              id="tspan4456"
            >
              {"20.03"}
            </TSpan>
          </Text>
        </G>
      </G>
      <G
        id="g4460"
        transform="matrix(0.01558518,0,0,-0.01558518,1.5898021,133.49067)"
      >
        <G id="g4462" clipPath="url(#clipPath4466)">
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18869,0.98204,0.98204,-0.18869,9547,6371)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5273px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4470"
          >
            <TSpan x="0 58.525227 89.364281 147.88951" y={0} id="tspan4468">
              {"8.16"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99018,-0.1398,-0.1398,-0.99018,9965,6202)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4474"
          >
            <TSpan
              x="0 58.525051 117.0501 147.88907 206.41411"
              y={0}
              id="tspan4472"
            >
              {"20.03"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18869,0.98204,0.98204,-0.18869,10769,6217)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5273px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4478"
          >
            <TSpan x="0 58.525227 89.364281 147.88951" y={0} id="tspan4476">
              {"8.27"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,9742,6500)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4482"
          >
            <TSpan x={0} y={0} id="tspan4480">
              {"1"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.9907,-0.1361,-0.1361,-0.9907,9936,5987)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5275px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4486"
          >
            <TSpan
              x="0 58.525322 117.05064 147.88974 206.41507"
              y={0}
              id="tspan4484"
            >
              {"20.03"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19246,0.98131,0.98131,-0.19246,9417,5698)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5275px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4490"
          >
            <TSpan
              x="0 58.525337 117.05067 147.88979 206.41512"
              y={0}
              id="tspan4488"
            >
              {"10.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99025,-0.13933,-0.13933,-0.99025,9828,5491)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5274px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4494"
          >
            <TSpan
              x="0 58.525269 117.05054 147.88962 206.41489"
              y={0}
              id="tspan4492"
            >
              {"20.03"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18813,0.98214,0.98214,-0.18813,10638,5539)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5266px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4498"
          >
            <TSpan
              x="0 58.524799 117.0496 147.88843 206.41322"
              y={0}
              id="tspan4496"
            >
              {"10.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99076,-0.13563,-0.13563,-0.99076,9688,4708)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4502"
          >
            <TSpan
              x="0 58.525063 117.05013 147.8891 206.41415"
              y={0}
              id="tspan4500"
            >
              {"20.03"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18813,0.98214,0.98214,-0.18813,9170,4419)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5266px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4506"
          >
            <TSpan
              x="0 58.524799 117.0496 147.88843 206.41322"
              y={0}
              id="tspan4504"
            >
              {"10.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99018,-0.1398,-0.1398,-0.99018,9580,4212)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4510"
          >
            <TSpan
              x="0 58.525051 117.0501 147.88907 206.41411"
              y={0}
              id="tspan4508"
            >
              {"20.03"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,10390,4261)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4514"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan4512"
            >
              {"10.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,9392,4621)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4518"
          >
            <TSpan x={0} y={0} id="tspan4516">
              {"3"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99018,-0.1398,-0.1398,-0.99018,9551,3998)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4522"
          >
            <TSpan
              x="0 58.525051 117.0501 147.88907 206.41411"
              y={0}
              id="tspan4520"
            >
              {"20.03"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.1933,0.98114,0.98114,-0.1933,9050,3801)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4526"
          >
            <TSpan x="0 58.525055 89.364014 147.88907" y={0} id="tspan4524">
              {"8.21"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99018,-0.1398,-0.1398,-0.99018,9468,3628)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4530"
          >
            <TSpan
              x="0 58.525051 117.0501 147.88907 206.41411"
              y={0}
              id="tspan4528"
            >
              {"20.02"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18869,0.98204,0.98204,-0.18869,10270,3641)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5273px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4534"
          >
            <TSpan x="0 58.525227 89.364281 147.88951" y={0} id="tspan4532">
              {"8.28"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,9286,3938)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4538"
          >
            <TSpan x={0} y={0} id="tspan4536">
              {"4"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.9908,-0.13534,-0.13534,-0.9908,9109,6694)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4542"
          >
            <TSpan x="0 58.525082 89.364059 147.88914" y={0} id="tspan4540">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18813,0.98214,0.98214,-0.18813,9010,6258)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5266px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4546"
          >
            <TSpan
              x="0 58.524799 117.0496 147.88843 206.41322"
              y={0}
              id="tspan4544"
            >
              {"18.13"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99071,-0.13601,-0.13601,-0.99071,8796,5635)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5272px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4550"
          >
            <TSpan x="0 58.525185 89.364212 147.8894" y={0} id="tspan4548">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18813,0.98214,0.98214,-0.18813,9299,6231)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5266px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4554"
          >
            <TSpan
              x="0 58.524799 117.0496 147.88843 206.41322"
              y={0}
              id="tspan4552"
            >
              {"18.17"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,9070,6136)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4558"
          >
            <TSpan x={0} y={0} id="tspan4556">
              {"5"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99071,-0.13601,-0.13601,-0.99071,8750,4839)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5272px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4562"
          >
            <TSpan x="0 58.525185 89.364212 147.8894" y={0} id="tspan4560">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18813,0.98214,0.98214,-0.18813,8653,4410)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5266px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4566"
          >
            <TSpan
              x="0 58.524799 117.0496 147.88843 206.41322"
              y={0}
              id="tspan4564"
            >
              {"18.21"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99004,-0.14075,-0.14075,-0.99004,8427,3776)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5265px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4570"
          >
            <TSpan x="0 58.524738 89.363533 147.88828" y={0} id="tspan4568">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,8941,4381)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4574"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan4572"
            >
              {"18.23"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,8710,4277)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4578"
          >
            <TSpan x={0} y={0} id="tspan4576">
              {"6"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.9908,-0.13534,-0.13534,-0.9908,8607,6761)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4582"
          >
            <TSpan x="0 58.525082 89.364059 147.88914" y={0} id="tspan4580">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,8508,6327)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4586"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan4584"
            >
              {"18.09"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.9908,-0.13534,-0.13534,-0.9908,8295,5705)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4590"
          >
            <TSpan x="0 58.525082 89.364059 147.88914" y={0} id="tspan4588">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,8797,6300)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4594"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan4592"
            >
              {"18.13"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,8568,6204)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4598"
          >
            <TSpan x={0} y={0} id="tspan4596">
              {"7"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.9908,-0.13534,-0.13534,-0.9908,8248,4909)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4602"
          >
            <TSpan x="0 58.525082 89.364059 147.88914" y={0} id="tspan4600">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19246,0.98131,0.98131,-0.19246,8151,4481)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5275px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4606"
          >
            <TSpan
              x="0 58.525337 117.05067 147.88979 206.41512"
              y={0}
              id="tspan4604"
            >
              {"18.19"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99014,-0.14009,-0.14009,-0.99014,7925,3847)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4610"
          >
            <TSpan x="0 58.525108 89.364098 147.88921" y={0} id="tspan4608">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.1918,0.98143,0.98143,-0.1918,8440,4451)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5266px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4614"
          >
            <TSpan
              x="0 58.524807 117.04961 147.88844 206.41325"
              y={0}
              id="tspan4612"
            >
              {"18.21"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,8208,4347)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4618"
          >
            <TSpan x={0} y={0} id="tspan4616">
              {"8"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.9908,-0.13534,-0.13534,-0.9908,8105,6828)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4622"
          >
            <TSpan x="0 58.525082 89.364059 147.88914" y={0} id="tspan4620">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18813,0.98214,0.98214,-0.18813,8006,6395)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5266px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4626"
          >
            <TSpan
              x="0 58.524799 117.0496 147.88843 206.41322"
              y={0}
              id="tspan4624"
            >
              {"18.05"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99014,-0.14009,-0.14009,-0.99014,7793,5775)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4630"
          >
            <TSpan x="0 58.525108 89.364098 147.88921" y={0} id="tspan4628">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,8295,6368)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4634"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan4632"
            >
              {"18.09"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,8066,6272)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4638"
          >
            <TSpan x={0} y={0} id="tspan4636">
              {"9"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99014,-0.14009,-0.14009,-0.99014,7746,4979)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4642"
          >
            <TSpan x="0 58.525108 89.364098 147.88921" y={0} id="tspan4640">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18813,0.98214,0.98214,-0.18813,7649,4551)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5266px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4646"
          >
            <TSpan
              x="0 58.524799 117.0496 147.88843 206.41322"
              y={0}
              id="tspan4644"
            >
              {"18.16"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99014,-0.14009,-0.14009,-0.99014,7424,3919)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4650"
          >
            <TSpan x="0 58.525108 89.364098 147.88921" y={0} id="tspan4648">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,7938,4522)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4654"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan4652"
            >
              {"18.19"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,7670,4418)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4658"
          >
            <TSpan x="0 73.156448" y={0} id="tspan4656">
              {"10"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99144,-0.13059,-0.13059,-0.99144,7630,6892)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5273px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4662"
          >
            <TSpan x="0 58.525242 89.364304 147.88954" y={0} id="tspan4660">
              {"6.25"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99088,-0.13477,-0.13477,-0.99088,7407,6922)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5273px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4666"
          >
            <TSpan x="0 30.839045 89.364265" y={0} id="tspan4664">
              {".76"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,7504,6464)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4670"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan4668"
            >
              {"18.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99014,-0.14009,-0.14009,-0.99014,7291,5844)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4674"
          >
            <TSpan x="0 58.525108 89.364098 147.88921" y={0} id="tspan4672">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18813,0.98214,0.98214,-0.18813,7793,6436)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5266px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4678"
          >
            <TSpan
              x="0 58.524799 117.0496 147.88843 206.41322"
              y={0}
              id="tspan4676"
            >
              {"18.05"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,7513,6474)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4682"
          >
            <TSpan x="0 73.156448" y={0} id="tspan4680">
              {"11"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99004,-0.14075,-0.14075,-0.99004,7244,5048)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5265px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4686"
          >
            <TSpan x="0 58.524738 89.363533 147.88828" y={0} id="tspan4684">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19246,0.98131,0.98131,-0.19246,7148,4622)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5275px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4690"
          >
            <TSpan
              x="0 58.525337 117.05067 147.88979 206.41512"
              y={0}
              id="tspan4688"
            >
              {"18.14"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.98946,-0.14483,-0.14483,-0.98946,6922,3990)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5273px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4694"
          >
            <TSpan x="0 58.525238 89.364296 147.88953" y={0} id="tspan4692">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,7437,4592)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4698"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan4696"
            >
              {"18.16"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,7169,4488)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4702"
          >
            <TSpan x="0 73.156448" y={0} id="tspan4700">
              {"12"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.9908,-0.13534,-0.13534,-0.9908,7100,6965)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4706"
          >
            <TSpan x="0 58.525082 89.364059 147.88914" y={0} id="tspan4704">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,7003,6534)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4710"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan4708"
            >
              {"18.02"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99004,-0.14075,-0.14075,-0.99004,6790,5914)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5265px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4714"
          >
            <TSpan x="0 58.524738 89.363533 147.88828" y={0} id="tspan4712">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18813,0.98214,0.98214,-0.18813,7291,6505)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5266px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4718"
          >
            <TSpan
              x="0 58.524799 117.0496 147.88843 206.41322"
              y={0}
              id="tspan4716"
            >
              {"18.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,7025,6410)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4722"
          >
            <TSpan x="0 73.156448" y={0} id="tspan4720">
              {"13"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99014,-0.14009,-0.14009,-0.99014,6743,5118)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4726"
          >
            <TSpan x="0 58.525108 89.364098 147.88921" y={0} id="tspan4724">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,6646,4693)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4730"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan4728"
            >
              {"18.12"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99014,-0.14009,-0.14009,-0.99014,6421,4061)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4734"
          >
            <TSpan x="0 58.525108 89.364098 147.88921" y={0} id="tspan4732">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18813,0.98214,0.98214,-0.18813,6935,4663)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5266px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4738"
          >
            <TSpan
              x="0 58.524799 117.0496 147.88843 206.41322"
              y={0}
              id="tspan4736"
            >
              {"18.14"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,6667,4559)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4742"
          >
            <TSpan x="0 73.156448" y={0} id="tspan4740">
              {"14"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.9908,-0.13534,-0.13534,-0.9908,6598,7035)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4746"
          >
            <TSpan x="0 58.525082 89.364059 147.88914" y={0} id="tspan4744">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19246,0.98131,0.98131,-0.19246,6501,6604)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5275px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4750"
          >
            <TSpan
              x="0 58.525337 117.05067 147.88979 206.41512"
              y={0}
              id="tspan4748"
            >
              {"18.02"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99014,-0.14009,-0.14009,-0.99014,6288,5984)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4754"
          >
            <TSpan x="0 58.525108 89.364098 147.88921" y={0} id="tspan4752">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.1918,0.98143,0.98143,-0.1918,6790,6575)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5266px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4758"
          >
            <TSpan
              x="0 58.524807 117.04961 147.88844 206.41325"
              y={0}
              id="tspan4756"
            >
              {"18.02"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,6524,6480)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4762"
          >
            <TSpan x="0 73.156448" y={0} id="tspan4760">
              {"15"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99014,-0.14009,-0.14009,-0.99014,6241,5188)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4766"
          >
            <TSpan x="0 58.525108 89.364098 147.88921" y={0} id="tspan4764">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.1918,0.98143,0.98143,-0.1918,6145,4763)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5266px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4770"
          >
            <TSpan
              x="0 58.524807 117.04961 147.88844 206.41325"
              y={0}
              id="tspan4768"
            >
              {"18.10"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99014,-0.14009,-0.14009,-0.99014,5898,4116)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4774"
          >
            <TSpan x="0 58.525108 89.364098 147.88921" y={0} id="tspan4772">
              {"2.02"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99004,-0.14075,-0.14075,-0.99004,6149,4081)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5265px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4778"
          >
            <TSpan x="0 58.524738 89.363533 147.88828" y={0} id="tspan4776">
              {"4.99"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,6433,4734)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4782"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan4780"
            >
              {"18.12"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,6119,4504)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4786"
          >
            <TSpan x="0 73.156448" y={0} id="tspan4784">
              {"16"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99071,-0.13601,-0.13601,-0.99071,6097,7105)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5272px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4790"
          >
            <TSpan x="0 58.525185 89.364212 147.8894" y={0} id="tspan4788">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,5999,6674)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4794"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan4792"
            >
              {"18.02"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.9908,-0.13534,-0.13534,-0.9908,5786,6054)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4798"
          >
            <TSpan x="0 58.525082 89.364059 147.88914" y={0} id="tspan4796">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,6288,6645)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4802"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan4800"
            >
              {"18.02"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,6022,6550)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4806"
          >
            <TSpan x="0 73.156448" y={0} id="tspan4804">
              {"17"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.9908,-0.13534,-0.13534,-0.9908,5739,5258)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4810"
          >
            <TSpan x="0 58.525082 89.364059 147.88914" y={0} id="tspan4808">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18813,0.98214,0.98214,-0.18813,5643,4833)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5266px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4814"
          >
            <TSpan
              x="0 58.524799 117.0496 147.88843 206.41322"
              y={0}
              id="tspan4812"
            >
              {"18.10"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99014,-0.14009,-0.14009,-0.99014,5415,4204)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4818"
          >
            <TSpan x="0 58.525108 89.364098 147.88921" y={0} id="tspan4816">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.1918,0.98143,0.98143,-0.1918,5932,4804)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5266px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4822"
          >
            <TSpan
              x="0 58.524807 117.04961 147.88844 206.41325"
              y={0}
              id="tspan4820"
            >
              {"18.10"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,5664,4700)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4826"
          >
            <TSpan x="0 73.156448" y={0} id="tspan4824">
              {"18"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99014,-0.14009,-0.14009,-0.99014,5595,7175)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4830"
          >
            <TSpan x="0 58.525108 89.364098 147.88921" y={0} id="tspan4828">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,5498,6744)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4834"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan4832"
            >
              {"18.03"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99071,-0.13601,-0.13601,-0.99071,5284,6124)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5272px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4838"
          >
            <TSpan x="0 58.525185 89.364212 147.8894" y={0} id="tspan4836">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,5786,6715)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4842"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan4840"
            >
              {"18.02"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,5520,6620)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4846"
          >
            <TSpan x="0 73.156448" y={0} id="tspan4844">
              {"19"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99071,-0.13601,-0.13601,-0.99071,5238,5328)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5272px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4850"
          >
            <TSpan x="0 58.525185 89.364212 147.8894" y={0} id="tspan4848">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18813,0.98214,0.98214,-0.18813,5141,4903)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5266px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4854"
          >
            <TSpan
              x="0 58.524799 117.0496 147.88843 206.41322"
              y={0}
              id="tspan4852"
            >
              {"18.09"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99071,-0.13601,-0.13601,-0.99071,4914,4274)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5272px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4858"
          >
            <TSpan x="0 58.525185 89.364212 147.8894" y={0} id="tspan4856">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18813,0.98214,0.98214,-0.18813,5430,4874)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5266px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4862"
          >
            <TSpan
              x="0 58.524799 117.0496 147.88843 206.41322"
              y={0}
              id="tspan4860"
            >
              {"18.10"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,5162,4770)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4866"
          >
            <TSpan x="0 73.156448" y={0} id="tspan4864">
              {"20"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99014,-0.14009,-0.14009,-0.99014,5093,7245)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4870"
          >
            <TSpan x="0 58.525108 89.364098 147.88921" y={0} id="tspan4868">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19246,0.98131,0.98131,-0.19246,4996,6814)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5275px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4874"
          >
            <TSpan
              x="0 58.525337 117.05067 147.88979 206.41512"
              y={0}
              id="tspan4872"
            >
              {"18.03"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.9908,-0.13534,-0.13534,-0.9908,4783,6194)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4878"
          >
            <TSpan x="0 58.525082 89.364059 147.88914" y={0} id="tspan4876">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19246,0.98131,0.98131,-0.19246,5285,6785)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5275px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4882"
          >
            <TSpan
              x="0 58.525337 117.05067 147.88979 206.41512"
              y={0}
              id="tspan4880"
            >
              {"18.03"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,5019,6690)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4886"
          >
            <TSpan x="0 73.156448" y={0} id="tspan4884">
              {"21"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.9908,-0.13534,-0.13534,-0.9908,4736,5398)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4890"
          >
            <TSpan x="0 58.525082 89.364059 147.88914" y={0} id="tspan4888">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19246,0.98131,0.98131,-0.19246,4640,4974)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5275px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4894"
          >
            <TSpan
              x="0 58.525337 117.05067 147.88979 206.41512"
              y={0}
              id="tspan4892"
            >
              {"18.08"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99014,-0.14009,-0.14009,-0.99014,4412,4345)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4898"
          >
            <TSpan x="0 58.525108 89.364098 147.88921" y={0} id="tspan4896">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,4929,4945)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4902"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan4900"
            >
              {"18.09"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,4661,4840)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4906"
          >
            <TSpan x="0 73.156448" y={0} id="tspan4904">
              {"22"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99004,-0.14075,-0.14075,-0.99004,4592,7315)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5265px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4910"
          >
            <TSpan x="0 58.524738 89.363533 147.88828" y={0} id="tspan4908">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,4494,6884)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4914"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan4912"
            >
              {"18.03"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.9908,-0.13534,-0.13534,-0.9908,4281,6264)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4918"
          >
            <TSpan x="0 58.525082 89.364059 147.88914" y={0} id="tspan4916">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19246,0.98131,0.98131,-0.19246,4783,6855)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5275px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4922"
          >
            <TSpan
              x="0 58.525337 117.05067 147.88979 206.41512"
              y={0}
              id="tspan4920"
            >
              {"18.03"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,4517,6760)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4926"
          >
            <TSpan x="0 73.156448" y={0} id="tspan4924">
              {"23"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.9908,-0.13534,-0.13534,-0.9908,4234,5468)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4930"
          >
            <TSpan x="0 58.525082 89.364059 147.88914" y={0} id="tspan4928">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,4138,5044)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4934"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan4932"
            >
              {"18.07"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99071,-0.13601,-0.13601,-0.99071,3910,4415)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5272px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4938"
          >
            <TSpan x="0 58.525185 89.364212 147.8894" y={0} id="tspan4936">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19246,0.98131,0.98131,-0.19246,4427,5015)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5275px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4942"
          >
            <TSpan
              x="0 58.525337 117.05067 147.88979 206.41512"
              y={0}
              id="tspan4940"
            >
              {"18.08"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,4159,4910)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4946"
          >
            <TSpan x="0 73.156448" y={0} id="tspan4944">
              {"24"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99014,-0.14009,-0.14009,-0.99014,4090,7385)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4950"
          >
            <TSpan x="0 58.525108 89.364098 147.88921" y={0} id="tspan4948">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19246,0.98131,0.98131,-0.19246,3993,6954)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5275px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4954"
          >
            <TSpan
              x="0 58.525337 117.05067 147.88979 206.41512"
              y={0}
              id="tspan4952"
            >
              {"18.04"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99014,-0.14009,-0.14009,-0.99014,3779,6333)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4958"
          >
            <TSpan x="0 58.525108 89.364098 147.88921" y={0} id="tspan4956">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,4281,6925)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4962"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan4960"
            >
              {"18.03"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,4015,6830)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4966"
          >
            <TSpan x="0 73.156448" y={0} id="tspan4964">
              {"25"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99004,-0.14075,-0.14075,-0.99004,3732,5537)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5265px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4970"
          >
            <TSpan x="0 58.524738 89.363533 147.88828" y={0} id="tspan4968">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,3637,5114)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4974"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan4972"
            >
              {"18.06"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99014,-0.14009,-0.14009,-0.99014,3409,4485)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4978"
          >
            <TSpan x="0 58.525108 89.364098 147.88921" y={0} id="tspan4976">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,3925,5085)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4982"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan4980"
            >
              {"18.07"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,3657,4981)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4986"
          >
            <TSpan x="0 73.156448" y={0} id="tspan4984">
              {"26"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99014,-0.14009,-0.14009,-0.99014,3588,7455)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4990"
          >
            <TSpan x="0 58.525108 89.364098 147.88921" y={0} id="tspan4988">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19246,0.98131,0.98131,-0.19246,3491,7024)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5275px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4994"
          >
            <TSpan
              x="0 58.525337 117.05067 147.88979 206.41512"
              y={0}
              id="tspan4992"
            >
              {"18.04"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99004,-0.14075,-0.14075,-0.99004,3278,6403)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5265px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text4998"
          >
            <TSpan x="0 58.524738 89.363533 147.88828" y={0} id="tspan4996">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19246,0.98131,0.98131,-0.19246,3780,6995)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5275px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5002"
          >
            <TSpan
              x="0 58.525337 117.05067 147.88979 206.41512"
              y={0}
              id="tspan5000"
            >
              {"18.04"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,3513,6900)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5006"
          >
            <TSpan x="0 73.156448" y={0} id="tspan5004">
              {"27"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99014,-0.14009,-0.14009,-0.99014,3231,5607)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5010"
          >
            <TSpan x="0 58.525108 89.364098 147.88921" y={0} id="tspan5008">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.1918,0.98143,0.98143,-0.1918,3135,5184)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5266px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5014"
          >
            <TSpan
              x="0 58.524807 117.04961 147.88844 206.41325"
              y={0}
              id="tspan5012"
            >
              {"18.05"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.9908,-0.13534,-0.13534,-0.9908,2907,4556)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5018"
          >
            <TSpan x="0 58.525082 89.364059 147.88914" y={0} id="tspan5016">
              {"7.01"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18813,0.98214,0.98214,-0.18813,3424,5155)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5266px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5022"
          >
            <TSpan
              x="0 58.524799 117.0496 147.88843 206.41322"
              y={0}
              id="tspan5020"
            >
              {"18.06"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,3156,5051)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5026"
          >
            <TSpan x="0 73.156448" y={0} id="tspan5024">
              {"28"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.9908,-0.13534,-0.13534,-0.9908,3012,7536)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5030"
          >
            <TSpan x="0 58.525082 89.364059 147.88914" y={0} id="tspan5028">
              {"9.10"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.12821,0.99175,0.99175,-0.12821,2851,6914)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5273px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5034"
          >
            <TSpan
              x="0 58.525211 117.05042 147.88947 206.41467"
              y={0}
              id="tspan5032"
            >
              {"18.02"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.9908,-0.13534,-0.13534,-0.9908,2742,6478)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5038"
          >
            <TSpan x="0 58.525082 89.364059 147.88914" y={0} id="tspan5036">
              {"7.97"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.18888,0.982,0.982,-0.18888,3278,7065)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5042"
          >
            <TSpan
              x="0 58.525028 117.05006 147.88901 206.41403"
              y={0}
              id="tspan5040"
            >
              {"18.04"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,2957,6977)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5046"
          >
            <TSpan x="0 73.156448" y={0} id="tspan5044">
              {"29"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99004,-0.14075,-0.14075,-0.99004,2712,5679)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5265px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5050"
          >
            <TSpan x="0 58.524738 89.363533 147.88828" y={0} id="tspan5048">
              {"7.47"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.13192,0.99126,0.99126,-0.13192,2606,5049)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5054"
          >
            <TSpan
              x="0 58.525017 117.05003 147.88898 206.41399"
              y={0}
              id="tspan5052"
            >
              {"18.02"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99014,-0.14009,-0.14009,-0.99014,2532,4608)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5058"
          >
            <TSpan x="0 58.525108 89.364098 147.88921" y={0} id="tspan5056">
              {"6.42"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.1918,0.98143,0.98143,-0.1918,2922,5225)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5266px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5062"
          >
            <TSpan
              x="0 58.524807 117.04961 147.88844 206.41325"
              y={0}
              id="tspan5060"
            >
              {"18.05"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,2656,5121)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5066"
          >
            <TSpan x="0 73.156448" y={0} id="tspan5064">
              {"30"}
            </TSpan>
          </Text>
        </G>
      </G>
      <G
        id="g5068"
        transform="matrix(0.01558518,0,0,-0.01558518,1.5898021,133.49067)"
      >
        <G id="g5070" clipPath="url(#clipPath5074)">
          <Text
            xmlSpace="preserve"
            transform="matrix(0.9903,-0.13895,-0.13895,-0.9903,10132,6320)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5078"
          >
            <TSpan
              x="0 58.525074 117.05015 175.57523 206.41418 264.93927 323.46432 410.66077"
              y={0}
              id="tspan5076"
            >
              {"164.30m\xB2"}
            </TSpan>
          </Text>
        </G>
      </G>
      <G
        id="g5080"
        transform="matrix(0.01558518,0,0,-0.01558518,1.5898021,133.49067)"
      >
        <G id="g5082" clipPath="url(#clipPath5086)">
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99026,-0.13923,-0.13923,-0.99026,10007,5672)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5090"
          >
            <TSpan
              x="0 58.525032 117.05006 175.5751 206.41405 264.93909 323.46411 410.66052"
              y={0}
              id="tspan5088"
            >
              {"200.28m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(1,0,0,-1,9636,5952)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "123.159px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5094"
          >
            <TSpan x={0} y={0} id="tspan5092">
              {"2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19048,0.98169,0.98169,-0.19048,8844,3716)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5269px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5098"
          >
            <TSpan
              x="0 58.524975 117.04995 175.57494 206.41385 264.93881 323.46381 410.6601"
              y={0}
              id="tspan5096"
            >
              {"127.53m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19095,0.9816,0.9816,-0.19095,8709,5681)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5102"
          >
            <TSpan
              x="0 58.525051 117.0501 175.57515 206.41411 264.93918 323.4642 410.66064"
              y={0}
              id="tspan5100"
            >
              {"126.78m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19048,0.98169,0.98169,-0.19048,8207,5750)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5269px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5106"
          >
            <TSpan
              x="0 58.524975 117.04995 175.57494 206.41385 264.93881 323.46381 410.6601"
              y={0}
              id="tspan5104"
            >
              {"126.49m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19048,0.98169,0.98169,-0.19048,7705,5820)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5269px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5110"
          >
            <TSpan
              x="0 58.524975 117.04995 175.57494 206.41385 264.93881 323.46381 410.6601"
              y={0}
              id="tspan5108"
            >
              {"126.21m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19048,0.98169,0.98169,-0.19048,7203,5890)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5269px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5114"
          >
            <TSpan
              x="0 58.524975 117.04995 175.57494 206.41385 264.93881 323.46381 410.6601"
              y={0}
              id="tspan5112"
            >
              {"126.11m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19264,0.98127,0.98127,-0.19264,6702,5960)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5118"
          >
            <TSpan
              x="0 58.525066 117.05013 175.5752 206.41417 264.93924 323.46429 410.66074"
              y={0}
              id="tspan5116"
            >
              {"126.14m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19264,0.98127,0.98127,-0.19264,6200,6030)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5122"
          >
            <TSpan
              x="0 58.525066 117.05013 175.5752 206.41417 264.93924 323.46429 410.66074"
              y={0}
              id="tspan5120"
            >
              {"126.16m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19048,0.98169,0.98169,-0.19048,5698,6100)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5269px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5126"
          >
            <TSpan
              x="0 58.524975 117.04995 175.57494 206.41385 264.93881 323.46381 410.6601"
              y={0}
              id="tspan5124"
            >
              {"126.18m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19048,0.98169,0.98169,-0.19048,5197,6170)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5269px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5130"
          >
            <TSpan
              x="0 58.524975 117.04995 175.57494 206.41385 264.93881 323.46381 410.6601"
              y={0}
              id="tspan5128"
            >
              {"126.20m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19095,0.9816,0.9816,-0.19095,4695,6240)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5134"
          >
            <TSpan
              x="0 58.525051 117.0501 175.57515 206.41411 264.93918 323.4642 410.66064"
              y={0}
              id="tspan5132"
            >
              {"126.23m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19048,0.98169,0.98169,-0.19048,4193,6309)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5269px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5138"
          >
            <TSpan
              x="0 58.524975 117.04995 175.57494 206.41385 264.93881 323.46381 410.6601"
              y={0}
              id="tspan5136"
            >
              {"126.25m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19048,0.98169,0.98169,-0.19048,3692,6379)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5269px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5142"
          >
            <TSpan
              x="0 58.524975 117.04995 175.57494 206.41385 264.93881 323.46381 410.6601"
              y={0}
              id="tspan5140"
            >
              {"126.27m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19048,0.98169,0.98169,-0.19048,3190,6449)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5269px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5146"
          >
            <TSpan
              x="0 58.524975 117.04995 175.57494 206.41385 264.93881 323.46381 410.6601"
              y={0}
              id="tspan5144"
            >
              {"153.75m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19048,0.98169,0.98169,-0.19048,9210,5611)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5269px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5150"
          >
            <TSpan
              x="0 58.524975 117.04995 175.57494 206.41385 264.93881 323.46381 410.6601"
              y={0}
              id="tspan5148"
            >
              {"127.06m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19095,0.9816,0.9816,-0.19095,8342,3788)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5154"
          >
            <TSpan
              x="0 58.525051 117.0501 175.57515 206.41411 264.93918 323.4642 410.66064"
              y={0}
              id="tspan5152"
            >
              {"127.38m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19048,0.98169,0.98169,-0.19048,7841,3859)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5269px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5158"
          >
            <TSpan
              x="0 58.524975 117.04995 175.57494 206.41385 264.93881 323.46381 410.6601"
              y={0}
              id="tspan5156"
            >
              {"127.23m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19048,0.98169,0.98169,-0.19048,7339,3930)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5269px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5162"
          >
            <TSpan
              x="0 58.524975 117.04995 175.57494 206.41385 264.93881 323.46381 410.6601"
              y={0}
              id="tspan5160"
            >
              {"127.08m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19264,0.98127,0.98127,-0.19264,6838,4002)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5166"
          >
            <TSpan
              x="0 58.525066 117.05013 175.5752 206.41417 264.93924 323.46429 410.66074"
              y={0}
              id="tspan5164"
            >
              {"126.93m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19095,0.9816,0.9816,-0.19095,6366,4226)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5170"
          >
            <TSpan
              x="0 58.525051 117.0501 175.57515 206.41411 264.93918 323.4642 410.66064"
              y={0}
              id="tspan5168"
            >
              {"126.78m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19048,0.98169,0.98169,-0.19048,5854,4240)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5269px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5174"
          >
            <TSpan
              x="0 58.524975 117.04995 175.57494 206.41385 264.93881 323.46381 410.6601"
              y={0}
              id="tspan5172"
            >
              {"126.70m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19095,0.9816,0.9816,-0.19095,5334,4215)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5178"
          >
            <TSpan
              x="0 58.525051 117.0501 175.57515 206.41411 264.93918 323.4642 410.66064"
              y={0}
              id="tspan5176"
            >
              {"126.64m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19264,0.98127,0.98127,-0.19264,4832,4285)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5182"
          >
            <TSpan
              x="0 58.525066 117.05013 175.5752 206.41417 264.93924 323.46429 410.66074"
              y={0}
              id="tspan5180"
            >
              {"126.58m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19048,0.98169,0.98169,-0.19048,4330,4356)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5269px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5186"
          >
            <TSpan
              x="0 58.524975 117.04995 175.57494 206.41385 264.93881 323.46381 410.6601"
              y={0}
              id="tspan5184"
            >
              {"126.52m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19264,0.98127,0.98127,-0.19264,3829,4426)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5190"
          >
            <TSpan
              x="0 58.525066 117.05013 175.5752 206.41417 264.93924 323.46429 410.66074"
              y={0}
              id="tspan5188"
            >
              {"126.46m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19095,0.9816,0.9816,-0.19095,3327,4497)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.527px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5194"
          >
            <TSpan
              x="0 58.525051 117.0501 175.57515 206.41411 264.93918 323.4642 410.66064"
              y={0}
              id="tspan5192"
            >
              {"126.40m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.19048,0.98169,0.98169,-0.19048,2826,4567)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5269px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5198"
          >
            <TSpan
              x="0 58.524975 117.04995 175.57494 206.41385 264.93881 323.46381 410.6601"
              y={0}
              id="tspan5196"
            >
              {"125.24m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.9903,-0.13895,-0.13895,-0.9903,9762,4393)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5202"
          >
            <TSpan
              x="0 58.525074 117.05015 175.57523 206.41418 264.93927 323.46432 410.66077"
              y={0}
              id="tspan5200"
            >
              {"200.28m\xB2"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.9903,-0.13895,-0.13895,-0.9903,9640,3761)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "98.5271px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5206"
          >
            <TSpan
              x="0 58.525074 117.05015 175.57523 206.41418 264.93927 323.46432 410.66077"
              y={0}
              id="tspan5204"
            >
              {"164.90m\xB2"}
            </TSpan>
          </Text>
          <Path
            d="M 11199,8055 10926,6642"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path5208"
          />
          <Path
            d="M 10306,3438 10055,2145"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path5210"
          />
          <Path
            d="M 11807,8157 10623,2035"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: 6,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path5212"
          />
          <Text
            xmlSpace="preserve"
            transform="matrix(-0.21208,-0.97725,-0.97725,0.21208,11484,7896)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "211.24px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5216"
          >
            <TSpan
              x="0 156.31725 323.61896 475.50015 627.38141 768.27814 924.5954 1091.8971 1243.7783 1296.5881 1437.485 1565.0736 1631.1917 1772.0884 1904.113 2045.0099 2205.5518 2337.5767"
              y={0}
              id="tspan5214"
            >
              {"CORREDOR EXISTENTE"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99027,-0.13914,-0.13914,-0.99027,7037,5463)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "211.239px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5220"
          >
            <TSpan
              x="0 151.88115 312.42313 464.30426 517.11414 658.0108 809.89197 977.1936 1098.2338 1239.1305 1371.1552 1523.0363 1679.3535"
              y={0}
              id="tspan5218"
            >
              {"RUA PROJETADA"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(0.99027,-0.13914,-0.13914,-0.99027,3631,5916)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "211.239px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5224"
          >
            <TSpan
              x="0 151.88115 312.42313 464.30426 517.11414 658.0108 809.89197 977.1936 1098.2338 1239.1305 1371.1552 1523.0363 1679.3535"
              y={0}
              id="tspan5222"
            >
              {"RUA PROJETADA"}
            </TSpan>
          </Text>
          <Text
            xmlSpace="preserve"
            transform="matrix(-0.18577,-0.98259,-0.98259,0.18577,10811,4568)"
            style={{
              fontVariant: "normal",
              fontWeight: "normal",
              fontSize: "211.239px",
              fontFamily: "ArialRoundedMTBold",
              InkscapeFontSpecification: "ArialRoundedMTBold",
              writingMode: "lr-tb",
              fill: "#000000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="text5228"
          >
            <TSpan
              x="0 156.31709 323.61865 475.49973 627.3808 768.2774 924.59454 1091.8961 1243.7771 1296.5869 1437.4836 1565.0721 1631.1901 1772.0867 1904.1113 2045.0079 2205.5498 2337.5745"
              y={0}
              id="tspan5226"
            >
              {"CORREDOR EXISTENTE"}
            </TSpan>
          </Text>
        </G>
      </G>
    </Svg>
  );

}
