export declare interface BootcampProps {
    backgroundImage?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    targetDate?: any;
}

export declare interface Bootcamp{
    data: BootcampProps;
}

export declare interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  educationLevel: string;
  bootcampInterest: BootcampInterest | string;
  coverletter: string;
}

export enum BootcampInterest {
  Option1 = "Backend Development",
  Option2 = "Frontend Development",
  Option3 = "Web Design",
}


  export declare interface Form {
    userData: RegistrationFormData;
    onFormSubmit: (data: RegistrationFormData) => void;
  }
  

  export  const initialFormData: RegistrationFormData = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      educationLevel: "",
      bootcampInterest: BootcampInterest.Option1,
      coverletter: ""
  };
