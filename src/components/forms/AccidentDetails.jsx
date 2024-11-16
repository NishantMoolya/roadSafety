import React from 'react'
import MultiCheckbox from '../ui/MultiCheckBox'
import SelectBox from '../ui/SelectBox';
import TextInput from '../ui/TextInput';

const AccidentDetails = ({ classificationOfAccident,vehicleType1,vehicleType2,vehicleType3,registrationNo1,registrationNo2,registrationNo3,othersInvolved1,othersInvolved2,othersInvolved3,hitAndRun,handleInput = () => { } }) => {
    const lightConditionsOptions = [
        { label: "Daylight", value: "daylight" },
        { label: "Twilight (Semi-darkness)", value: "twilight" },
        { label: "Dark hours with good street light", value: "dark hours with good street light" },
        { label: "Dark hours with poor street light", value: "dark hours with poor street light" },
        { label: "Dark hours with no street light", value: "dark hours with no street light" },
        { label: "Other", value: 'other' },
      ];

    const classificationOfAccidentOptions = [
        { label: "Fatal", value: "fatal" },
        { label: "Grievous Injury", value: "grievous injury" },
        { label: "Minor Injury", value: "Minor Injury" },
        { label: "Non Injury", value: "Non Injury" },
      ];

    const weatherConditionsOptions = [
        { label: "Fine/Sunny", value: "fine/sunny" },
        { label: "Mist/Fog", value: "mist/fog" },
        { label: "Cloudy", value: "cloudy" },
        { label: "Light Rain", value: "lightRain" },
        { label: "Heavy Rain", value: "heavyRain" },
        { label: "Hail/Sleet", value: "hail/sleet" },
        { label: "Snow", value: "snow" },
        { label: "Strong Wind", value: "strongWind" },
        { label: "Dust Storm", value: "dustStorm" },
        { label: "Other", value: 'other' },
      ];

    const vehicleTypeOptions = [
        { label: "Moped", value: "moped" },
        { label: "Motor cycle/Scooter", value: "motorCycle/Scooter" },
        { label: "Auto rickshaw", value: "autoRickshaw" },
        { label: "Motor Car", value: "MotorCar" },
        { label: "Jeep", value: "jeep" },
        { label: "Taxi", value: "taxi" },
        { label: "Bus", value: "bus" },
        { label: "Truck", value: "truck" },
        { label: "Tempo", value: "tempo" },
        { label: "Articulated vehicle", value: "articulatedVehicle" },
        { label: "Tractor", value: "tractor" },
        { label: "Cycle", value: "cycle" },
        { label: "Cycle rickshaw", value: "cycleRickshaw" },
        { label: "Hand drawn vehicle", value: "handDrawnVehicle" },
        { label: "Animal drawn vehicle", value: "animalDrawnVehicle" },
        { label: "Other", value: 'other' },
      ];

    const othersInvolvedOptions = [
        { label: "Pedestrian", value: "pedestrian" },
        { label: "Animal", value: "animal" },
        { label: "Tree", value: "tree" },
        { label: "Level Crossing", value: "levelCrossing" },
        { label: "Other", value: 'other' },
      ];

    const natureOfAccidentOptions = [
        { label: "Overturning", value: "Overturning" },
        { label: "Head on collision", value: "Head on collision" },
        { label: "Collision brush/Side swipe", value: "Collision brush/Side swipe" },
        { label: "Rear end collision", value: "Rear end collision" },
        { label: "Skidding", value: "Skidding" },
        { label: "Right angled collision", value: "Right angled collision" },
        { label: "Right turn collision", value: "Right turn collision" },
        { label: "Other", value: 'other' },
      ];

    const causeOfAccidentOptions = [
        { label: "Fault of driver of motor vehicle", value: "Fault of driver of motor vehicle" },
        { label: "Fault of cyclist", value: "Fault of cyclist" },
        { label: "Fault of driver of other vehicle", value: "Fault of driver of other vehicle" },
        { label: "Fault of pedestrian", value: "Fault of pedestrian" },
        { label: "Fault of passenger", value: "Fault of passenger" },
        { label: "Defect in mechanical condition of motor vehicle", value: "Defect in mechanical condition of motor vehicle" },
        { label: "Overspeeding", value: "Overspeeding" },
        { label: "Poor light condition", value: "Poor light condition" },
        { label: "Defect in road condition", value: "Defect in road condition" },
        { label: "Result of weather conditions", value: "Result of weather conditions" },
        { label: "Stray animal", value: "Stray animal" },
        { label: "Other", value: 'other' },
      ];

      const hitAndRunOptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
    ];
    return (
    <div className='px-1 py-2 flex flex-col sm:flex-row sm:items-center gap-4 flex-wrap'>
        <MultiCheckbox label={"Light Conditions"} options={lightConditionsOptions} onChange={(val) => handleInput("lightConditions",val)} />
        <SelectBox
                label="Classification of Accident" // Adding a label for the select box
                options={classificationOfAccidentOptions}
                onChange={(val) => handleInput("classificationOfAccident", val)}
                placeholder="Select an option"
                multiple={false}
                value={classificationOfAccident}
            />
        <MultiCheckbox label={"Weather Conditions"} options={weatherConditionsOptions} onChange={(val) => handleInput("weatherConditions",val)} />
        <div className='flex flex-col sm:flex-row gap-2'>
        <SelectBox
                label="Vehicle Type:1" // Adding a label for the select box
                options={vehicleTypeOptions}
                onChange={(val) => handleInput("vehicleType1", val)}
                placeholder="Select an option"
                multiple={false}
                value={vehicleType1}
            />
        <SelectBox
                label="Vehicle Type:2" // Adding a label for the select box
                options={vehicleTypeOptions}
                onChange={(val) => handleInput("vehicleType2", val)}
                placeholder="Select an option"
                multiple={false}
                value={vehicleType2}
            />
        <SelectBox
                label="Vehicle Type:3" // Adding a label for the select box
                options={vehicleTypeOptions}
                onChange={(val) => handleInput("vehicleType3", val)}
                placeholder="Select an option"
                multiple={false}
                value={vehicleType3}
            />
            </div>
            <div className='flex flex-col sm:flex-row gap-2'>
            <TextInput
                label="Registration Number:1"
                placeholder="Enter Registration Number"
                value={registrationNo1} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('registrationNo1', e.target.value)} // Update form state
                required={true} // Mark as required
            />
            <TextInput
                label="Registration Number:2"
                placeholder="Enter Registration Number"
                value={registrationNo2} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('registrationNo2', e.target.value)} // Update form state
                required={true} // Mark as required
            />
            <TextInput
                label="Registration Number:3"
                placeholder="Enter Registration Number"
                value={registrationNo3} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('registrationNo3', e.target.value)} // Update form state
                required={true} // Mark as required
            />
            </div>
            <div className='flex flex-col sm:flex-row gap-2'>
             <SelectBox
                label="Others Involved:1" // Adding a label for the select box
                options={othersInvolvedOptions}
                onChange={(val) => handleInput("othersInvolved1", val)}
                placeholder="Select an option"
                multiple={false}
                value={othersInvolved1}
            />
             <SelectBox
                label="Others Involved:2" // Adding a label for the select box
                options={othersInvolvedOptions}
                onChange={(val) => handleInput("othersInvolved2", val)}
                placeholder="Select an option"
                multiple={false}
                value={othersInvolved2}
            />
             <SelectBox
                label="Others Involved:3" // Adding a label for the select box
                options={othersInvolvedOptions}
                onChange={(val) => handleInput("othersInvolved3", val)}
                placeholder="Select an option"
                multiple={false}
                value={othersInvolved3}
            />
            </div>
            <MultiCheckbox label={"Nature of Accident"} options={natureOfAccidentOptions} onChange={(val) => handleInput("natureOfAccident",val)} />
            <MultiCheckbox label={"Cause of Accident"} options={causeOfAccidentOptions} onChange={(val) => handleInput("causeOfAccident",val)} />
            <SelectBox
                label="Hit and Run" // Adding a label for the select box
                options={hitAndRunOptions}
                onChange={(val) => handleInput("hitAndRun", val)}
                placeholder="Select an option"
                multiple={false}
                value={hitAndRun}
            />
    </div>
  )
}

export default AccidentDetails