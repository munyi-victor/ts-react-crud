export type Member = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
}

export enum PageEnum {
  add,
  list,
  edit,
}