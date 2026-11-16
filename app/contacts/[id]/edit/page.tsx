import ContactForm from "@/app/components/contact-form"
import { getContact } from "@/app/services/contacts"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

type Props = {
        params: Promise<{ id: string }>
    }

const ContactEditPage = async ({ params }: Props) => {
    const { id } = await params
    const contact = await getContact(Number(id))

    return (
        <main className="flex flex-col items-center gap-10">
            <Link 
                aria-label="Back to contact list" 
                className="text-emerald-900 self-start mt-2 p-2 hover:text-emerald-700 transition hover:translate-y-1" 
                href="/">
                    <ChevronLeft size={30} strokeWidth={3} />
            </Link>
            <h1 className="text-5xl font-bold text-emerald-900 text-shadow-lg mt-10">Edit Contact</h1>
            <ContactForm contact={contact} />
        </main>
    )
}

export default ContactEditPage