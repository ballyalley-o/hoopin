export const slugify = (text: string) => {
    if (text.length <= 0 || text === '') {
        return 'no text provided'
    }

    const cleanText = text.toLowerCase().trim().replace(/[^A-Za-z0-9]\s+/g, ' ').replace(/\s/g, '-')
    return cleanText
}