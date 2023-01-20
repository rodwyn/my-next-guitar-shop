export const formatingDate = (stringDate:string):string => {
  const newDate = new Date(stringDate);
  const options:Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }

  return newDate.toLocaleDateString('es-ES', options);
};
