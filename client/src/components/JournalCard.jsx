import React from 'react'
import { useNavigate } from 'react-router-dom'



const JournalCard = ({journal, user}) => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate(`/journals/${journal.id}`);
    }
  return (
    <div className="journal-card">
    <div className="journal-name" onClick={handleClick}>{journal.name}</div>

</div>
  )
}

export default JournalCard