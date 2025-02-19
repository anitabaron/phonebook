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

export interface LoginValues {
  email: string;
  password: string;
}

export interface RegisterValues {
  name: string;
  email: string;
  password: string;
}

export interface ModalConfirmProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
}

export interface RestrictedRouteProps {
  Component: React.ComponentType;
  redirectPath: string;
}
