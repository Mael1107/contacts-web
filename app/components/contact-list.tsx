"use client";

import { Contact } from "../types" ;
import { useState, useEffect } from "react";


const ContactList = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadContacts = async () => {
            try {
                const response = await fetch("http://localhost:3001/api/v1/contacts")
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                const data = await response.json();
                setContacts(data)
            } catch (err) {
                console.error(err);
                setError("Failed to load contacts");
            } finally {
                setIsLoading(false);
            }
        
        }
        loadContacts();
    }, []);


    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}>
                    <p>{contact.name}</p>
                    <p>{contact.phone}</p>
                    <p>{contact.email}</p>
                    <p>{contact.notes}</p>
                    <p>{contact.favorite}</p>

                </li>
            ))}
        </ul>
    )
}

export default ContactList;

