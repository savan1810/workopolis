import React, { useEffect } from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { purple, red } from '@mui/material/colors';
// import BrowseJobs from './BrowseJobs';
import axios from 'axios'
import Filter from './Filter';
import JobList from './JobList';
import { Country, City } from 'country-state-city';
// import {countries} from 'country-data';
import { countryToAlpha2, countryToAlpha3 } from "country-to-iso";
import getJobs from './getJobs';
import searchJobs from './searchJobs';
import { RotatingLines } from 'react-loader-spinner'

const FindJobs = () => {
  const [manufacturer1, setManufacturer1] = useState('')
  const [manufacturer2, setManufacturer2] = useState('')
  const [manufacturer3, setManufacturer3] = useState('')
  const [loading, setLoading] = useState(false)

  // const [city, setCity] = useState('')
  const [manufacturer4, setManufacturer4] = useState('')
  const [data, setData] = useState([])


  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');

  const handleSearch = async () => {
    // let response=await axios.post('http://localhost:4000/api/jobs/getCityWiseJob',{manufacturer2,manufacturer1})

    let parseData = await searchJobs(manufacturer1, manufacturer2)
    setLoading(true)

    setData(parseData)
    setLoading(false)

    setManufacturer1('')
    setManufacturer2('')
    setManufacturer3('')
    setManufacturer4('')
  }

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    // let response=await axios.get('http://localhost:4000/api/jobs')
    let parseData =await getJobs();
    setLoading(true)
    setData(parseData)
    setLoading(false)
  }

  // console.log(manufacturer1,manufacturer2,manufacturer3,manufacturer4)
  const JobArray = ["Web developer", "Front-end developer", "Mobile-app developer", "Game-developer", "Back-end developer", "Embedded system engineer", "Data engineer", "DevOps engineer", "Software Quality Assurance(QA) engineer"];
  return (
    <div className=' mx-auto mt-20 relative'>

      <div className='flex relative items-center justify-center flex-wrap gap-4 '>
       
        <div>

          <label className=' font-semibold '>Keyword</label>
          <Autocomplete color="success" className='w-[270px]   md:w-[235px] lg:w-[270px]'
            value={manufacturer1}
            onChange={(event, newValue) => {
              setManufacturer1(newValue);
            }}
            inputValue={inputValue1}
            onInputChange={(event, newInputValue) => {
              setInputValue1(newInputValue);
            }}
            id="free-solo-demo "
            freeSolo
            sx={{ width: "270px", my: 1 }}
            options={JobArray.map((option) =>
              option
            )}
            renderInput={(params) => <TextField padding={4} {...params} sx={{ "& fieldset": { borderColor: purple[400], p: "2px" } }} color="secondary" placeholder="Job title,Skills or Employer name" />}
          />
        </div>
        <div>

          <label className=' font-semibold '>Country</label>
          <Autocomplete color="success" className='w-[270px] disabed  md:w-[235px] lg:w-[270px]'
            value={manufacturer3}
            onChange={(event, newValue) => {
              setManufacturer4(countryToAlpha2(newValue));
              setManufacturer3(newValue);
            }}
            inputValue={inputValue3}
            onInputChange={(event, newInputValue) => {
              setInputValue3(newInputValue);
            }}
            id="free-solo-demo "
            freeSolo
            sx={{ width: "270px", my: 1 }}
            options={Country.getAllCountries().map((option) =>
              option.name
            )}
            renderInput={(params) => <TextField padding={4} {...params} sx={{ "& fieldset": { borderColor: purple[400], p: "2px" } }} color="secondary" placeholder="Country" />}
          />
        </div>
        <div>

          <label className=' font-semibold '>City</label>
          <Autocomplete color="success" className='w-[270px]  md:w-[235px] lg:w-[270px]'
            value={manufacturer2}
            onChange={(event, newValue) => {
              setManufacturer2(newValue);
            }}
            inputValue={inputValue2}
            onInputChange={(event, newInputValue) => {
              setInputValue2(newInputValue);
            }}
            id="free-solo-demo "
            freeSolo
            sx={{ width: "270px", my: 1 }}
            options={City.getCitiesOfCountry(manufacturer4).map((option) => option.name)}
            renderInput={(params) => <TextField padding={4} {...params} sx={{ "& fieldset": { borderColor: purple[400] } }} color="secondary" placeholder="City" />} />
        </div>

        <button className=' mt-6 hidden sm:block lg:block rounded-md  text-white bg-gradient-to-r from-[#B931FC] to-[#FF6AC2] tracking-wide w-[90px] sm:w-[110px] md:w-[130px] lg:w-[150px]  h-14 ' onClick={handleSearch}>Find a Job</button>

      </div>
      <div className='block sm:hidden lg:hidden w-full text-center'>

        <button className=' relative mt-6  rounded-md  text-white bg-gradient-to-r from-purple-400 to-pink-400 tracking-wide w-[270px]   h-14 ' onClick={handleSearch}>Find a Job</button>
      </div>
      <div className='text-center '>

{loading && <RotatingLines
  strokeColor="red"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>}
</div>
      <Filter />
      <JobList data={data} />
    </div>
  )
}

export default FindJobs
