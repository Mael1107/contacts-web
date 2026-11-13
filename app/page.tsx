import ContactList from "./components/contact-list";
import api from "./lib/api";
import { Contact } from "./types";

export const dynamic = "force-dynamic"

const getContacts = async (): Promise<Contact[]> => {
  const response = await api.get<Contact[]>("/contacts")
  return response.data
}

const Home = async () => {
  const contacts = await getContacts()

  return (
    <main className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-center text-5xl font-bold text-emerald-900">Contacts List</h1>
      <ContactList contacts={contacts} />
    </main>
  )
}

export default Home