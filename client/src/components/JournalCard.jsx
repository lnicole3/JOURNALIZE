import React from 'react'
import { useNavigate } from 'react-router-dom'



const JournalCard = ({journal, user}) => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate(`/journals/${journal.id}`);
    }
  return (
    <div onClick={handleClick}><h2 className='journal-name'>{journal.journal_name}</h2></div>
  )
}

export default JournalCard