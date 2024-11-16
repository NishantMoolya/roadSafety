import React from 'react'
import SelectBox from '../ui/SelectBox'
import TextInput from '../ui/TextInput'
import TextAreaField from '../ui/TextAreaField';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import MultiCheckbox from '../ui/MultiCheckBox';


const LocationForm = ({ latitude, longitude, roadName, locationArea, classificationOfRoad, intersectionRoadName, locationDetails, accidentImg, accidentVideo, areaType, narrowBridge, handleInput = () => { } }) => {
    const classificationOfRoadOptions = [
        { value: "national highway", label: "National Highway" },
        { value: "state highway", label: "State Highway" },
        { value: "major district road", label: "Major District Road" },
        { value: "other district road", label: "Other District Road" },
        { value: "village road", label: "Village Road" },
        { value: "arterial road", label: "Arterial Road" },
        { value: "outer ring road", label: "Outer Ring Road" },
        { value: "inner ring road", label: "Inner Ring Road" },
    ];
    const locationAreaOptions = [
        { value: "urban", label: "Urban" },
        { value: "rural", label: "Rural" }
    ];

    const narrowBridgeOptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
    ];

    const areaTypeOptions = [
        { label: "School/College", value: 'schoolCollege' },
        { label: "Village", value: 'village' },
        { label: "Industrial Area", value: 'industrialArea' },
        { label: "Religious Place", value: 'religiousPlace' },
        { label: "Recreation Place", value: 'recreationPlace' },
        { label: "Bazaar", value: 'bazaar' },
        { label: "Office", value: 'office' },
        { label: "Hospital", value: 'hospital' },
        { label: "Residential Area", value: 'residentialArea' },
        { label: "Open Area", value: 'openArea' },
        { label: "Encroachments", value: 'encroachments' },
        { label: "Bus Stop", value: 'busStop' },
        { label: "Petrol Pump", value: 'petrolPump' },
        { label: "Pedestrian Crossing", value: 'pedestrianCrossing' },
        { label: "Other", value: 'other' },
      ];

    return (
        <div className='px-1 py-2 flex flex-col sm:flex-row sm:items-center gap-4 flex-wrap'>
            <div className='flex flex-col sm:flex-row gap-2'>
            <TextInput
                label="Latitude"
                placeholder="Enter Latitude"
                value={latitude} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('latitude', e.target.value)} // Update form state
                required={true} // Mark as required
            />
            <TextInput
                label="Longitude"
                placeholder="Enter Longitude"
                value={longitude} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('longitude', e.target.value)} // Update form state
                required={true} // Mark as required
                />
            <TextInput
                label="Name of Road"
                placeholder="Enter Name of Road"
                value={roadName} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('roadName', e.target.value)} // Update form state
                required={true} // Mark as required
                />
            </div>
            <div className='flex flex-col sm:flex-row gap-2 w-full'>
            <SelectBox
                label="Classification of Road" // Adding a label for the select box
                options={classificationOfRoadOptions}
                onChange={(val) => handleInput("classificationOfRoad", val)}
                placeholder="Select an option"
                multiple={false}
                value={classificationOfRoad}
            />
            <SelectBox
                label="Location of Area" // Adding a label for the select box
                options={locationAreaOptions}
                onChange={(val) => handleInput("locationArea", val)}
                placeholder="Select an option"
                multiple={false}
                value={locationArea}
            />
            </div>
            <div className='w-full flex flex-col gap-4'>
            <TextInput
                label="If Intersection, specify the Name of Roads"
                placeholder="Specify the Name of Roads"
                value={intersectionRoadName} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('intersectionRoadName', e.target.value)} // Update form state
                required={true} // Mark as required
                />
            <TextAreaField
                label="Details of Location"
                placeholder="Type Details of Location..."
                value={locationDetails} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('locationDetails', e.target.value)} // Update form state
                required={true} // Mark as required
            />
                </div>
                <div className='flex sm:flex-row flex-col w-full sm:gap-2 gap-4'>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="accidentImg">Photo of Accident Site</Label>
                <Input id="accidentImg" type="file" accept="image/*" onChange={(e) => { handleInput('accidentImg',e.target.files[0])}} />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="accidentImg">CCTV Footage/Video</Label>
                <Input id="accidentImg" type="file" accept="video/*" onChange={(e) => { handleInput('accidentVideo',e.target.files[0])}} />
            </div>
                </div>
            <MultiCheckbox label={"Type of Area"} options={areaTypeOptions} onChange={(val) => handleInput("areaType",val)} />
            <SelectBox
                label="Narrow Bridge/Culvert" // Adding a label for the select box
                options={narrowBridgeOptions}
                onChange={(val) => handleInput("narrowBridge", val)}
                placeholder="Select an option"
                multiple={false}
                value={narrowBridge}
            />
        </div>
    )
}

export default LocationForm