import ContactForm from "@/app/components/contact-form"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

const ContactFormPage = () => {
    return (
        <main className="flex flex-col items-center gap-13">
            <Link 
                aria-label="Back to contact list" 
                className="text-emerald-900 self-start mt-2 p-2 hover:text-emerald-700 hover:translate-y-1 transition" 
                href="/">
                    <ChevronLeft size={30} strokeWidth={3} />
            </Link>
            <h1 
                className="text-5xl font-bold text-emerald-900 text-shadow-lg mt-10 md:text-7xl">
                    New Contact
            </h1>
            <ContactForm />
        </main>
    )
}

export default ContactFormPage