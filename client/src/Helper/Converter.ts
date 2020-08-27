function toValidAmount(amountCandidate: number | null | undefined): number
{
  if(amountCandidate === null || amountCandidate === undefined) { return 0; }
  const validAmountInCent = amountCandidate / 100;
  return validAmountInCent;
}

export { toValidAmount };