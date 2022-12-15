import React from 'react'
import { useNavigate } from 'react-router-dom'



const JournalCard = ({journal, user}) => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate(`/journals/${journal.id}`);
    }
  return (
    <div onClick={handleClick}>{journal.journal_name}</div>
  )
}

export default JournalCard