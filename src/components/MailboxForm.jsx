
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


const initialState = {
    
        _id: 0,
        boxSize: '',
        boxholder: '',
      };
      

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState)

const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()
    props.addMailbox(formData)
    setFormData(initialState)
    navigate('/mailboxes')
}

const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value})

}

    return(
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Boxholder</label>
                <input
                type="text"
                id="boxholder"
                name="boxholder"
                value={formData.boxholder}
                onChange={handleChange}
                />
                     <label htmlFor="size">Box Size</label>
                <select
                id="boxSize"
                name="boxSize"
                value={formData.boxSize}
                onChange={handleChange}
                > <option value="">Select Size</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default MailboxForm