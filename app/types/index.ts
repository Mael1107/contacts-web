export interface Contact  {
    id: number;
    name: string;
    phone: string;
    email: string | null;
    notes: string | null;
    favorite: boolean;
    created_at: string;
    updated_at: string;
}