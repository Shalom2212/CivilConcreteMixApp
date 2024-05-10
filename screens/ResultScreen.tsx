import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GradeOfConcrete from '../data/GradeOfConcrete';
import NominalSizeOfAggregate from '../data/NominalSizeOfAggregate';
import ShapeOfAggregate from '../data/ShapeOfAggregate';
import SlumpValue from '../data/SlumpValue';
import ChemicalAdmixture from '../data/ChemicalAdmixture';
import ExposureCondition from '../data/ExposureCondition';

interface Props {
  route: {
    params: {
      grade: string; //B9
      exposure: string; //B10
      cement: string; //B11
      aggregate: number; //B12
      slump: number; //B13
      shapeAggregate: string; //B14
      zoneAggregate: string; //B15
      mineralAdmixture: boolean; //B16
      chemicalAdmixture: string; //B17
      sgCement: number; //B19
      sgMineralAdmixture: number; //B20
      sgFineAggregateAdmixture: number; //B21
      sgCourseAggregate: number; //B22
      sgChemicalAdmixture: number; //B23
    };
  };
}

const ResultScreen: React.FC<Props> = ({route}) => {
  const computeTargetStrength = () => {
    const {grade} = route.params;
    const fk = GradeOfConcrete[grade as keyof typeof GradeOfConcrete].fk;
    const vx = GradeOfConcrete[grade as keyof typeof GradeOfConcrete].vx;
    const computeValue = fk + vx;
    // console.log(computeValue);
    return computeValue;
  };

  const computeWaterContent = () => {
    const {aggregate, shapeAggregate, slump} = route.params;
    const wc =
      NominalSizeOfAggregate[aggregate as keyof typeof NominalSizeOfAggregate]
        .wc;
    const sa =
      ShapeOfAggregate[shapeAggregate as keyof typeof ShapeOfAggregate];
    const sp = SlumpValue[slump as keyof typeof SlumpValue];
    const computeValue = wc + sa + (sp * wc + sa);
    //console.log(computeValue);
    return computeValue;
  };

  const wc = computeWaterContent();

  const computeWaterChemicalAdmixture = () => {
    const {chemicalAdmixture} = route.params;
    const cam =
      ChemicalAdmixture[chemicalAdmixture as keyof typeof ChemicalAdmixture];
    const computeValue = cam * wc;
    //console.log(computeValue);
    return computeValue;
  };

  const computeWaterCementRatio = () => {
    const {exposure} = route.params;
    const ex = ExposureCondition[exposure as keyof typeof ExposureCondition];
    const computeValue = ex - 0.05;
    // console.log(computeValue);
    return computeValue;
  };

  const wcr = computeWaterCementRatio();
  const computeCementitiousContent = () => {
    const computeValue = wc / wcr;
    // console.log(computeValue);
    return computeValue;
  };

  const cc = computeCementitiousContent();
  const computeCement = () => {
    const {mineralAdmixture} = route.params;
    let computeValue;
    if (mineralAdmixture) {
      computeValue = cc * 0.8;
    } else {
      computeValue = cc;
    }
    // console.log(computeValue);
    return computeValue;
  };

  const cement = computeCement();
  const computeMineralAdmixture = () => {
    const computeValue = cc - cement;
    //console.log(computeValue);
    return computeValue;
  };

  const ma = computeMineralAdmixture();
  const computeVolumeofCombinedAggregate = () => {
    const {sgCement, sgMineralAdmixture} = route.params;
    const computeValue =
      1 -
      (cc / sgCement) * (1 / 1000) -
      wc / 1000 -
      (ma / sgMineralAdmixture) * (1 / 1000);
    //console.log(computeValue);
    return computeValue;
  };

  const computeVolumeofCoarseAggregateTotalAggregate = () => {
    const {aggregate, zoneAggregate} = route.params;
    const computeValue = NominalSizeOfAggregate[aggregate][zoneAggregate];
    // console.log(computeValue);
    return computeValue;
  };

  const vca = computeVolumeofCombinedAggregate();
  const vcata = computeVolumeofCoarseAggregateTotalAggregate();

  const computeVolumeofFineAggregate = () => {
    const computeValue = (1 - vcata) * vca;
    //console.log(computeValue);
    return computeValue;
  };

  const computeVolumeofCoarseAggregate = () => {
    const computeValue = vca * vcata;
    //console.log(computeValue);
    return computeValue;
  };

  const vfa = computeVolumeofFineAggregate();
  const computeMassofFineAggregate = () => {
    const {sgFineAggregateAdmixture} = route.params;
    const computedValue = vfa * sgFineAggregateAdmixture * 1000;
    //console.log(computedValue);
    return computedValue;
  };

  const vcoa = computeVolumeofCoarseAggregate();
  const computeMassofCoarseAggregate = () => {
    const {sgCourseAggregate} = route.params;
    const computedValue = sgCourseAggregate * vcoa * 1000;
    //console.log(computedValue);
    return computedValue;
  };

  computeTargetStrength();
  computeWaterChemicalAdmixture();

  const finalCementValue = cement / cc;
  const finalMineraladmixtureValue = ma / cc;
  const mfa = computeMassofFineAggregate();
  const finalFineAggregateValue = mfa / cc;
  const mcoa = computeMassofCoarseAggregate();
  const finalCourseAggregateValue = mcoa / cc;
  const finalWaterCementRatioValue = wcr;

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <Text
        style={{fontSize: 23, padding: 10, color: 'black', fontWeight: 'bold'}}>
        Cementitious material
      </Text>
      <Text style={styles.textStyle}>
        Cement:{'                        '}
        <Text style={{fontWeight: 'normal'}}>
          {finalCementValue.toFixed(2)}
        </Text>
      </Text>
      <Text style={styles.textStyle}>
        Mineral admixture:{'      '}
        <Text style={{fontWeight: 'normal'}}>
          {finalMineraladmixtureValue.toFixed(2)}
        </Text>
      </Text>
      <Text style={styles.textStyle}>
        Fine Aggregate:{'           '}
        <Text style={{fontWeight: 'normal'}}>
          {finalFineAggregateValue.toFixed(2)}
        </Text>
      </Text>
      <Text style={styles.textStyle}>
        Course Aggregate:{'       '}
        <Text style={{fontWeight: 'normal'}}>
          {finalCourseAggregateValue.toFixed(2)}
        </Text>
      </Text>
      <Text style={styles.textStyle}>
        Water - Cement Ratio:{'  '}
        <Text style={{fontWeight: 'normal'}}>
          {finalWaterCementRatioValue.toFixed(2)}
        </Text>
      </Text>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  textStyle: {fontWeight: '500', fontSize: 18, padding: 7, color: 'black'},
});
