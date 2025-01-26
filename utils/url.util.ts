export const getIndex = (url: string) => {
    const parts = new URL(url).pathname.split("/");
    return parseInt(parts[parts.length - 2]);
};