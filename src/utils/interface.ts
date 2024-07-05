export interface ISignin {
  Email: string;
  Password: string;
}

export interface IPerson {
  Id: number;
  Name: string;
  Cpf: string;
  Rg: string;
  PhoneNumber: string;
  Email: string;
  Password: string;
  Rgm: string;
  Gender: string;
  Birthdate: string;
  Address?: IAddress;
  AddressId: number;
}

export interface IStudent extends IPerson {}

export interface IAddress {
  Id: number;
  Country: string;
  State: string;
  City: string;
  Street: string;
  Number: string;
  Cep: string;
}

export interface ICourse {
  Id: number;
  Name: string;
  Price: string;
}

export interface IDiscipline {
  Id: number;
  Name: string;
}

export interface IEnrollment {
  Id: number;
  Student: IStudent;
  StudentId: number;
  Course: ICourse;
  CourseId: number;
  EnrollmentStatus: string;
  EnrollmentDate: Date;
  DiscountRate: number;
  Period: number;
  ComplementaryHourse: number;
}
