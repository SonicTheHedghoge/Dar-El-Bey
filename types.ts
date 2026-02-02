export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Starter' | 'Main' | 'Dessert';
  image: string;
  isSpecialty?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}