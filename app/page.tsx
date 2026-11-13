import api from "./lib/api";
import { Contact } from "./types";

export const dynamic = "force-dynamic"

const getContacts = async (): Promise<Contact[]> => {
  const response = await api.get<Contact[]>("/contacts")
  return response.data
}

const Home = async () => {
  const contacts = await getContacts()

  if (contacts.length === 0) {
    return (
      <main>
        No Contacts yet. Add one above!
      </main>
    )
  }

  return (  
    <main>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.phone}</p>
            {contact.email && <p>{contact.email}</p>}
            {contact.notes && <p>{contact.notes}</p>}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home