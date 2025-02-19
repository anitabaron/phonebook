export interface ContactType {
  id: string;
  name: string;
  phone: string;
}

export interface ContactsState {
  items: ContactType[];
  loading: boolean;
  error: string | null;
}
