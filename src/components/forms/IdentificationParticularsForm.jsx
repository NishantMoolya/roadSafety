import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"


const selectOptions = [{
    label: "Light",
    value: "light"
},
{
    label: "Dark",
    value: "dark"
},
{
    label: "System",
    value: "system"
}];

const IdentificationParticularsForm = () => {
    return (
        <div className='px-1 py-2 flex items-center gap-2 flex-wrap'>
            <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="state">State/Union Territory</Label>
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
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">District</Label>
                <Input type="email" id="email" placeholder="District" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">City/Town/Village</Label>
                <Input type="email" id="email" placeholder="City/Town/Village" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Police Station</Label>
                <Input type="email" id="email" placeholder="Police Station" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">FIR no.</Label>
                <Input type="email" id="email" placeholder="FIR no." />
            </div>
        </div>
    )
}

export default IdentificationParticularsForm