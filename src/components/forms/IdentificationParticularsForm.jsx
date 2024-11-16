import SelectBox from '../ui/SelectBox';
import TextInput from '../ui/TextInput';

const IdentificationParticularsForm = ({ state,district,city,policeStation,firNo,handleInput=()=>{} }) => {
    const options = [
        { value: "andhra pradesh", label: "Andhra Pradesh" },
        { value: "arunachal pradesh", label: "Arunachal Pradesh" },
        { value: "assam", label: "Assam" },
        { value: "bihar", label: "Bihar" },
        { value: "chhattisgarh", label: "Chhattisgarh" },
        { value: "goa", label: "Goa" },
        { value: "gujarat", label: "Gujarat" },
        { value: "haryana", label: "Haryana" },
        { value: "himachal pradesh", label: "Himachal Pradesh" },
        { value: "jharkhand", label: "Jharkhand" },
        { value: "karnataka", label: "Karnataka" },
        { value: "kerala", label: "Kerala" },
        { value: "madhya pradesh", label: "Madhya Pradesh" },
        { value: "maharashtra", label: "Maharashtra" },
        { value: "manipur", label: "Manipur" },
        { value: "meghalaya", label: "Meghalaya" },
        { value: "mizoram", label: "Mizoram" },
        { value: "nagaland", label: "Nagaland" },
        { value: "odisha", label: "Odisha" },
        { value: "punjab", label: "Punjab" },
        { value: "rajasthan", label: "Rajasthan" },
        { value: "sikkim", label: "Sikkim" },
        { value: "tamil nadu", label: "Tamil Nadu" },
        { value: "telangana", label: "Telangana" },
        { value: "tripura", label: "Tripura" },
        { value: "uttar pradesh", label: "Uttar Pradesh" },
        { value: "uttarakhand", label: "Uttarakhand" },
        { value: "west bengal", label: "West Bengal" },
        { value: "andaman and nicobar islands", label: "Andaman and Nicobar Islands" },
        { value: "chandigarh", label: "Chandigarh" },
        { value: "dadra and nagar haveli and daman and diu", label:
          'Dadra and Nagar Haveli and Daman and Diu' 
        },
        { value: 'delhi (national capital territory)', label:
          'Delhi (National Capital Territory)' 
        },
        { value: 'jammu and kashmir', label:
          'Jammu and Kashmir'
        },
        { value: 'ladakh', label:
          'Ladakh'
        },
        { value: 'lakshadweep', label:
          'Lakshadweep'
        },
        { value: 'puducherry', label:
          'Puducherry'
        }
      ]

    return (
        <div className='px-1 py-2 flex flex-col sm:flex-row sm:items-center gap-4 flex-wrap'>
            <SelectBox
                label="State/Union Territory" // Adding a label for the select box
                options={options}
                onChange={(val) => handleInput("state",val)}
                placeholder="Select an option"
                multiple={false}
                value={state}
            />
             <TextInput
        label="District"
        placeholder="Enter District"
        value={district} // Controlled value; you can manage this with state or form library
        onChange={(e) => handleInput('district',e.target.value)} // Update form state
        required={true} // Mark as required
      />
             <TextInput
        label="City/Town/Village"
        placeholder="Enter City/Town/Village"
        value={city} // Controlled value; you can manage this with state or form library
        onChange={(e) => handleInput('city',e.target.value)} // Update form state
        required={true} // Mark as required
      />
             <TextInput
        label="Police Station"
        placeholder="Enter Police Station"
        value={policeStation} // Controlled value; you can manage this with state or form library
        onChange={(e) => handleInput('policeStation',e.target.value)} // Update form state
        required={true} // Mark as required
      />
             <TextInput
        label="FIR Number"
        placeholder="Enter FIR Number"
        value={firNo} // Controlled value; you can manage this with state or form library
        onChange={(e) => handleInput('firNo',e.target.value)} // Update form state
        required={true} // Mark as required
      />
        </div>
    )
}

export default IdentificationParticularsForm