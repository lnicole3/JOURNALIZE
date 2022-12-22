import Client from './api'

export const CreateJournal = async (userId, data) => {
  try {
    const res = await Client.post(`/journals/${userId}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetJournal = async (data) => {
  try {
    let response = await Client.get(`/journals/${data.id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const GetJournalList = async () => {
  try {
    let response = await Client.get(`/journals`)
    return response.data
  } catch (error) {
    throw error
  }
}
