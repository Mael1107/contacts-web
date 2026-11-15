import { getContact } from "@/app/services/contacts"

type Props = {
        params: Promise<{ id: string }>
    }

const ContactEditPage = async ({ params }: Props) => {
    const { id } = await params
    const contact = await getContact(Number(id))

    return (
        <main>
            <h1>Edit Contact</h1>
            <p>{contact.name}</p>
        </main>
    )
}

export default ContactEditPage