export function formatPrice(price: number): string {
    // Round the price to two decimal places
    const roundedPrice = Math.round(price * 100) / 100;

    // Split the price into integer and decimal parts
    const [integerPart, decimalPart] = roundedPrice.toString().split('.');

    // Group the integer part into sets of three digits
    const integerGroups = integerPart.split(/(?=(?:\d{3})+$)/);

    // Join the integer groups with commas and concatenate with the decimal part (if any)
    const formattedPrice = integerGroups.join(' ') + (decimalPart ? `.${decimalPart}` : '');

    // Return the formatted price
    return formattedPrice;
}

export function filterPhoneNumber(phoneNumber: string): string {
    const numericRegex = /[0-9]/g;
    const numericChars = phoneNumber.match(numericRegex)?.join('');
    if (!numericChars) {
        return '';
    }
    return `+998${numericChars.slice(3, 5)}${numericChars.slice(5, 8)}${numericChars.slice(8, 10)}${numericChars.slice(10, 12)}`;
}

