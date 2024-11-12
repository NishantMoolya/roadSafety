import React from 'react'
import IdentificationParticularsForm from './forms/IdentificationParticularsForm'
import FormAccordion from './ui/FormAccordion'
import LocationForm from './forms/LocationForm'
import DateForm from './forms/DateForm'

const AccidentForm = () => {
  return (
    <div className='h-screen w-full sm:max-w-[800px] rounded-md shadow-md p-2'>
        <FormAccordion label={'Identification Particulars'}>
            <IdentificationParticularsForm />
        </FormAccordion>
        <FormAccordion label={'Location'}>
            <LocationForm />
        </FormAccordion>
        <FormAccordion label={'Date, Day and Time'}>
            <DateForm />
        </FormAccordion>
    </div>
  )
}

export default AccidentForm