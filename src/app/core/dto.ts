export interface Page<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
}

export interface PageRequest {
  page: number;
  size: number;
}

export interface UserParams {
  email?: string;
  password?: string;
  name?: string;
  token?: any;
}

export interface MailParams {
  from?: string;
  name?: string;
  message?: string;
}
