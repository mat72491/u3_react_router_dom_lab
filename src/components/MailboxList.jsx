
import { Link } from 'react-router-dom'


const MailboxList = (props) => {

    return(
        <>
            <h2>Mailbox List</h2>
            <ul>
                {props.mailboxes.map((mailbox)=>(
                    <li key={mailbox._id}>
                        <Link to={`/mailboxes/${mailbox._id}`}>
                        {mailbox.boxholder}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MailboxList