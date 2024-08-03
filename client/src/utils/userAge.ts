import dayjs, { Dayjs } from "dayjs";

export const setUserBirthdate = (birthdate: string) => {
  localStorage.setItem("birthdate", birthdate);
};

export const isUserOver60 = (birthdate: string | Dayjs | null) => {
  if (birthdate) {
    const differenceInYears = dayjs().diff(dayjs(birthdate), "year");
    return differenceInYears >= 60 ? true : false;
  }
  return false;
};
