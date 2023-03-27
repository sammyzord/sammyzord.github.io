export const handleText = (text: string) => {
    const new_text = text.replace(/\<(.*?)\>/g, "");
    return new_text.replace(
        /\:(.*?)\:/g,
        (m) =>
            `<span class=" underline underline-offset-4
            decoration-2 decoration-dotted decoration-yellow-300
            text-yellow-300 dark-select">
            ${m.slice(1, m.length - 1)}
            </span>`
    );
}