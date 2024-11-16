import React from 'react'
import MultiCheckbox from '../ui/MultiCheckBox';

const CyclistDetails = ({ handleInput = () => { } }) => {
    const cyclingConditionOptions = [
        { label: "Double riding", value: "doubleRiding" },
        { label: "Overloading", value: "overloading" },
        { label: "Not keeping to the left", value: "notKeepingToTheLeft" },
        { label: "Without light at night", value: "withoutLightAtNight" },
        { label: "Going on carriageway, cycle track available", value: "goingOnCarriagewayCycleTrackAvailable" },
        { label: "Cycling in the lane of fast moving vehicle", value: "cyclingInLaneOfFastMovingVehicle" },
        { label: "Cutting in the flow of traffic/Zigzag moving", value: "cuttingInFlowOfTrafficZigzagMoving" },
        { label: "Turning right carelessly/without giving signal", value: "turningRightCarelesslyWithoutGivingSignal" },
        { label: "Towing himself with other vehicle", value: "towingHimselfWithOtherVehicle" },
        { label: "Not observing traffic rules", value: "notObservingTrafficRules" },
        { label: "Confused by traffic", value: "confusedByTraffic" },
        { label: "Rider inexperienced", value: "riderInexperienced" },
        { label: "Loss of control", value: "lossOfControl" },
        { label: "Skidding on wet/Slippery road", value: "skiddingOnWetSlipperyRoad" },
        { label: "Other", value: "other" },
    ];

  return (
    <div className='px-1 py-2 flex items-center gap-2 flex-wrap'>
        <MultiCheckbox label={"Details of Cyclists Involved"} options={cyclingConditionOptions} onChange={(val) => handleInput("detailsOfCyclistsInvolved", val)} />
    </div>
  )
}

export default CyclistDetails