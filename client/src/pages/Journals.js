import React from 'react'
import { useEffect, useState } from 'react'
import { GetJournalList, CreateJournal } from '../services/JournalsServices'
import JournalCard from '../components/JournalCard'

const Journals = () => {
  const [journalList, setJournalList] = useState(null)

  useEffect(() => {
    const getAllJournals = async () => {
      const journalsData = await GetJournalList()
      setJournalList(journalsData)
    }

    getAllJournals()

    return (
      <div className="home-wrapper">
        <div>Create Journal</div>
        {journalList.map((journal) => (
          <JournalCard key={journal.id} />
        ))}
      </div>
    )
  })
}

export default Journals
