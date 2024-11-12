"use client"

import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
// import { DateTimePicker } from '@/components/ui/datetime-picker';

const DateForm = () => {
    const selectOptions = [{
        label: "Yes",
        value: "yes"
    },
    {
        label: "No",
        value: "no"
    }];

    const [date12, setDate12] = useState(null);

  return (
    <div className='px-1 py-2 flex items-center gap-2 flex-wrap'>
        <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="state">Holiday</Label>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            selectOptions.map((item, ind) => <SelectItem key={ind} value={item.value}>{item.label}</SelectItem>)
                        }
                    </SelectContent>
                </Select>
            </div>
            <div className="flex w-72 flex-col gap-2">
        <Label>12 Hour</Label>
        {/* <DateTimePicker hourCycle={12} value={date12} onChange={setDate12} /> */}
      </div>
    </div>
  )
}

export default DateForm