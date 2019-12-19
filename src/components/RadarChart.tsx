import React from 'react';
import { useMemo } from 'react';

type Column = { key: string, angle: number };

const data = [
  { curiosity: 1.0, focus: 1.0, problemSolving: 0.6, discipline: 0.5, logic: 0.6 },
  { curiosity: 0.7, focus: 0.8, problemSolving: 1.0, discipline: 0.8, logic: 1.0 },
  { curiosity: 0.6, focus: 1.0, problemSolving: 0.5, discipline: 1.0, logic: 0.5 }
];

const captionMap: Record<string, string> = {
  curiosity: "激发旺盛的好奇心",
  focus: "保持持续的专注力",
  discipline: "训练纯粹的自驱力",
  logic: "锻炼严谨的逻辑思维能力",
  problemSolving: "培养整理信息、解决问题的能力"
};

const chartSize = 640;
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

const shape = (columns: Array<Column>) => (chartData: any, i: number) => {
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

const axis = (col: Column, i: number) => (
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

const caption = (col: Column) => (
  <text
   key={`caption-of-${col.key}`}
   x={polarToX(col.angle, chartSize / 2).toFixed(4)}
   y={polarToY(col.angle, chartSize / 2 * 1.15).toFixed(4)}
   fill="#FFF"
   fontWeight="bold"
   fontSize="20px"
   ref={el => {
     if (el) el.setAttribute("dx", -el.clientWidth / 2 + "px");
   }}
  >
    {captionMap[col.key]}
  </text>
);

const RadarChart: React.FC = () => {
  const groups = [];
  const scales = [];

  for (let i = numberOfScales; i > 0; i--)
    scales.push(scale(i));

  groups.push(<g key={`scales`}>{scales}</g>);

  const padding = 200;
  const middleOfChart = ((chartSize + padding) / 2).toFixed(4);
  const captions = Object.keys(data[0]);
  
  const columns = captions.map((key, i, all) => {
    return {
      key,
      angle: (Math.PI * 2 * i) / all.length
    } as Column;
  });

  groups.push(<g key={`group-axes`}>{columns.map(axis)}</g>);
  groups.push(<g key={`groups}`}>{data.map(shape(columns))}</g>);
  groups.push(<g key={`group-captions`}>{columns.map(caption)}</g>);

  return (
    <svg
     version="1"
     xmlns="http://www.w3.org/2000/svg"
     width={chartSize}
     height={chartSize}
     viewBox={`0 0 ${chartSize + padding} ${chartSize + padding}`}
    >
      <g transform={`translate(${middleOfChart},${middleOfChart})`}>
        {groups}
      </g>
    </svg>
  );
};
export default RadarChart;