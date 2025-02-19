import { ReactElement, ReactNode } from "react";

export interface DocumentTitleProps {
  children: ReactNode;
}

export interface ContactType {
  id: string;
  name: string;
  number: string;
}

export interface ContactsState {
  items: ContactType[];
  loading: boolean;
  error: string | null;
}

export interface ContactProps {
  id: string;
  name: string;
  number: string;
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
  children: ReactElement;
  redirectPath: string;
}

export interface PrivateRouteProps {
  children: ReactElement;
  redirectPath: string;
}
