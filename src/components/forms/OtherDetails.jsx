import React from 'react'
import SelectBox from '../ui/SelectBox';
import MultiCheckbox from '../ui/MultiCheckBox';

const OtherDetails = ({ horizontalFeatures,verticalFeatures,surfaceType,conditionSurface,carriageway,junctionType,trafficControlType,cycleTrackProvided,medianOpening,roadDivision,tunnelRoad,footPathProvided,puccaShoulder,handleInput = () => { } }) => {
    const horizontalFeaturesOptions = [
        { label: "Straight road", value: "straightRoad" },
        { label: "Slight curve", value: "slightCurve" },
        { label: "Sharp curve", value: "sharpCurve" },
    ];

    const verticalFeaturesOptions = [
        { label: "Flat road", value: "flatRoad" },
        { label: "Gentle incline", value: "gentleIncline" },
        { label: "Steep incline", value: "steepIncline" },
        { label: "Hump", value: "hump" },
        { label: "Dip", value: "dip" },
    ];

    const roadSurfaceOptions = [
        { label: "Surfaced (blacked topped/concrete)", value: "surfacedBlackedToppedConcrete" },
        { label: "Metalled", value: "metalled" },
        { label: "Kutcha", value: "kutcha" },
    ];

    const conditionSurfaceOptions = [
        { label: "Dry", value: "Dry" },
        { label: "Wet", value: "Wet" }
    ];

    const laneConfigurationOptions = [
        { label: "Single lane", value: "singleLane" },
        { label: "Two lanes", value: "twoLanes" },
        { label: "Three lanes or more without central divider", value: "threeLanesOrMoreWithoutCentralDivider" },
        { label: "Four lanes or more with central divider", value: "fourLanesOrMoreWithCentralDivider" },
    ];

    const natureOfSurfaceOptions = [
        { label: "Good surface", value: "goodSurface" },
        { label: "Loose surface", value: "looseSurface" },
        { label: "Rutted/Potholed", value: "ruttedPotholed" },
        { label: "Slippery surface", value: "slipperySurface" },
        { label: "Snowy", value: "snowy" },
        { label: "Muddy", value: "muddy" },
        { label: "Oily", value: "oily" },
        { label: "Corrugated/Wavy road", value: "corrugatedWavyRoad" },
        { label: "Speed breaker", value: "speedBreaker" },
        { label: "Road under repair/construction", value: "roadUnderRepairConstruction" },
        { label: "Other", value: "other" },
    ];

    const trafficRegulationOptions = [
        { label: "One way street", value: "oneWayStreet" },
        { label: "Parking prohibited", value: "parkingProhibited" },
        { label: "Entry of slow moving vehicles prohibited", value: "entryOfSlowMovingVehiclesProhibited" },
        { label: "Speed restrictions", value: "speedRestrictions" },
        { label: "Entry of heavy vehicles prohibited", value: "entryOfHeavyVehiclesProhibited" },
        { label: "Other", value: "other" },
    ];

    const binaryOptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
    ];

    const roadDivisionOptions = [
        { value: "Divided", label: "Divided" },
        { value: "Undivided", label: "Undivided" }
    ];

    const junctionTypeOptions = [
        { label: "T junction", value: "tJunction" },
        { label: "Y junction", value: "yJunction" },
        { label: "Four arm junction", value: "fourArmJunction" },
        { label: "Staggered junction", value: "staggeredJunction" },
        { label: "Junction with more than four arms", value: "junctionWithMoreThanFourArms" },
        { label: "Roundabout junction", value: "roundaboutJunction" },
        { label: "Grade-separated (Underpass)", value: "gradeSeparatedUnderpass" },
        { label: "Grade-separated (Overpass)", value: "gradeSeparatedOverpass" },
        { label: "Manned rail crossing", value: "mannedRailCrossing" },
        { label: "Unmanned rail crossing", value: "unmannedRailCrossing" },
    ];

    const trafficControlOptions = [
        { label: "Traffic light signal", value: "trafficLightSignal" },
        { label: "Police controlled", value: "policeControlled" },
        { label: "Stop sign", value: "stopSign" },
        { label: "Flashing signal/Blinker", value: "flashingSignalBlinker" },
        { label: "Uncontrolled", value: "uncontrolled" },
    ];

    return (
    <div className='px-1 py-2 flex flex-col sm:flex-row sm:items-center gap-4 flex-wrap'>
        <SelectBox
                label="Horizontal Features of the Road" // Adding a label for the select box
                options={horizontalFeaturesOptions}
                onChange={(val) => handleInput("horizontalFeatures", val)}
                placeholder="Select an option"
                multiple={false}
                value={horizontalFeatures}
            />
        <SelectBox
                label="Vertical Features of the Road" // Adding a label for the select box
                options={verticalFeaturesOptions}
                onChange={(val) => handleInput("verticalFeatures", val)}
                placeholder="Select an option"
                multiple={false}
                value={verticalFeatures}
            />
            <MultiCheckbox label={"Nature of Surface"} options={natureOfSurfaceOptions} onChange={(val) => handleInput("natureOfSurface", val)} />
            <SelectBox
                label="Type of Surface" // Adding a label for the select box
                options={roadSurfaceOptions}
                onChange={(val) => handleInput("surfaceType", val)}
                placeholder="Select an option"
                multiple={false}
                value={surfaceType}
            />
            <SelectBox
                label="Condition of Surface" // Adding a label for the select box
                options={conditionSurfaceOptions}
                onChange={(val) => handleInput("conditionSurface", val)}
                placeholder="Select an option"
                multiple={false}
                value={conditionSurface}
            />
            <SelectBox
                label="Carriageway" // Adding a label for the select box
                options={laneConfigurationOptions}
                onChange={(val) => handleInput("carriageway", val)}
                placeholder="Select an option"
                multiple={false}
                value={carriageway}
            />
            <SelectBox
                label="Cycle Track provided" // Adding a label for the select box
                options={binaryOptions}
                onChange={(val) => handleInput("cycleTrackProvided", val)}
                placeholder="Select an option"
                multiple={false}
                value={cycleTrackProvided}
            />
            <SelectBox
                label="Median Opening" // Adding a label for the select box
                options={binaryOptions}
                onChange={(val) => handleInput("medianOpening", val)}
                placeholder="Select an option"
                multiple={false}
                value={medianOpening}
            />
            <SelectBox
                label="Tunnel Road" // Adding a label for the select box
                options={binaryOptions}
                onChange={(val) => handleInput("tunnelRoad", val)}
                placeholder="Select an option"
                multiple={false}
                value={tunnelRoad}
            />
            <SelectBox
                label="Foot Path provided" // Adding a label for the select box
                options={binaryOptions}
                onChange={(val) => handleInput("footPathProvided", val)}
                placeholder="Select an option"
                multiple={false}
                value={footPathProvided}
            />
            <SelectBox
                label="Pucca Shoulder provided" // Adding a label for the select box
                options={binaryOptions}
                onChange={(val) => handleInput("puccaShoulder", val)}
                placeholder="Select an option"
                multiple={false}
                value={puccaShoulder}
            />
            <SelectBox
                label="Road Division" // Adding a label for the select box
                options={roadDivisionOptions}
                onChange={(val) => handleInput("roadDivision", val)}
                placeholder="Select an option"
                multiple={false}
                value={roadDivision}
            />
            <SelectBox
                label="Types of Junction" // Adding a label for the select box
                options={junctionTypeOptions}
                onChange={(val) => handleInput("junctionType", val)}
                placeholder="Select an option"
                multiple={false}
                value={junctionType}
            />
            <SelectBox
                label="Type of Traffic Control" // Adding a label for the select box
                options={trafficControlOptions}
                onChange={(val) => handleInput("trafficControlType", val)}
                placeholder="Select an option"
                multiple={false}
                value={trafficControlType}
            />
            <MultiCheckbox label={"Traffic Regulations"} options={trafficRegulationOptions} onChange={(val) => handleInput("trafficRegulations", val)} />
    </div>
  )
}

export default OtherDetails