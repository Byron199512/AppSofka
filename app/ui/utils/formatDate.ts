export const parseDate = (dateString: string): Date | null => {

    const parts = dateString.split('-');
    if (parts.length === 3) {
        const year = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const day = parseInt(parts[2], 10);

        const parsedDate = new Date(year, month, day);
        if (parsedDate.getFullYear() === year &&
            parsedDate.getMonth() === month &&
            parsedDate.getDate() === day) {
            return parsedDate;
        }
    }
    return null;
};

export const formatDate = (date: Date): string => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
};

export const formatDateToShortString = (date: Date): string => {
    return date.toString().substring(0, 10);
}