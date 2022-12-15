import Client from './api'
import axios from 'axios'

export const CreateJournal = async (userId, data) => {
  try {
    const res = await Client.post(`/api/journals/${userId}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetJournal = async (data) => {
  try {
    let response = await axios.get(
      `http://localhost:3001/api/reviews/${data.id}`
    )
    return response.data
  } catch (error) {
    throw error
  }
}

export const GetJournalList = async () => {
  try {
    let response = await axios.get('http://localhost:3001/api/journals')
    return response.data
  } catch (error) {
    throw error
  }
}
