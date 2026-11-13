import { Contact } from "../types";
import { Pencil, Trash2 } from "lucide-react";

interface ContactCardProps {
    contact: Contact
}

const ContactCard = ({contact}: ContactCardProps) => {
    return (
        <li className="flex justify-between border-b-2 border-emerald-900 pb-3 text-lg">
            <div>
                <p className="text-emerald-700 text-xl font-bold">{contact.name}</p>
                <p className="text-emerald-950">{contact.phone}</p>
                {contact.email && <p className="text-emerald-950">{contact.email}</p>}
                {contact.notes && <p className="text-emerald-950">{contact.notes}</p>}
            </div>
            <div className="flex flex-col gap-5">
                <button aria-label="Edit contact" className="text-emerald-950 cursor-pointer">
                    <Pencil size={21} />
                </button>
                <button aria-label="Delete contact" className="text-emerald-950 cursor-pointer">
                    <Trash2 size={21}  />
                </button>
            </div>
        </li>
    )
}

export default ContactCard