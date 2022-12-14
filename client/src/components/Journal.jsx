import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'

//journal/journal_id

const Journal = () => {

    const [pages, setPages] = useState([])
    const [journalName, setJournalName] = useState([])

    const [formState, setFormState] = useState({
      journal_entry: '',
      mood: '',
      createdAt: '',
    })

    let { journal_id } = useParams() 
    let { navigate } = useNavigate()

    const apiCall = async () => {
        let response = await axios.get('http://localhost:3001/api/pages/')
        setPages(response.data)
      }
      useEffect(() => {
        apiCall()
      }, [])




    const handleSubmit = async (event) => {
        event.preventDefault()
        let newPage= await axios
          .post('http://localhost:3001/api/pages/', formState)
          .then((response) => {
            return response
          })
          .catch((error) => {
            console.log(error)
          })
        setPages([...pages, newPage.data])
        setFormState({
            journal_entry: '',
            mood: '',
            createdAt: '',
          })
        }
   

  return (
    <div className='page-grid'>
   <h2>Journal Pages</h2>
        {pages?.map((page) => (
            <div className='page-card' key={page?.page_id}>
            
                <h3 className='journal-entry-page-card'>"{page?.journal_entry}"</h3>
                <h4>Mood:</h4>
                <p className='mood'>{page?.mood}</p>
                <p>{page?.createdAt}</p>
                <Link to={`/pages/${page?.id}`} style={{textDecoration: 'none'}}>Edit</Link>
                </div>
        ))}
         <div>
        <Link to={`/new-page/${journal_id}`} style={{textDecoration: 'none'}}>New Page</Link>
 
        </div>
    </div>
   

  )
}


export default Journal