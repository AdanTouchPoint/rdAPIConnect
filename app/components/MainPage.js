'use client'
import React,{useState} from 'react'
import StartDateInput from './StartDateInput';
import EndDateInput from './EndDateInput';
import {selectAPICall} from '../lib/utilities';
import OptionList from './OptionList';
import XLSDownloader from './XLSDownloader';
import ItemsList from './ItemList/Index';
import Spinner from './Spinner/Index';


export default function MainForm () {
    const options = ["Email Marketing","Email via Automation Flow","Conversion Assets"]
    const [startDateSelected,setStartDateSelected]= useState('')
    const [endDateSelected,setEndDateSelected]= useState('')
    const [selectedOption,setSelectedOption] = useState(options[0])
    const [dataRender,setDataRender]=useState([])
    const [id,setId] = useState()
    const [loading,setLoading] =  useState(false) 
    const [hideList,setHideList] = useState(true)
    const [hideItems,setHideItems] = useState(true)
    const next = async () => {
        setHideItems(true)
        setHideList(false)
        setLoading(true)
        const data = await selectAPICall(selectedOption,startDateSelected,endDateSelected,id)
        setLoading(false)
        setDataRender(data)
        setHideItems(false)       
    }
  return (
    <>
    <div className='form'>
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
    <div hidden={hideList} className='list'>
        {loading === true && <Spinner/>}
        {dataRender?.length > 0 && 
        <ItemsList
        hideItems={hideItems}
        id={id}
        setId={setId}
        startDateSelected={startDateSelected} 
        endDateSelected={endDateSelected} 
        selectedOption={selectedOption} 
        dataRender={dataRender}
        />
        }
    </div>
    </>
  )
}
