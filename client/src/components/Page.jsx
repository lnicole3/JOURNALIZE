import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Navigate, useNavigate, useParams } from 'react-router-dom'


const Page = () => {
    let { page_id } = useParams()
    let navigate = useNavigate()

    const [editPage, setEditPage] = useState([])
    const [formState, setFormState] = useState({
        journal_entry:"",
        mood:"",
    })

    const getPage =  async () => {
        const res = await axios.get(`http://localhost:3001/api/pages/${page_id}`)
       setFormState(res.data)
       console.log(res.data)
       }

    useEffect(() => {
        getPage()
      }, [])
      
    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
      }


      const handleSubmit = async (e) => {
        e.preventDefault()
        let updatePage = await axios
            .put(`http://localhost:3001/api/pages/${page_id}`, formState)
            .then((response) => {
                navigate('/pages')
            })
            .catch((error) => {
                console.log(error)
              })
      }

  
        const fixPage = async () => {
          try {
            let res = await axios.put(`http://localhost:3001/api/pages/${page_id}`)
            fixPage(res.data)
          } catch(err) {
            console.log(err)
          }
        }
           
      const deletePage = async () => {
        try {
         let res = await axios.delete(`http://localhost:3001/api/pages/${page_id}`)
         navigate(-1)
        } catch (error) {
          console.log(error)
        }
      }
    


 

  return (

    <div className='form'>
        <h1>Update Journal Page</h1>
        <form onSubmit={handleSubmit}>
            <label name="journal-entry">Journal Entry</label>
            <input id="journal-entry" value={formState.journal_entry} onChange={handleChange}/>
            <label name="mood">Mood</label>
            <input id="mood" value={formState.mood} onChange={handleChange}/>
            <button type="submit">Submit</button>

        </form>
        <button onClick={deletePage}>Delete</button>
    </div>
    

  
  )
  }


export default Page