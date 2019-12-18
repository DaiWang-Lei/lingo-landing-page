import React from 'react';
import { useMemo } from 'react';

const data = [
  { curiosity: 1.0, focus: 1.0, discipline: 0.5, logic: 0.6, problemSolving: 0.6 },  //level 1
  { curiosity: 0.7, focus: 0.8, discipline: 0.8, logic: 1.0, problemSolving: 1.0 },  //level 2
  { curiosity: 0.6, focus: 1.0, discipline: 1.0, logic: 0.5, problemSolving: 0.5 }  //level 4
];

const chartSize = 450;
const numberOfScales = 4;

const scale = (value: number) => (
  <circle
    key={`scale-${value}`}
    cx={0}
    cy={0}
    r={((value / numberOfScales) * chartSize) / 2}
    fill="transparent"
    stroke="#999"
    strokeWidth="0.2"
  />
);

const polarToX = (angle: number, distance: number) => Math.cos(angle - Math.PI / 2) * distance;
const polarToY = (angle: number, distance: number) => Math.sin(angle - Math.PI / 2) * distance;

const pathDefinition = (points: Array<Array<number>>) => {
  let d = 'M' + points[0][0].toFixed(4) + ',' + points[0][1].toFixed(4);
  for (let i = 1; i < points.length; i++) {
    d += 'L' + points[i][0].toFixed(4) + ',' + points[i][1].toFixed(4);
  }
  return d + 'z';
};

const colors = ["#284fff", "#934ce5", "#c3b803"];
let currentColor = 0;

const shape = (columns: Array<{ key: string, angle: number }>) => (chartData: any, i: number) => {
  const data = chartData;

  const color = useMemo(() => colors[currentColor++], []);

  return (
    <path
      key={`shape-${i}`}
      d={pathDefinition(
        columns.map(col => {
          const value = data[col.key];
          return [
            polarToX(col.angle, (value * chartSize) / 2),
            polarToY(col.angle, (value * chartSize) / 2)
          ];
        })
      )}
      strokeWidth="3"
      stroke={color}
      fill={color}
      fillOpacity=".4"
    />
  );
};

const points = (points: Array<Array<number>>) => {
  return points
    .map(point => point[0].toFixed(4) + ',' + point[1].toFixed(4))
    .join(' ');
};

const axis = () => (col: { key: string, angle: number }, i: number) => (
  <polyline
    key={`poly-axis-${i}`}
    points={points([
      [0, 0],
      [polarToX(col.angle, chartSize / 2), polarToY(col.angle, chartSize / 2)]
    ])}
    stroke="#555"
    strokeWidth=".2"
  />
);

const RadarChart: React.FC = props => {
  const groups = [];
  const scales = [];

  for (let i = numberOfScales; i > 0; i--) {
    scales.push(scale(i));
  }

  groups.push(<g key={`scales`}>{scales}</g>);

  const middleOfChart = (chartSize / 2).toFixed(4);
  const captions = Object.keys(data[0]);
  
  const columns = captions.map((key, i, all) => {
    return {
      key,
      angle: (Math.PI * 2 * i) / all.length
    };
  });

  groups.push(<g key={`group-axes`}>{columns.map(axis())}</g>);
  groups.push(<g key={`groups}`}>{data.map(shape(columns))}</g>);

  return (
    <svg
      version="1"
      xmlns="http://www.w3.org/2000/svg"
      width={chartSize}
      height={chartSize}
      viewBox={`0 0 ${chartSize} ${chartSize}`}
    >
      <g transform={`translate(${middleOfChart},${middleOfChart})`}>{groups}</g>
    </svg>
  );
};
export default RadarChart;