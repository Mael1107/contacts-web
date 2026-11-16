"use client"

import { useRouter } from "next/navigation"
import { Star } from "lucide-react"
import api from "../lib/api"

interface FavoriteButtonProps {
    id: number
    favorite: boolean
}

const FavoriteButton = ({ id, favorite }: FavoriteButtonProps) => {
    const router = useRouter()

    const handleToggleFavorite = async () => {
        try {
            await api.patch(`/contacts/${id}`, { contact: { favorite: !favorite } })
            router.refresh()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <button
            aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
            className="cursor-pointer hover:bg-yellow-400 hover:text-white p-1 rounded-lg transition"
            onClick={handleToggleFavorite}
        >
            <Star className="size-5 md:size-7" fill={favorite ? "currentColor" : "none"} />
        </button>
    )
}

export default FavoriteButton