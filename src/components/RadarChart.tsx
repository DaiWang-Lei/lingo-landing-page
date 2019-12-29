import React from 'react';
import { useMemo } from 'react';
import { useCallback } from 'react';

type Column = { key: string, angle: number };

const data = [
  { curiosity: 1.0, focus: 1.0, problemSolving: 0.6, discipline: 0.5, logic: 0.6, expression: 0.7 },
  { curiosity: 0.7, focus: 0.8, problemSolving: 1.0, discipline: 0.8, logic: 1.0, expression: 0.6 },
  { curiosity: 0.6, focus: 0.7, problemSolving: 0.5, discipline: 1.0, logic: 0.5, expression: 1.0 }
];

const captionMap: Record<string, string> = {
  curiosity: "好奇心",
  focus: "专注度",
  discipline: "执行力",
  logic: "逻辑思维",
  problemSolving: "解决问题",
  expression: "表达力"
};

const numberOfScales = 5;

const scale = (value: number, chartSize: number) => (
  <circle
    key={`scale-${value}`}
    cx={0}
    cy={0}
    r={((value / numberOfScales) * chartSize) / 2}
    fill="transparent"
    stroke="rgba(255,255,255,0.25)"
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

const shape = (columns: Array<Column>, chartSize: number) => (chartData: any, i: number) => {
  const color = useMemo(() => colors[currentColor++], []);

  return (
    <path
      key={`shape-${i}`}
      d={pathDefinition(
        columns.map(col => {
          const value = chartData[col.key];
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

const axis = (chartSize: number) => (col: Column, i: number) => (
  <polyline
    key={`poly-axis-${i}`}
    points={points([
      [0, 0],
      [polarToX(col.angle, chartSize / 2), polarToY(col.angle, chartSize / 2)]
    ])}
    stroke="rgba(255,255,255,0.25)"
  />
);

const caption = (chartSize: number) => (col: Column) => {
  const setDX = useCallback((el: SVGTextElement | null) => {
    if (!el) return;

    const bounds = el.getBoundingClientRect();
    el.setAttribute("dx", (-bounds.width / 2) + "px");

  }, []);

  return (
    <text
      key={`caption-of-${col.key}`}
      x={polarToX(col.angle, chartSize / 2).toFixed(4)}
      y={polarToY(col.angle, chartSize / 2 * 1.15).toFixed(4)}
      fill="#FFF"
      fontWeight="bold"
      fontSize="20px"
      ref={setDX}
    >
      {captionMap[col.key]}
    </text>
  )
};

const RadarChart: React.FC<{ chartSize: number, padding: number, style?: React.CSSProperties }> = props => {
  const groups = [];
  const scales = [];

  for (let i = numberOfScales; i > 0; i--)
    scales.push(scale(i, props.chartSize));

  groups.push(<g key={`scales`}>{scales}</g>);

  const middleOfChart = ((props.chartSize + props.padding) / 2).toFixed(4);
  const captions = Object.keys(data[0]);

  const columns = captions.map((key, i, all) => {
    return {
      key,
      angle: (Math.PI * 2 * i) / all.length
    } as Column;
  });

  groups.push(<g key={`group-axes`}>{columns.map(axis(props.chartSize))}</g>);
  groups.push(<g key={`groups}`}>{data.map(shape(columns, props.chartSize))}</g>);
  groups.push(<g key={`group-captions`}>{columns.map(caption(props.chartSize))}</g>);

  return (
    <svg
      version="1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.chartSize}
      height={props.chartSize}
      viewBox={`0 0 ${props.chartSize + props.padding} ${props.chartSize + props.padding}`}
      style={props.style}
    >
      <g transform={`translate(${middleOfChart},${middleOfChart})`}>
        {groups}
      </g>
    </svg>
  );
};
export default RadarChart;