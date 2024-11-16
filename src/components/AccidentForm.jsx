"use client"
import React, { useState } from 'react'
import IdentificationParticularsForm from './forms/IdentificationParticularsForm'
import FormAccordion from './ui/FormAccordion'
import LocationForm from './forms/LocationForm'
import DateForm from './forms/DateForm'
import { initFormData } from '@/data/accidentFormInitData'
import AccidentDetails from './forms/AccidentDetails'
import DriverDetails from './forms/DriverDetails'
import PedestrianDetails from './forms/PedestrianDetails'
import CyclistDetails from './forms/CyclistDetails'
import OtherDetails from './forms/OtherDetails'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const AccidentForm = () => {
  const [formData, setFormData] = useState(initFormData);

  const handleIdentification = (name,value) => {
    setFormData(p => ({...p,identification:{...p.identification,[name]:value}}));
  }

  const handleLocation = (name,value) => {
    setFormData(p => ({...p,location:{...p.location,[name]:value}}));
  }

  const handleDateTime = (name,value) => {
    setFormData(p => ({...p,dateTime:{...p.dateTime,[name]:value}}));
  }

  const handleAccidentDetails = (name,value) => {
    setFormData(p => ({...p,accidentDetails:{...p.accidentDetails,[name]:value}}));
  }

  const handleDriverDetails1 = (name,value) => {
    setFormData(p => ({...p,driverDetails1:{...p.driverDetails1,[name]:value}}));
  }
  const handleDriverDetails2 = (name,value) => {
    setFormData(p => ({...p,driverDetails2:{...p.driverDetails2,[name]:value}}));
  }
  const handleDriverDetails3 = (name,value) => {
    setFormData(p => ({...p,driverDetails3:{...p.driverDetails3,[name]:value}}));
  }

  const handlePedestrianDetails1 = (name,value) => {
    setFormData(p => ({...p,pedestrianDetails1:{...p.pedestrianDetails1,[name]:value}}));
  }
  const handlePedestrianDetails2 = (name,value) => {
    setFormData(p => ({...p,pedestrianDetails2:{...p.pedestrianDetails2,[name]:value}}));
  }
  const handlePedestrianDetails3 = (name,value) => {
    setFormData(p => ({...p,pedestrianDetails3:{...p.pedestrianDetails3,[name]:value}}));
  }

  const handleCyclistDetails = (name,value) => {
    setFormData(p => ({...p,cyclistDetails:{...p.cyclistDetails,[name]:value}}));
  }

  const handleOtherDetails = (name,value) => {
    setFormData(p => ({...p,OtherDetails:{...p.OtherDetails,[name]:value}}));
  }

  const router = useRouter();
  const handleNextPage = () => {
    router.push('/submit');
  }

  return (
    <div className='w-full sm:max-w-[800px] rounded-md shadow-md p-2'>
      <p className='text-xl font-semibold capitalize text-slate-700'>Road Accident Form</p>
      <p className='text-slate-700'>For no response write NIL</p>
        <FormAccordion label={'Identification Particulars'}>
            <IdentificationParticularsForm city={formData.identification.city} district={formData.identification.district} firNo={formData.identification.firNo} policeStation={formData.identification.policeStation} state={formData.identification.state} handleInput={handleIdentification} />
        </FormAccordion>
        <FormAccordion label={'Location'}>
            <LocationForm latitude={formData.location.latitude} longitude={formData.location.longitude} accidentImg={formData.location.accidentImg} accidentVideo={formData.location.accidentVideo} areaType={formData.location.areaType} classificationOfRoad={formData.location.classificationOfRoad} intersectionRoadName={formData.location.intersectionRoadName} locationArea={formData.location.locationArea} locationDetails={formData.location.locationDetails} narrowBridge={formData.location.narrowBridge} roadName={formData.location.roadName} handleInput={handleLocation} />
        </FormAccordion>
        <FormAccordion label={'Date, Day and Time'}>
            <DateForm holiday={formData.dateTime.holiday} handleInput={handleDateTime} />
        </FormAccordion>
        <FormAccordion label={'Accident Details'}>
            <AccidentDetails causeOfAccident={formData.accidentDetails.causeOfAccident} classificationOfAccident={formData.accidentDetails.classificationOfAccident} hitAndRun={formData.accidentDetails.hitAndRun} lightConditions={formData.accidentDetails.lightConditions} natureOfAccident={formData.accidentDetails.natureOfAccident} othersInvolved1={formData.accidentDetails.othersInvolved1} othersInvolved2={formData.accidentDetails.othersInvolved2} othersInvolved3={formData.accidentDetails.othersInvolved3} registrationNo1={formData.accidentDetails.registrationNo1} registrationNo2={formData.accidentDetails.registrationNo2} registrationNo3={formData.accidentDetails.registrationNo3} vehicleType1={formData.accidentDetails.vehicleType1} vehicleType2={formData.accidentDetails.vehicleType2} vehicleType3={formData.accidentDetails.vehicleType3} weatherConditions={formData.accidentDetails.weatherConditions} handleInput={handleAccidentDetails} />
        </FormAccordion>
        <FormAccordion label={'Driver Details (Driver 1)'}>
            <DriverDetails addressCity={formData.driverDetails1.addressCity} addressState={formData.driverDetails1.addressState} addressStreet={formData.driverDetails1.addressStreet} age={formData.driverDetails1.age} certificateOfFitness={formData.driverDetails1.certificateOfFitness} dateOfExpiry={formData.driverDetails1.dateOfExpiry} dateOfIssue={formData.driverDetails1.dateOfIssue} education={formData.driverDetails1.education} firstName={formData.driverDetails1.firstName} insuranceCompanyName={formData.driverDetails1.insuranceCompanyName} insuranceNumber={formData.driverDetails1.insuranceNumber} insuranceType={formData.driverDetails1.insuranceType} lastName={formData.driverDetails1.lastName} licenseType={formData.driverDetails1.licenseType} lincenseNo={formData.driverDetails1.lincenseNo} locationOfInjury={formData.driverDetails1.locationOfInjury} manoeuvreType={formData.driverDetails1.manoeuvreType} middleName={formData.driverDetails1.middleName} namePrefix={formData.driverDetails1.namePrefix} natureOfInjury={formData.driverDetails1.natureOfInjury} occupation={formData.driverDetails1.occupation} personDriving={formData.driverDetails1.personDriving} placeOfIssue={formData.driverDetails1.placeOfIssue} responsibilityDriver={formData.driverDetails1.responsibilityDriver} rightHandDriving={formData.driverDetails1.rightHandDriving} sex={formData.driverDetails1.sex} vehicleDefect={formData.driverDetails1.vehicleDefect} vehicleLoading={formData.driverDetails1.vehicleLoading} handleInput={handleDriverDetails1} />
        </FormAccordion>
        <FormAccordion label={'Driver Details (Driver 2)'}>
            <DriverDetails addressCity={formData.driverDetails2.addressCity} addressState={formData.driverDetails2.addressState} addressStreet={formData.driverDetails2.addressStreet} age={formData.driverDetails2.age} certificateOfFitness={formData.driverDetails2.certificateOfFitness} dateOfExpiry={formData.driverDetails2.dateOfExpiry} dateOfIssue={formData.driverDetails2.dateOfIssue} education={formData.driverDetails2.education} firstName={formData.driverDetails2.firstName} insuranceCompanyName={formData.driverDetails2.insuranceCompanyName} insuranceNumber={formData.driverDetails2.insuranceNumber} insuranceType={formData.driverDetails2.insuranceType} lastName={formData.driverDetails2.lastName} licenseType={formData.driverDetails2.licenseType} lincenseNo={formData.driverDetails2.lincenseNo} locationOfInjury={formData.driverDetails2.locationOfInjury} manoeuvreType={formData.driverDetails2.manoeuvreType} middleName={formData.driverDetails2.middleName} namePrefix={formData.driverDetails2.namePrefix} natureOfInjury={formData.driverDetails2.natureOfInjury} occupation={formData.driverDetails2.occupation} personDriving={formData.driverDetails2.personDriving} placeOfIssue={formData.driverDetails2.placeOfIssue} responsibilityDriver={formData.driverDetails2.responsibilityDriver} rightHandDriving={formData.driverDetails2.rightHandDriving} sex={formData.driverDetails2.sex} vehicleDefect={formData.driverDetails2.vehicleDefect} vehicleLoading={formData.driverDetails2.vehicleLoading} handleInput={handleDriverDetails2} />
        </FormAccordion>
        <FormAccordion label={'Driver Details (Driver 3)'}>
            <DriverDetails addressCity={formData.driverDetails3.addressCity} addressState={formData.driverDetails3.addressState} addressStreet={formData.driverDetails3.addressStreet} age={formData.driverDetails3.age} certificateOfFitness={formData.driverDetails3.certificateOfFitness} dateOfExpiry={formData.driverDetails3.dateOfExpiry} dateOfIssue={formData.driverDetails3.dateOfIssue} education={formData.driverDetails3.education} firstName={formData.driverDetails3.firstName} insuranceCompanyName={formData.driverDetails3.insuranceCompanyName} insuranceNumber={formData.driverDetails3.insuranceNumber} insuranceType={formData.driverDetails3.insuranceType} lastName={formData.driverDetails3.lastName} licenseType={formData.driverDetails3.licenseType} lincenseNo={formData.driverDetails3.lincenseNo} locationOfInjury={formData.driverDetails3.locationOfInjury} manoeuvreType={formData.driverDetails3.manoeuvreType} middleName={formData.driverDetails3.middleName} namePrefix={formData.driverDetails3.namePrefix} natureOfInjury={formData.driverDetails3.natureOfInjury} occupation={formData.driverDetails3.occupation} personDriving={formData.driverDetails3.personDriving} placeOfIssue={formData.driverDetails3.placeOfIssue} responsibilityDriver={formData.driverDetails3.responsibilityDriver} rightHandDriving={formData.driverDetails3.rightHandDriving} sex={formData.driverDetails3.sex} vehicleDefect={formData.driverDetails3.vehicleDefect} vehicleLoading={formData.driverDetails3.vehicleLoading} handleInput={handleDriverDetails3} />
        </FormAccordion>
        <FormAccordion label={'Pedestrian or Person (other than driver) Details:1'}>
            <PedestrianDetails addressCity={formData.pedestrianDetails1.addressCity} addressState={formData.pedestrianDetails1.addressState} addressStreet={formData.pedestrianDetails1.addressStreet} age={formData.pedestrianDetails1.age} firstName={formData.pedestrianDetails1.firstName} lastName={formData.pedestrianDetails1.lastName} middleName={formData.pedestrianDetails1.middleName} namePrefix={formData.pedestrianDetails1.namePrefix} occupation={formData.pedestrianDetails1.occupation} particularsOfPedestrian={formData.pedestrianDetails1.particularsOfPedestrian} sex={formData.pedestrianDetails1.sex} handleInput={handlePedestrianDetails1} />
        </FormAccordion>
        <FormAccordion label={'Pedestrian or Person (other than driver) Details:2'}>
            <PedestrianDetails addressCity={formData.pedestrianDetails2.addressCity} addressState={formData.pedestrianDetails2.addressState} addressStreet={formData.pedestrianDetails2.addressStreet} age={formData.pedestrianDetails2.age} firstName={formData.pedestrianDetails2.firstName} lastName={formData.pedestrianDetails2.lastName} middleName={formData.pedestrianDetails2.middleName} namePrefix={formData.pedestrianDetails2.namePrefix} occupation={formData.pedestrianDetails2.occupation} particularsOfPedestrian={formData.pedestrianDetails2.particularsOfPedestrian} sex={formData.pedestrianDetails2.sex} handleInput={handlePedestrianDetails2} />
        </FormAccordion>
        <FormAccordion label={'Pedestrian or Person (other than driver) Details:3'}>
            <PedestrianDetails addressCity={formData.pedestrianDetails3.addressCity} addressState={formData.pedestrianDetails3.addressState} addressStreet={formData.pedestrianDetails3.addressStreet} age={formData.pedestrianDetails3.age} firstName={formData.pedestrianDetails3.firstName} lastName={formData.pedestrianDetails3.lastName} middleName={formData.pedestrianDetails3.middleName} namePrefix={formData.pedestrianDetails3.namePrefix} occupation={formData.pedestrianDetails3.occupation} particularsOfPedestrian={formData.pedestrianDetails3.particularsOfPedestrian} sex={formData.pedestrianDetails3.sex} handleInput={handlePedestrianDetails3} />
        </FormAccordion>
        <FormAccordion label={'Cyclist Details (if involved)'}>
            <CyclistDetails handleInput={handleCyclistDetails} />
        </FormAccordion>
        <FormAccordion label={'Other Details (Geometry and other)'}>
            <OtherDetails carriageway={formData.OtherDetails.carriageway} conditionSurface={formData.OtherDetails.conditionSurface} cycleTrackProvided={formData.OtherDetails.cycleTrackProvided} footPathProvided={formData.OtherDetails.footPathProvided} horizontalFeatures={formData.OtherDetails.horizontalFeatures} junctionType={formData.OtherDetails.junctionType} medianOpening={formData.OtherDetails.medianOpening} puccaShoulder={formData.OtherDetails.puccaShoulder} roadDivision={formData.OtherDetails.roadDivision} surfaceType={formData.OtherDetails.surfaceType} trafficControlType={formData.OtherDetails.trafficControlType} tunnelRoad={formData.OtherDetails.tunnelRoad} verticalFeatures={formData.OtherDetails.verticalFeatures} handleInput={handleOtherDetails} />
        </FormAccordion>
        <Button onClick={handleNextPage} className="mt-4">Next</Button>
    </div>
  )
}

export default AccidentForm