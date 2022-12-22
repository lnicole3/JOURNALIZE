import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Client from "../services/api";



const NewJournal = ({userId,apiCall}) => {
    let navigate = useNavigate()
    const [formValues, setFormValues] = useState({ journal_name: "" })
    
const CreateJournal = async (data) => {
        try {
          const res = await Client.post(`/journals/${userId}`, data)
          return res.data
        } catch (error) {
          throw error
        }
      }

const handleChange = (e) => {
    setFormValues({ [e.target.name]: e.target.value })
  }

  let handleSubmit = async (e) => {
    e.preventDefault()
    await CreateJournal({...formValues})
    setFormValues(
        {
            journal_name: ""
        }
    )
apiCall()
}

return (
<div className="create-journal">
    <form onSubmit={handleSubmit}>
    <label htmlFor="journal-name">Enter Your Journal Name</label>
    <input className="journal-textbox"
    name="journal_name"
    onChange={handleChange}
    value={formValues.journal_name}
    ></input>
    <button onClick={handleSubmit} type="submit" className="submit-review">
     Submit
    </button>
    </form>
</div>
)

  }

  export default NewJournal
