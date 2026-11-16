"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { createContact, updateContact } from "../services/contacts"
import { CircleAlert } from "lucide-react"
import { Contact } from "../types"

interface ContactFormProps {
    contact?: Contact
}

const inputClass = "w-full p-2 rounded-md border-b-2 border-emerald-800/40 placeholder:text-gray-500 focus:outline-none focus:bg-emerald-200 focus:border-emerald-800 transition-colors" 

const ContactForm = ({contact}: ContactFormProps) => {

    const [form, setForm] = useState({
        name: contact ? contact.name : "",
        phone: contact ? contact.phone : "",
        email: contact ? (contact.email ?? "") : "",
        notes: contact ? (contact.notes ?? "") : "",
    })

    const [error, setError] = useState("")
    const router = useRouter()

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({...prev, [e.target.name]: e.target.value}))
        setError("")
    }

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault()
        setError("")

        const trimmedData = {
            name: form.name.trim(),
            phone: form.phone.trim(),
            email: form.email.trim(),
            notes: form.notes.trim()
        }

        if (trimmedData.name === "") {
            setError("Name cannot be blank! Please fill in correctly and try again.")
            return 
        }

        if (trimmedData.phone === "") {
            setError("Phone cannot be blank! Please fill in correctly and try again.")
            return 
        }

        if (trimmedData.email && !trimmedData.email.includes("@") ) {
            setError("Email must contain @! Please fill in correctly and try again.")
            return
        }

        try {
            if(contact) {
                await updateContact(contact.id, trimmedData)
            } else {
                await createContact(trimmedData)
            }

            router.push("/")
                
        } catch (err) {
            console.error(err)
            setError("Could not save contact. Please try again.")
        }
    }

    return (
        <form noValidate onSubmit={handleSubmit} className="flex flex-col max-w-xs w-full gap-6 text-emerald-900 font-semibold">

            {error && <div role="alert" className="flex justify-between gap-3 items-center bg-red-50 text-red-700 border-l-4 border-red-500 rounded-md p-3 text-sm">
                <CircleAlert size={26} strokeWidth={3} />
                <p>{error}</p>
            </div>}

            <div className="flex flex-col gap-3 bg-white p-2 py-4 rounded-lg shadow-lg">

                <input
                className={inputClass}
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                />
                <input
                className={inputClass}
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                />
                <input
                className={inputClass}
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                />
                <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Notes"
                    className={`${inputClass} border-l-2 resize-none`} rows={3}
                    >
                </textarea>
            </div>

            <button 
                type="submit" 
                className="bg-emerald-700 text-xl rounded-lg text-white p-2 cursor-pointer hover:bg-emerald-800 shadow-md hover:text-emerald-200 transition">
                    {contact ? "Update Contact" : "Add Contact"}
            </button>

        </form>
    )
}

export default ContactForm