import { useParams } from 'react-router-dom'


const MailboxDetails = (props) => {
console.log(props)
    
const { mailboxId } = useParams()
const singleMailbox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId))

if (!singleMailbox) {
    return <h2>Mailbox does not exist!</h2>
}

    return(
        <>
                    <h2>Mailbox Details</h2>
            <dl>
                <dt>_id:</dt>
                <dd>{singleMailbox._id}</dd>
                <dt>Box Size:</dt>
                <dd>{singleMailbox.boxSize}</dd>
                <dt>Boxholder:</dt>
                <dd>{singleMailbox.boxholder}</dd>
            </dl>
        </>
    )
}

export default MailboxDetails