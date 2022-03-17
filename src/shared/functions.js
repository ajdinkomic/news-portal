// function for making slug out of passed string
export const slugify = (text) => {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-') // replaces spaces with -
        .replace(/[^\w\-]+/g, '') // replace all non-word chars
        .replace(/\-\-+/g, '-') // replace multiple -- with single -
        .replace(/^-+/, '') // trim - from start of text  
        .replace(/-+$/g, '') // trim - from end of text
        .substring(0, 75); // trim at 75 chars
}