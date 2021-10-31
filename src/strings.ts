export function capitalize(str: string): string {
  return str.replace(/\w+/g, (match) => {
    return match[0].toUpperCase() + match.substring(1).toLowerCase();
  });
}

function countOccurrences(haystack: string, needle: string): number {
  return haystack.split(needle).length - 1;
}

// formatNumberToCurrency(15, "EUR", "fr-FR") // "15,00 €"
function formatNumberToCurrency(number: number, currency: string, locale: string): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency
  }).format(number);
}

function replaceLastComma(str: string): string {
  return str.replace(/,(?=[^,]*$)/, " and");
}

function stripPonctuation(string: string) {
  return string.replace(/[^\w\s]/g, "");
}