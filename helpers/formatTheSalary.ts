interface IFormatTheSalaryProps {
  salary: string;
}

const formatTheSalary = (salary: IFormatTheSalaryProps) => {
  let formattedSalary;
  if (salary.toLowerCase().includes("k")) {
    formattedSalary = salary.replaceAll("k", " 000");
  }
  console.log(typeof formattedSalary);
  return formattedSalary;
};

export default formatTheSalary;
