import { Contact } from "../types"
import ContactCard from "./contact-card"

interface ContactListProps {
    contacts: Contact[]
}

const ContactList = ({contacts}: ContactListProps) => {
    if (contacts.length === 0) {
        return (
            <p>No Contacts yet. Add one above!</p>
        )
    }

    return (
        <ul className="bg-white p-5 mt-10 max-w-xs w-full flex flex-col rounded-xl gap-5 shadow-xl">
            {contacts.map(contact => (
                <ContactCard key={contact.id} contact={contact} />
            ))}
        </ul>
    )
}

export default ContactList