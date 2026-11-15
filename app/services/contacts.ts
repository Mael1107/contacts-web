import { Contact } from "../types"
import api from "../lib/api"

interface CreateContactData {
    name: string
    phone: string
    email?: string
    notes?: string
}

export const getContacts = async (): Promise<Contact[]> => {
  const response = await api.get<Contact[]>("/contacts")
  return response.data
}


export const createContact = async (data: CreateContactData): Promise<Contact> => {
    const response = await api.post<Contact>("/contacts", {contact: data})
    return response.data
}

export const deleteContact = async (id: number): Promise<void> => await api.delete(`/contacts/${id}`)