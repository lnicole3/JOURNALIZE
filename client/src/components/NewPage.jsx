import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Client from '../services/api'

const NewPage = () => {

  let { journal_id } = useParams()
  
    let navigate = useNavigate()

const [newPage, setNewPage] = useState([])
  const [formState, setFormState] = useState({
    journal_entry:"",
    mood:""
  })

  const CreatePage = async (data) => {
    try {
      const res = await Client.post(`/pages`, data)
      return res.data
    } catch (error) {
      throw error
    }
  }

const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
}
const handleSubmit = async (e) => {
  e.preventDefault()
  let res = await axios
    .post('http://localhost:3001/api/pages', { ...formState, journal_id: journal_id })
    .then((res) => {
      navigate(-1)
    })
    .catch((error) => {
      console.log(error)
    })
}
  return (
    <div>
        <h3>NewPage</h3>
        <form onSubmit={handleSubmit}>
            <label name="journal_entry">Journal Entry</label>
            <textarea name="journal_entry" value={formState.journal_entry} onChange={handleChange}/>
            <label name="mood">Mood</label>
            <input name="mood" value={formState.mood} onChange={handleChange}/>
            <button type="submit">Submit</button>
      
        </form>


        </div>
  )

}
export default NewPage