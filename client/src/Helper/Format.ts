import moment from 'moment';

function formatAmount(amount: number, currency: string = 'EUR'): string
{
  const options = {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  };
  // if its a whole, dollar amount, leave off the .00
  if(amount % 100 === 0)
  {
    options.minimumFractionDigits = 0;
  }

  const formatter = new Intl.NumberFormat('de-DE', options);
  return formatter.format(amount / 100);
}

function formatDate(date:string): string
{
  const dateParsed = moment(date, "YYYY-MM-DD", true);

  if(!dateParsed.isValid()) { return date; }

  if(dateParsed.year() === 2020) { return dateParsed.format("D. MMM") }
  else if(dateParsed.year() <= 2020) { return dateParsed.format("DD.MM.YYYY") }

  return date;
}

export { formatAmount, formatDate };