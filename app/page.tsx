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
        className="text-5xl font-bold text-emerald-900 text-shadow-lg mt-10 md:text-7xl ">
          Contacts List
      </h1>
      <div className="flex justify-end max-w-xs w-full mt-8 mb-3 md:max-w-md lg:max-w-lg">
        <Link 
          aria-label="Go add contact page" 
          className="bg-emerald-800 text-white px-6 py-2 rounded-sm hover:bg-emerald-700 hover:text-emerald-900 shadow-lg md:px-10 hover:translate-x-1 hover:-translate-y-1 transition md:py-3 lg:px-10"
          href="/contacts/new">
           <UserPlus className="size-6 md:size-7" strokeWidth={3}/>
        </Link>
      </div>
      <ContactList contacts={contacts} />
    </main>
  )
}

export default Home