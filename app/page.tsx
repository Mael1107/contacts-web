import ContactList from "./components/contact-list";
import { UserPlus } from "lucide-react";
import { getContacts } from "./services/contacts";
import Link from "next/link";

export const dynamic = "force-dynamic"

const Home = async () => {
  const contacts = await getContacts()

  return (
    <main className="flex flex-col justify-center items-center">
      <h1 
        className="text-5xl font-bold text-emerald-900 text-shadow-lg mt-10">
          Contacts List
      </h1>
      <div className="flex justify-end max-w-xs w-full mt-8 mb-3">
        <Link 
          aria-label="Go add contact page" 
          className="bg-emerald-800 text-white px-6  py-1 rounded-sm hover:bg-emerald-700 hover:text-emerald-900 shadow-lg transition"
          href="/contacts/new">
           <UserPlus size={25} strokeWidth={3}/>
        </Link>
      </div>
      <ContactList contacts={contacts} />
    </main>
  )
}

export default Home