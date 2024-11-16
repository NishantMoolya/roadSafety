import React from 'react'
import { DateTimePicker } from '../ui/DateTimePicker'
import SelectBox from '../ui/SelectBox';
import { Label } from '../ui/label';

const DateForm = ({ holiday,handleInput = () => { } }) => {
    const holidayOptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
    ];

  return (
    <div className='px-1 py-2 flex flex-col gap-4 flex-wrap'>
      <div className='flex flex-col gap-1 self-start'>
        <Label htmlFor="dateTime">Date and Time</Label>
        <DateTimePicker onChange={(val) => handleInput("dateTime", val)} />
      </div>
        <SelectBox
                label="Holiday" // Adding a label for the select box
                options={holidayOptions}
                onChange={(val) => handleInput("holiday", val)}
                placeholder="Select an option"
                multiple={false}
                value={holiday}
            />
    </div>
  )
}

export default DateForm