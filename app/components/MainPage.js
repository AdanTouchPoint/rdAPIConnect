'use client'
import React,{useState} from 'react'
import StartDateInput from './StartDateInput';
import EndDateInput from './EndDateInput';
import {selectAPICall} from '../lib/utilities';
import OptionList from './OptionList';
import XLSDownloader from './XLSDownloader';
export default function MainForm () {
    const options = ["Email Marketing","Email via Automation Flow","Conversion Assets"]
    const [startDateSelected,setStartDateSelected]= useState('')
    const [endDateSelected,setEndDateSelected]= useState('')
    const [selectedOption,setSelectedOption] = useState(options[0])
    const [dataRender,setDataRender]=useState([])
    const next = async () => {
        console.log(selectedOption,startDateSelected,endDateSelected)
        const data = await selectAPICall(selectedOption,startDateSelected,endDateSelected,setDataRender)
        setDataRender(data)
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
        {dataRender?.length > 0 && <XLSDownloader dataRender={dataRender}/>}
    </div>
    </>
  )
}
