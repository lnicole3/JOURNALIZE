import { useEffect, useState } from 'react'
import { GetJournalList, CreateJournal } from '../services/JournalsServices'
import JournalCard from '../components/JournalCard'
import Client from '../services/api'
import NewJournal from '../components/NewJournal'

const Journals = ({ user }) => {
  const [journalList, setJournalList] = useState(null)

  const getAllJournals = async () => {
    const journalsData = await GetJournalList()
    setJournalList(journalsData)
  }

  const apiCall = async () => {
    let response = await Client.get('http://localhost:3001/api/journals')
    setJournalList(response.data)
  }

  useEffect(() => {
    apiCall()
  }, [])

  return (
    <div className="home-wrapper">
      <div className="new_journal">
        <NewJournal userId={user.id} apiCall={apiCall} />
      </div>
      <div className="journal_card">
        {journalList?.map((journal) => (
          <JournalCard key={journal.id} journal={journal} />
        ))}
      </div>
    </div>
  )
}

export default Journals
