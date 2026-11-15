"use client"
import { Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { deleteContact } from "../services/contacts"

const DeleteButton = ({id}: {id: number}) => {
    const router = useRouter()
    
    const handleDelete = async () => {
        try {
            await deleteContact(id)
            router.refresh()
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <button 
            aria-label="Delete contact" 
            className="text-emerald-950 cursor-pointer hover:text-white hover:bg-red-500 rounded-lg p-1 transition-all"
            onClick={handleDelete}
            >
                <Trash2 size={21}/>
        </button>
    )
}

export default DeleteButton