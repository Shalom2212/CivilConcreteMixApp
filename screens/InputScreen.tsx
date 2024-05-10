import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useNavigation} from '@react-navigation/native';

const gradeOfConcreteData = [
  {label: 'M10', value: 'M10'},
  {label: 'M15', value: 'M15'},
  {label: 'M20', value: 'M20'},
  {label: 'M25', value: 'M25'},
  {label: 'M30', value: 'M30'},
  {label: 'M35', value: 'M35'},
  {label: 'M40', value: 'M40'},
  {label: 'M45', value: 'M45'},
  {label: 'M50', value: 'M50'},
  {label: 'M55', value: 'M55'},
  {label: 'M60', value: 'M60'},
  {label: 'M65', value: 'M65'},
  {label: 'M70', value: 'M70'},
  {label: 'M75', value: 'M75'},
  {label: 'M80', value: 'M80'},
];

const exposureConditionData = [
  {label: 'Mild', value: 'Mild'},
  {label: 'Moderate', value: 'Moderate'},
  {label: 'Severe', value: 'Severe'},
  {label: 'Very Severe', value: 'VerySevere'},
  {label: 'Extreme', value: 'Extreme'},
];

const typeOfCementData = [
  {label: 'PSC', value: 'PSC'},
  {label: 'PPC', value: 'PPC'},
  {label: 'OPC', value: 'OPC'},
];

const aggregateData = [
  {label: '10', value: '10'},
  {label: '20', value: '20'},
  {label: '40', value: '40'},
];

const slumpData = [
  {label: '0', value: '0'},
  {label: '25', value: '25'},
  {label: '50', value: '50'},
  {label: '75', value: '75'},
  {label: '100', value: '100'},
  {label: '125', value: '125'},
  {label: '150', value: '150'},
  {label: '175', value: '175'},
  {label: '200', value: '200'},
];

const shapeAggregateData = [
  {label: 'Angular', value: 'Angular'},
  {label: 'Sub Angular', value: 'SubAngular'},
  {label: 'Gravel With Crushed Particles', value: 'GravelWithCrushedParticles'},
  {label: 'Rounded', value: 'Rounded'},
];

const zoneAggregateData = [
  {label: 'Zone I', value: 'zone1'},
  {label: 'Zone II', value: 'zone2'},
  {label: 'Zone III', value: 'zone3'},
  {label: 'Zone IV', value: 'zone4'},
];

const mineralAdmixtureData = [
  {label: 'Yes', value: 'true'},
  {label: 'No', value: 'false'},
];

const chemicalAdmixtureData = [
  {label: 'No', value: 'No'},
  {label: 'Plasticiser', value: 'Plasticiser'},
  {label: 'Super Plasticiser', value: 'SuperPlasticiser'},
];

const InputScreen = () => {
  const navigation = useNavigation();
  const [gradeValue, setGradeValue] = useState('M10');
  const [exposureValue, setExposureValue] = useState('Mild');
  const [cementValue, setCementValue] = useState('PSC');
  const [aggregateValue, setAggregateValue] = useState('10');
  const [slumpValue, setSlumpValue] = useState('0');
  const [shapeAggregateValue, setShapeAggregateValue] = useState('Angular');
  const [zoneAggregateValue, setZoneAggregateValue] = useState('zone1');
  const [mineralAdmixtureValue, setMineralAdmixtureValue] = useState('true');
  const [chemicalAdmixtureValue, setChemicalAdmixtureValue] = useState('No');
  const [isFocus, setIsFocus] = useState(false);
  const [sgCementvalue, setSgCementvalue] = useState('');
  const [sgMineralAdmixture, setSgMineralAdmixture] = useState('');
  const [sgFineAggregateAdmixture, setSgFineAggregateAdmixture] = useState('');
  const [sgCourseAggregate, setSgCourseAggregate] = useState('');
  const [sgChemicalAdmixture, setSgChemicalAdmixture] = useState('');

  const convertStringtoBoolean = () => {
    if (mineralAdmixtureValue == 'true') {
      return true;
    } else {
      return false;
    }
  };

  return (
    <ScrollView>
      <View style={styles.screenStyle}>
        <Text
          style={{
            padding: 10,
            paddingLeft: 17,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Fill all the details
        </Text>
        <View style={styles.container}>
          <Text style={[styles.label, isFocus && {color: 'blue'}]}>
            Grade of Concrete
          </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            labelField="label"
            valueField="value"
            maxHeight={300}
            data={gradeOfConcreteData}
            placeholder="Select Concrete Grade"
            value={gradeValue}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setGradeValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={styles.container}>
          <Text style={[styles.label, isFocus && {color: 'blue'}]}>
            Exposure Condition
          </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            labelField="label"
            valueField="value"
            maxHeight={300}
            data={exposureConditionData} //
            placeholder="Select Exposure Condition" //
            value={exposureValue} //
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setExposureValue(item.value); //
              setIsFocus(false);
            }}
          />
        </View>

        <View style={styles.container}>
          <Text style={[styles.label, isFocus && {color: 'blue'}]}>
            Type of Cement
          </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            labelField="label"
            valueField="value"
            maxHeight={300}
            data={typeOfCementData}
            placeholder="Select Type of Cement"
            value={cementValue}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setCementValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={styles.container}>
          <Text style={[styles.label, isFocus && {color: 'blue'}]}>
            Maximum Size of Course Aggregate
          </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            labelField="label"
            valueField="value"
            maxHeight={300}
            data={aggregateData}
            placeholder="Select Maximum Size of Course Aggregate"
            value={aggregateValue}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setAggregateValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={styles.container}>
          <Text style={[styles.label, isFocus && {color: 'blue'}]}>
            Workability in terms of Slump Value (mm)
          </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            labelField="label"
            valueField="value"
            maxHeight={300}
            data={slumpData}
            placeholder="Select  Workability in terms of Slump Value (mm)" //
            value={slumpValue}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setSlumpValue(item.value); //
              setIsFocus(false);
            }}
          />
        </View>

        <View style={styles.container}>
          <Text style={[styles.label, isFocus && {color: 'blue'}]}>
            Shape of Course Aggregate
          </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            labelField="label"
            valueField="value"
            maxHeight={300}
            data={shapeAggregateData}
            placeholder="Select Shape of Course Aggregate"
            value={shapeAggregateValue}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setShapeAggregateValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={styles.container}>
          <Text style={[styles.label, isFocus && {color: 'blue'}]}>
            Zone of of Fine Aggregate
          </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            labelField="label"
            valueField="value"
            maxHeight={300}
            data={zoneAggregateData}
            placeholder="Select Zone of of Fine Aggregate"
            value={zoneAggregateValue}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setZoneAggregateValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={styles.container}>
          <Text style={[styles.label, isFocus && {color: 'blue'}]}>
            Use of Mineral Admixtre (FA/GGBS/RHA)
          </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            labelField="label"
            valueField="value"
            maxHeight={300}
            data={mineralAdmixtureData}
            placeholder="Select Use of Mineral Admixtre (FA/GGBS/RHA)" //
            value={mineralAdmixtureValue}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setMineralAdmixtureValue(item.value); //
              setIsFocus(false);
            }}
          />
        </View>

        <View style={styles.container}>
          <Text style={[styles.label, isFocus && {color: 'blue'}]}>
            Use of Chemical Admixture for Workability
          </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            labelField="label"
            valueField="value"
            maxHeight={300}
            data={chemicalAdmixtureData}
            placeholder="Select Use of Chemical Admixture for Workability"
            value={chemicalAdmixtureValue}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setChemicalAdmixtureValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <TextInput
          keyboardType="numeric"
          value={sgCementvalue}
          onChangeText={value => {
            setSgCementvalue(value);
          }}
          placeholder="Enter Specific Gravity of Cement"
          style={{
            borderWidth: 1,
            padding: 10,
            margin: 12,
            borderRadius: 10,
          }}
        />

        <TextInput
          keyboardType="numeric"
          value={sgMineralAdmixture}
          onChangeText={value => {
            setSgMineralAdmixture(value);
          }}
          placeholder="Enter Specific Gravity of Mineral Admixture"
          style={{
            borderWidth: 1,
            padding: 10,
            margin: 12,
            borderRadius: 10,
          }}
        />

        <TextInput
          keyboardType="numeric"
          value={sgFineAggregateAdmixture}
          onChangeText={value => {
            setSgFineAggregateAdmixture(value);
          }}
          placeholder="Enter Specific Gravity of Fine Aggregate"
          style={{
            borderWidth: 1,
            padding: 10,
            margin: 12,
            borderRadius: 10,
          }}
        />

        <TextInput
          keyboardType="numeric"
          value={sgCourseAggregate}
          onChangeText={value => {
            setSgCourseAggregate(value);
          }}
          placeholder="Enter Specific Gravity of Course Aggregate"
          style={{
            borderWidth: 1,
            padding: 10,
            margin: 12,
            borderRadius: 10,
          }}
        />

        <TextInput
          keyboardType="numeric"
          value={sgChemicalAdmixture}
          onChangeText={value => {
            setSgChemicalAdmixture(value);
          }}
          placeholder="Enter Specific Gravity of Chemical Admixture"
          style={{
            borderWidth: 1,
            padding: 10,
            margin: 12,
            borderRadius: 10,
          }}
        />

        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#00c04b',
            margin: 10,
            padding: 8,
            width: '50%',
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.navigate('ResultScreen', {
              grade: gradeValue,
              exposure: exposureValue,
              cement: cementValue,
              aggregate: Number(aggregateValue),
              slump: Number(slumpValue),
              shapeAggregate: shapeAggregateValue,
              zoneAggregate: zoneAggregateValue,
              mineralAdmixture: convertStringtoBoolean(),
              chemicalAdmixture: chemicalAdmixtureValue,
              sgCement: Number(sgCementvalue),
              sgMineralAdmixture: Number(sgMineralAdmixture),
              sgFineAggregateAdmixture: Number(sgFineAggregateAdmixture),
              sgCourseAggregate: Number(sgCourseAggregate),
              sgChemicalAdmixture: Number(sgChemicalAdmixture),
            });
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Start Computing...
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default InputScreen;

const styles = StyleSheet.create({
  screenStyle: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
