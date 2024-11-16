"use client"
import React from 'react'
import TextAreaField from '../ui/TextAreaField'
import SelectBox from '../ui/SelectBox'
import TextInput from '../ui/TextInput'
import { DateTimePicker } from '../ui/DateTimePicker'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const DeclarationDetails = ({ handleInput=()=>{} }) => {
    const financialRangeOptions = [
        { label: "Less than 1 lakh", value: "lessThan1Lakh" },
        { label: "1-2 lakh", value: "1To2Lakh" },
        { label: "2-3 lakh", value: "2To3Lakh" },
        { label: "More than 3 lakh", value: "moreThan3Lakh" },
    ];

    const namePrefixOptions = [
        { label: "Mr", value: "mr" },
        { label: "Mrs", value: "mrs" },
        { label: "Master", value: "master" },
        { label: "Ms", value: "ms" },
    ];

    const router = useRouter();
  const handlePrevPage = () => {
    router.back();
  }

  return (
    <div className='px-1 py-2 flex flex-col gap-4 flex-wrap'>
        <SelectBox
                label="Approximate Estimation of Combined Damage to all Vehicles and Property" // Adding a label for the select box
                options={financialRangeOptions}
                onChange={(val) => handleInput}
                placeholder="Select an option"
                multiple={false}
                // value={narrowBridge}
            />
         <TextAreaField
                label="Brief Description of the Accident"
                // placeholder="Type Details of Location..."
                // value={locationDetails} // Controlled value; you can manage this with state or form library
                // onChange={(e) => handleInput('locationDetails', e.target.value)} // Update form state
                required={true} // Mark as required
            />
             <TextAreaField
                label="Result of Investigation and Court Proceedings"
                // placeholder="Type Details of Location..."
                // value={locationDetails} // Controlled value; you can manage this with state or form library
                // onChange={(e) => handleInput('locationDetails', e.target.value)} // Update form state
                required={true} // Mark as required
            />
            <SelectBox
                label="Prefix" // Adding a label for the select box
                options={namePrefixOptions}
                onChange={(val) => handleInput("namePrefix", val)}
                placeholder="Select an option"
                multiple={false}
                // value={namePrefix}
            />
            <div className='flex sm:flex-row flex-col sm:items-center gap-2 flex-wrap'>
            <TextInput
                label="First Name"
                placeholder=""
                // value={firstName} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('firstName', e.target.value)} // Update form state
                required={true} // Mark as required
                />
            <TextInput
                label="Middle Name"
                placeholder=""
                // value={middleName} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('middleName', e.target.value)} // Update form state
                required={true} // Mark as required
            />
            <TextInput
                label="Last Name"
                placeholder=""
                // value={lastName} // Controlled value; you can manage this with state or form library
                onChange={(e) => handleInput('lastName', e.target.value)} // Update form state
                required={true} // Mark as required
                />
                </div>
            <div className='flex flex-col gap-1'>
            <p className='text-lg font-semibold capitalize'>Declaration</p>
            <p className='font-semibold text-sm text-slate-500'>The above is a true statement of the facts and matters relating to the accident in respect of which this report is made. I solemnly and sincerely declare that, to the best of my knowledge, the information given in this Accident Report Form is true and correct in every respect.</p>
            </div>
            <span className='self-start'><DateTimePicker onChange={(val) => handleInput("dateOfExpiry", val)} /></span>
            <div className='flex flex-wrap justify-between'>
            <Button onClick={handlePrevPage} >Back</Button>
            <div className='flex items-center gap-2'>
            <Button onClick={() => alert('submitted successfully')} >Submit</Button>
            <Button onClick={() => alert('document printed successfully')} >Print</Button>
            </div>
            </div>
    </div>
  )
}

export default DeclarationDetails