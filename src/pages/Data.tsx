/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {CartesianChart, Line, useChartPressState} from 'victory-native';
import {Circle, useFont} from '@shopify/react-native-skia';
import type {SharedValue} from 'react-native-reanimated';
import inter from '../../assets/inter-medium.ttf';
import {Button} from 'react-native-paper';

const INIT_STATE = {x: 0, y: {highTmp: 0}} as const;

function MyChart() {
  const font = useFont(inter, 12);
  const {state: firstPress, isActive: isFirstPressActive} =
    useChartPressState(INIT_STATE);
  const {state: secondPress, isActive: isSecondPressActive} =
    useChartPressState(INIT_STATE);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 22,
            paddingHorizontal: 10,
            color: 'black',
          }}>
          Health Data Analysis
        </Text>
      </View>

      <View style={{height: 300, backgroundColor: 'white', margin: 5}}>
        <CartesianChart
          data={DATA}
          xKey="day"
          yKeys={['highTmp']}
          axisOptions={{font}}
          chartPressState={[firstPress, secondPress]}>
          {({points}) => (
            <>
              <Line points={points.highTmp} color="#00B140" strokeWidth={3} />
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

      {/* Summary */}
      <View style={{flex: 1, marginTop: 10}}>
        <Text
          style={{
            paddingHorizontal: 15,
            fontWeight: 'bold',
            fontSize: 15,
            color: 'black',
          }}>
          Daily Summary
        </Text>
        <View
          style={{
            backgroundColor: '#01BAEF',
            flex: 2 / 3,
            margin: 10,
            borderRadius: 10,
            justifyContent: 'space-between',
            paddingVertical: 25,
          }}>
          <View>
            <Text
              style={{
                paddingHorizontal: 15,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Summary
            </Text>
            <Text
              style={{
                paddingHorizontal: 15,
              }}>
              If you’re wondering about recent footwear trends, Trepal says
              cloth kickers, like cotton slip-ons or canvas sneakers, are fine.
              Just don’t wear them for running, hiking, or activities that
              require foot protection.
            </Text>
          </View>

          <View>
            <Text
              style={{
                paddingHorizontal: 15,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Health Status
            </Text>

            <Text
              style={{
                paddingHorizontal: 15,
              }}>
              Good
            </Text>
          </View>

          <View>
            <Text
              style={{
                paddingHorizontal: 15,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Suggestion
            </Text>
            <Text
              style={{
                paddingHorizontal: 15,
              }}>
              If you’re wondering about recent footwear trends, Trepal says
              cloth kickers, like cotton slip-ons or canvas sneakers, are fine.
              Just don’t wear them for running, hiking, or activities that
              require foot protection.
            </Text>
          </View>
        </View>

        {/* Buttons */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 15,
            justifyContent: 'space-between',
          }}>
          <Button
            mode="contained"
            style={{
              backgroundColor: '#00B140',
              paddingVertical: 3,
              marginTop: 7,
              width: Dimensions.get('screen').width * 0.45,
            }}>
            Chat With Doctor
          </Button>
          <Button
            mode="contained"
            style={{
              backgroundColor: 'red',
              paddingVertical: 3,
              marginTop: 7,
              width: Dimensions.get('screen').width * 0.45,
            }}>
            Object the Data
          </Button>
        </View>
      </View>
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
