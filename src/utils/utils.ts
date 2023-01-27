export const handleText = (text: string) => {
    const new_text = text.replace(/\<(.*?)\>/g, "");
    return new_text.replace(
        /\:(.*?)\:/g,
        (m) =>
            `<span class="text-yellow-300">${m.slice(1, m.length - 1)}</span>`
    );
}