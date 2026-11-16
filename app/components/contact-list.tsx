import { Contact } from "../types"
import ContactCard from "./contact-card"

interface ContactListProps {
    contacts: Contact[]
}

const ContactList = ({contacts}: ContactListProps) => {
    if (contacts.length === 0) {
        return (
            <p 
                className="text-emerald-900 font-bold text-center mt-5 mx-2 text-2xl" >
                    No Contacts yet. Add one above!
            </p>
        )
    }

    return (
        <ul className="bg-white p-4 py-5 max-w-xs w-full flex flex-col rounded-xl gap-5 shadow-xl md:max-w-md lg:max-w-lg">
            {contacts.map(contact => (
                <ContactCard key={contact.id} contact={contact} />
            ))}
        </ul>
    )
}

export default ContactList