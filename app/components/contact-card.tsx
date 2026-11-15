import { Contact } from "../types";
import { Pencil } from "lucide-react";
import DeleteButton from "./delete-button";

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
                {contact.notes && <p className="text-gray-500">{contact.notes}</p>}
            </div>
            <div className="flex flex-col gap-5">
                <button aria-label="Edit contact" className="text-emerald-950 cursor-pointer hover:text-white hover:bg-emerald-500 rounded-lg p-1 transition-all">
                    <Pencil size={21} />
                </button>
                <DeleteButton id={contact.id} />
            </div>
        </li>
    )
}

export default ContactCard