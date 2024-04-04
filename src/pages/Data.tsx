import * as React from 'react';
import {View} from 'react-native';
import {CartesianChart, Line, useChartPressState} from 'victory-native';
import {Circle, useFont} from '@shopify/react-native-skia';
import type {SharedValue} from 'react-native-reanimated';
import inter from '../../assets/inter-medium.ttf';

const INIT_STATE = {x: 0, y: {highTmp: 0}} as const;

function MyChart() {
  const font = useFont(inter, 12);
  const {state: firstPress, isActive: isFirstPressActive} =
    useChartPressState(INIT_STATE);
  const {state: secondPress, isActive: isSecondPressActive} =
    useChartPressState(INIT_STATE);

  return (
    <View style={{height: 300}}>
      <CartesianChart
        data={DATA}
        xKey="day"
        yKeys={['highTmp']}
        axisOptions={{font}}
        chartPressState={[firstPress, secondPress]}>
        {({points}) => (
          <>
            <Line points={points.highTmp} color="red" strokeWidth={3} />
            {isFirstPressActive && (
              <ToolTip
                x={firstPress.x.position}
                y={firstPress.y.highTmp.position}
              />
            )}
            {isSecondPressActive && (
              <ToolTip
                x={secondPress.x.position}
                y={secondPress.y.highTmp.position}
              />
            )}
          </>
        )}
      </CartesianChart>
    </View>
  );
}

function ToolTip({x, y}: {x: SharedValue<number>; y: SharedValue<number>}) {
  return <Circle cx={x} cy={y} r={8} color="black" />;
}

const DATA = Array.from({length: 31}, (_, i) => ({
  day: i,
  highTmp: 40 + 30 * Math.random(),
}));
export default function Data() {
  return <MyChart />;
}
