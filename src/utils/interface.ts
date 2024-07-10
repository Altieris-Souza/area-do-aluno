export interface ISignin {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  name: string;
  cpf: string;
  rg: string;
  phoneNumber: string;
  email: string;
  password: string;
  rgm: string;
  gender: string;
  birthdate: string;
  address?: IAddress;
  addressId: number;
}

export interface IStudent extends IUser {}

export interface IAddress {
  id: number;
  country: string;
  state: string;
  city: string;
  street: string;
  number: string;
  cep: string;
}

export interface ICourse {
  id: number;
  name: string;
  field: string;
  active: boolean;
}

export interface IDiscipline {
  id: number;
  name: string;
}

export interface IEnrollment {
  id: number;
  student: IStudent;
  studentId: number;
  course: ICourse;
  courseId: number;
  enrollmentStatus: string;
  enrollmentDate: Date;
  discountRate: number;
  period: number;
  complementaryHourse: number;
}
