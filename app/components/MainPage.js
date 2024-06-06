'use client'
import React,{useState} from 'react'
import StartDateInput from './StartDateInput';
import EndDateInput from './EndDateInput';
import {selectAPICall} from '../lib/utilities';
import OptionList from './OptionList';
import {createSheet} from '../lib/utilities';
export default function MainForm () {
    const options = ["Email Marketing","Email via Automation Flow","Sales funnel","Conversion Assets"]
    const [startDateSelected,setStartDateSelected]= useState('')
    const [endDateSelected,setEndDateSelected]= useState('')
    const [selectedOption,setSelectedOption] = useState(options[0])
    const [dataRender,setDataRender]=useState([])
    const next = async () => {
        console.log(selectedOption,startDateSelected,endDateSelected)
        const data = await selectAPICall(selectedOption,startDateSelected,endDateSelected,setDataRender)
        const payload = await data.emails  
        setDataRender([payload])
        const createSheets = await createSheet(setDataRender)
        console.log(createSheets)
    }
  return (
    <>
    <div>
        <h1>Selecciona una opcion de la lista </h1>
        <OptionList
        options={options}
        setSelectedOption={setSelectedOption}
        />
        <StartDateInput
        startDateSelected={startDateSelected}
        setStartDateSelected={setStartDateSelected}
        />
        <EndDateInput
        endDateSelected={endDateSelected}
        setEndDateSelected={setEndDateSelected}
        />
        <button onClick={next}>Buscar</button>
    </div>
    <div>
        {dataRender && console.log('here')}
    </div>
    </>
  )
}
