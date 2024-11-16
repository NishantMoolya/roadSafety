import React from 'react'
import TextInput from '../ui/TextInput'
import SelectBox from '../ui/SelectBox'
import MultiCheckbox from '../ui/MultiCheckBox';

const PedestrianDetails = ({ namePrefix,firstName,lastName,middleName,sex,age,occupation,addressStreet,addressCity,addressState,handleInput = () => { }}) => {
    const sexOptions = [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Transgender", value: "transgender" },
    ];

    const namePrefixOptions = [
        { label: "Mr", value: "mr" },
        { label: "Mrs", value: "mrs" },
        { label: "Master", value: "master" },
        { label: "Ms", value: "ms" },
    ];

    const injuryOptions = [
        { label: "Contusion/Crush", value: "contusionCrush" },
        { label: "Amputation", value: "amputation" },
        { label: "Concussion", value: "concussion" },
        { label: "Other", value: "other" },
        { label: "Burn", value: "burn" },
        { label: "Superficial injury", value: "superficialInjury" },
        { label: "Sprain/Strain", value: "sprainStrain" },
        { label: "Dislocation", value: "dislocation" },
        { label: "Foreign body", value: "foreignBody" },
        { label: "Fracture", value: "fracture" },
        { label: "Open wound", value: "openWound" },
        { label: "Internal injury", value: "internalInjury" },
        { label: "Dermatitis", value: "dermatitis" },
    ];

    const bodyPartOptions = [
        { label: "Head/Face", value: "headFace" },
        { label: "Shoulder/Arms", value: "shoulderArms" },
        { label: "Back", value: "back" },
        { label: "Eye", value: "eye" },
        { label: "Foot/Toes", value: "footToes" },
        { label: "Other", value: "other" },
        { label: "Internal organs", value: "internalOrgans" },
        { label: "Hip/Leg", value: "hipLeg" },
        { label: "Hand/Fingers", value: "handFingers" },
        { label: "Trunk (except back)", value: "trunkExceptBack" },
    ];

    const pedestrianConditionOptions = [
        { label: "Intoxicated/Drugged", value: "intoxicatedDrugged" },
        { label: "School child", value: "schoolChild" },
        { label: "Pedestrian deaf, blind or otherwise infirm", value: "pedestrianDeafBlindInfirm" },
        { label: "Crossing at intersection with signal", value: "crossingAtIntersectionWithSignal" },
        { label: "Crossing at intersection against signal", value: "crossingAtIntersectionAgainstSignal" },
        { label: "Crossing at intersection diagonally", value: "crossingAtIntersectionDiagonally" },
        { label: "Crossing at pedestrian crossing", value: "crossingAtPedestrianCrossing" },
        { label: "Crossing not at pedestrian crossing", value: "crossingNotAtPedestrianCrossing" },
        { label: "Coming from behind parked vehicle", value: "comingFromBehindParkedVehicle" },
        { label: "Walking on road with traffic, sidewalk not available", value: "walkingOnRoadWithTrafficSidewalkNotAvailable" },
        { label: "Walking on road with traffic, sidewalk available", value: "walkingOnRoadWithTrafficSidewalkAvailable" },
        { label: "Walking on road against traffic, sidewalk not available", value: "walkingOnRoadAgainstTrafficSidewalkNotAvailable" },
        { label: "Walking on road against traffic, sidewalk available", value: "walkingOnRoadAgainstTrafficSidewalkAvailable" },
        { label: "Pushing or working on vehicle", value: "pushingOrWorkingOnVehicle" },
        { label: "Others working on vehicle", value: "othersWorkingOnVehicle" },
        { label: "Playing on road", value: "playingOnRoad" },
        { label: "Hanging on to vehicle", value: "hangingOnToVehicle" },
        { label: "Sleeping or squatting on the road", value: "sleepingOrSquattingOnTheRoad" },
        { label: "Dismounting or mounting moving vehicle", value: "dismountingOrMountingMovingVehicle" },
        { label: "Dismounting or mounting stationary vehicle", value: "dismountingOrMountingStationaryVehicle" },
        { label: "Not on road", value: "notOnRoad" },
        { label: "Other", value: "other" },
    ];

    return (
    <div className='px-1 py-2 flex flex-col sm:flex-row sm:items-center gap-4 flex-wrap'>
         <SelectBox
                label="Prefix" // Adding a label for the select box
                options={namePrefixOptions}
                onChange={(val) => handleInput("namePrefix", val)}
                placeholder="Select an option"
                multiple={false}
                value={namePrefix}
            />
             <div className='flex sm:flex-row flex-col sm:items-center gap-2 flex-wrap'>
            <TextInput
                label="First Name"
                placeholder=""
                value={firstName} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('firstName', e.target.value)} // Update form state
                required={true} // Mark as required
            />
            <TextInput
                label="Middle Name"
                placeholder=""
                value={middleName} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('middleName', e.target.value)} // Update form state
                required={true} // Mark as required
            />
            <TextInput
                label="Last Name"
                placeholder=""
                value={lastName} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('lastName', e.target.value)} // Update form state
                required={true} // Mark as required
            />
            </div>
            <SelectBox
                label="Sex" // Adding a label for the select box
                options={sexOptions}
                onChange={(val) => handleInput("sex", val)}
                placeholder="Select an option"
                multiple={false}
                value={sex}
            />
            <TextInput
                label="Age"
                placeholder=""
                type='number'
                value={age} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('age', e.target.value)} // Update form state
                required={true} // Mark as required
            />
            <TextInput
                label="Occupation"
                placeholder=""
                value={occupation} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('occupation', e.target.value)} // Update form state
                required={true} // Mark as required
            />
            <TextInput
                label="Street"
                placeholder=""
                value={addressStreet} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('addressStreet', e.target.value)} // Update form state
                required={true} // Mark as required
            />
            <TextInput
                label="City"
                placeholder=""
                value={addressCity} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('addressCity', e.target.value)} // Update form state
                required={true} // Mark as required
            />
            <TextInput
                label="State"
                placeholder=""
                value={addressState} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('addressState', e.target.value)} // Update form state
                required={true} // Mark as required
            />
            <MultiCheckbox label={"Nature of Injury"} options={injuryOptions} onChange={(val) => handleInput("natureOfInjury", val)} />
            <MultiCheckbox label={"Location of Injury"} options={bodyPartOptions} onChange={(val) => handleInput("locationOfInjury", val)} />
            <MultiCheckbox label={"Particulars of Pedestrian"} options={pedestrianConditionOptions} onChange={(val) => handleInput("particularsOfPedestrian", val)} />
    </div>
  )
}

export default PedestrianDetails