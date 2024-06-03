export type Book = {
  id: number;
  Year: string;
  Title: string;
  handle: string;
  Publisher: string;
  ISBN: string;
  Pages: number;
  Notes: string[];
  created_at: Date;
  Price: string;
  ImageId: number;
};

export type CartItemType = Book & {
  quantity: number;
};

export interface BookState {
  loading: boolean;
  message: string;
  cart: CartItemType[];
  books: Book[];
  currentPage: number;
  error: string;
}

export type RejectError = {
  message: string;
};
