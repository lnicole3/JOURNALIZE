import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import NewPage from './NewPage'

//journal/journal_id

const Journal = () => {

    const [pages, setPages] = useState([])

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
        const handleClick = () => {
            navigate(`/pages/new`);
        }
   

  return (
    <div className='page-grid'>
        <h3>Pages</h3>
        {pages?.map((page) => (
            <div className='page-card' key={page?.page_id}>
            
                <p>{page?.journal_entry}</p>
                <p>{page?.mood}</p>
                <p>{page?.createdAt}</p>
                <Link to={`/pages/${page?.id}`}>Edit</Link>
                </div>
        ))}
         <div>
        <Link to={`/new-page/${journal_id}`}>New Page</Link>
 
        </div>
    </div>
   

  )
}


export default Journal