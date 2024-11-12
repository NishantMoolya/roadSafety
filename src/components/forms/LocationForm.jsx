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
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"


const LocationForm = () => {
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

    return (
        <div className='px-1 py-2 flex items-center gap-2 flex-wrap'>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Latitude</Label>
                <Input type="email" id="email" placeholder="District" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Longitude</Label>
                <Input type="email" id="email" placeholder="District" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Name of Road</Label>
                <Input type="email" id="email" placeholder="District" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="state">Classification of Road</Label>
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
                <Label htmlFor="state">Location of Area</Label>
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
                <Label htmlFor="picture">Photo of Accident Site</Label>
                <Input id="picture" type="file" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">CCTV Footage/Video</Label>
                <Input id="picture" type="file" />
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Longitude</Label>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Details of Location</Label>
                <Textarea />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">If Intersection, specify the Name of Roads</Label>
                <Input type="email" id="email" placeholder="District" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="state">Narrow Bridge/Culvert</Label>
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
        </div>
    )
}

export default LocationForm