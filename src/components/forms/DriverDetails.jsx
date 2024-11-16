import React from 'react'
import SelectBox from '../ui/SelectBox';
import TextInput from '../ui/TextInput';
import { DateTimePicker } from '../ui/DateTimePicker';
import { Label } from "@/components/ui/label";
import MultiCheckbox from '../ui/MultiCheckBox';

const DriverDetails = ({ namePrefix, firstName, lastName, middleName, sex, age, occupation, addressStreet, addressCity, addressState, licenseType, lincenseNo, placeOfIssue, vehicleLoading, rightHandDriving, certificateOfFitness, insuranceCompanyName, insuranceType, insuranceNumber, handleInput = () => { } }) => {
    const educationOptions = [
        { label: "Elementary Education", value: "elementaryEducation" },
        { label: "High School", value: "highSchool" },
        { label: "Higher Secondary School", value: "higherSecondarySchool" },
        { label: "Undergraduate", value: "undergraduate" },
        { label: "Postgraduate", value: "postgraduate" },
        { label: "Other", value: "other" },
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

    const vehicleOwnershipOptions = [
        { label: "Owner of private vehicle", value: "ownerOfPrivateVehicle" },
        { label: "Owner of public/commercial vehicle", value: "ownerOfPublicCommercialVehicle" },
        { label: "Paid driver", value: "paidDriver" },
        { label: "Other", value: "other" },
    ];

    const trafficViolationOptions = [
        { label: "Consumption of alcohol/Drug", value: "consumptionOfAlcoholDrug" },
        { label: "Exceeded lawful speed", value: "exceededLawfulSpeed" },
        { label: "Did not give Right of Way to pedestrian", value: "didNotGiveRightOfWayToPedestrian" },
        { label: "Followed too closely", value: "followedTooClosely" },
        { label: "Overtaking on hill", value: "overtakingOnHill" },
        { label: "Overtaking on curve", value: "overtakingOnCurve" },
        { label: "Cut in sharply after overtaking", value: "cutInSharplyAfterOvertaking" },
        { label: "Other improper overtaking", value: "otherImproperOvertaking" },
        { label: "On wrong side of road", value: "onWrongSideOfRoad" },
        { label: "Failed to give signal", value: "failedToGiveSignal" },
        { label: "Gave improper signal", value: "gaveImproperSignal" },
        { label: "Improper turn", value: "improperTurn" },
        { label: "Disregarded police officer", value: "disregardedPoliceOfficer" },
        { label: "Disregarded traffic light signal", value: "disregardedTrafficLightSignal" },
        { label: "Disregarded stop sign", value: "disregardedStopSign" },
        { label: "Improper starting from parked position", value: "improperStartingFromParkedPosition" },
        { label: "Wrong parking", value: "wrongParking" },
        { label: "Asleep/Fatigued/Sick", value: "asleepFatiguedSick" },
        { label: "Inattentive/Attention diverted at the moment", value: "inattentiveAttentionDivertedAtMoment" },
        { label: "Improper use of headlights causing glare", value: "improperUseOfHeadlightsCausingGlare" },
        { label: "Other", value: "other" },
    ];

    const drivingManeuverOptions = [
        { label: "Diverging", value: "diverging" },
        { label: "Merging", value: "merging" },
        { label: "Crossing", value: "crossing" },
        { label: "Stationary", value: "stationary" },
        { label: "Temporarily held up", value: "temporarilyHeldUp" },
        { label: "Parked", value: "parked" },
        { label: "Stopping", value: "stopping" },
        { label: "Starting from near side", value: "startingFromNearSide" },
        { label: "Starting from off side", value: "startingFromOffSide" },
        { label: "Turning right", value: "turningRight" },
        { label: "Turning left", value: "turningLeft" },
        { label: "Making U turn", value: "makingUTurn" },
        { label: "Going ahead, Overtaking", value: "goingAheadOvertaking" },
        { label: "Going ahead, Not overtaking", value: "goingAheadNotOvertaking" },
        { label: "Using private entrance", value: "usingPrivateEntrance" },
        { label: "Reversing", value: "reversing" },
        { label: "Other", value: "other" },
    ];

    const vehicleDefectOptions = [
        { label: "Defective brakes", value: "defectiveBrakes" },
        { label: "Defective steering", value: "defectiveSteering" },
        { label: "Punctured/Burst tyres", value: "puncturedBurstTyres" },
        { label: "Bald tyre", value: "baldTyre" },
        { label: "Other", value: "other" },
    ];

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

    const licenseTypeOptions = [
        { label: "Learner", value: "learner" },
        { label: "Provisional/Probationary", value: "provisionalProbationary" },
        { label: "Standard license", value: "standardLicense" },
        { label: "No license", value: "noLicense" },
        { label: "Expired or Disqualified", value: "expiredOrDisqualified" },
        { label: "Incorrect class of license", value: "incorrectClassOfLicense" },
    ];

    const loadingConditionOptions = [
        { label: "Overloaded", value: "overloaded" },
        { label: "Overcrowded", value: "overcrowded" },
        { label: "Load protruding", value: "loadProtruding" },
        { label: "Not applicable", value: "notApplicable" },
    ];

    const rightHandDrivingOptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
    ];

    const certificateOfFitnessOptions = [
        { value: "In Force", label: "inForce" },
        { value: "Not In Force(Expired)", label: "notInForce" }
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
            <div className='flex sm:flex-row flex-col sm:items-center gap-2 flex-wrap'>
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
            </div>
            <MultiCheckbox label={"Education"} options={educationOptions} onChange={(val) => handleInput("education", val)} />
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
            <MultiCheckbox label={"Person Driving the Vehicle"} options={vehicleOwnershipOptions} onChange={(val) => handleInput("personDriving", val)} />
            <SelectBox
                label="Type of License" // Adding a label for the select box
                options={licenseTypeOptions}
                onChange={(val) => handleInput("licenseType", val)}
                placeholder="Select an option"
                multiple={false}
                value={licenseType}
            />
            <TextInput
                label="License Number"
                placeholder=""
                value={lincenseNo} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('lincenseNo', e.target.value)} // Update form state
                required={true} // Mark as required
            />
            <div className='flex flex-col gap-1'>
            <Label htmlFor="dateTime">Date of Issue</Label>
            <DateTimePicker onChange={(val) => handleInput("dateOfIssue", val)} />
            </div>
            <div className='flex flex-col gap-1'>
            <Label htmlFor="dateTime">Date of Expiry</Label>
            <DateTimePicker onChange={(val) => handleInput("dateOfExpiry", val)} />
            </div>
            <TextInput
                label="Place of Issue"
                placeholder=""
                value={placeOfIssue} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('placeOfIssue', e.target.value)} // Update form state
                required={true} // Mark as required
            />
            <MultiCheckbox label={"Responsibility of Driver"} options={trafficViolationOptions} onChange={(val) => handleInput("responsibilityDriver", val)} />
            <MultiCheckbox label={"Type of Manoeuvre"} options={drivingManeuverOptions} onChange={(val) => handleInput("manoeuvreType", val)} />
            <SelectBox
                label="Loading of Vehicle" // Adding a label for the select box
                options={loadingConditionOptions}
                onChange={(val) => handleInput("vehicleLoading", val)}
                placeholder="Select an option"
                multiple={false}
                value={vehicleLoading}
            />
            <SelectBox
                label="Right Hand Driving" // Adding a label for the select box
                options={rightHandDrivingOptions}
                onChange={(val) => handleInput("rightHandDriving", val)}
                placeholder="Select an option"
                multiple={false}
                value={rightHandDriving}
            />
            <MultiCheckbox label={"Vehicle Defect"} options={vehicleDefectOptions} onChange={(val) => handleInput("vehicleDefect", val)} />
            <SelectBox
                label="Certificate of Fitness in the case of Commercial Vehicle" // Adding a label for the select box
                options={certificateOfFitnessOptions}
                onChange={(val) => handleInput("certificateOfFitness", val)}
                placeholder="Select an option"
                multiple={false}
                value={certificateOfFitness}
            />
            <div className='flex sm:flex-row flex-col sm:items-center gap-2 flex-wrap'>
            <TextInput
                label="Name of Insurance Company"
                placeholder=""
                value={insuranceCompanyName} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('insuranceCompanyName', e.target.value)} // Update form state
                required={true} // Mark as required
            />
            <TextInput
                label="Insurance Number"
                placeholder=""
                value={insuranceNumber} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('insuranceNumber', e.target.value)} // Update form state
                required={true} // Mark as required
            />
            <TextInput
                label="Type of Insurance"
                placeholder=""
                value={insuranceType} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('insuranceType', e.target.value)} // Update form state
                required={true} // Mark as required
            />
            </div>
        </div>
    )
}

export default DriverDetails