import { Contact } from "../types";
import { Pencil } from "lucide-react";
import DeleteButton from "./delete-button";
import Link from "next/link";
import FavoriteButton from "./favorite-button";

interface ContactCardProps {
    contact: Contact
}

const ContactCard = ({contact}: ContactCardProps) => {
    return (
        <li className="flex justify-between border-l-2 border-emerald-900 hover:bg-emerald-50 hover:translate-x-1 transition rounded-md p-2 text-lg md:text-xl">
            <div className="flex flex-col justify-around">
                <p className="text-emerald-700 text-xl font-bold md:text-2xl">{contact.name}</p>
                <p className="text-emerald-950 font-semibold">{contact.phone}</p>
                {contact.email && <p className="text-emerald-950">{contact.email}</p>}
                {contact.notes && <p className="text-gray-500">{contact.notes}</p>}
            </div>
            <div className="text-emerald-900 flex flex-col items-center gap-5">
                <Link href={`/contacts/${contact.id}/edit`} 
                    aria-label="Edit contact" 
                    className="cursor-pointer hover:text-white hover:bg-emerald-500 rounded-lg p-1 transition-all">
                        <Pencil className="size-5 md:size-7"  />
                </Link>
                <FavoriteButton id={contact.id} favorite={contact.favorite} />
                <DeleteButton id={contact.id} />
            </div>
        </li>
    )
}

export default ContactCard