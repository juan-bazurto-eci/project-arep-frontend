export const getPeriod = (month: number, transform = true): string => {
  const periods = [
    `Enero-Febrero`,
    `Marzo-Abril`,
    `Mayo-Junio`,
    `Julio-Agosto`,
    `Septiembre-Octubre`,
    `Noviembre-Diciembre`,
  ];
  return transform ? periods[Math.floor(month / 2)] : periods[month];
};
