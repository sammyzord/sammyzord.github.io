<script>
export default {
  name: "TextHighlight",
  methods: {
    handleText(text) {
      let new_text = text.replace(/\<(.*?)\>/g, "");
      new_text = new_text.replace(
        /\:(.*?)\:/g,
        (m) =>
          `<span class="text-yellow-300">${m.slice(1, m.length - 1)}</span>`
      );
      return new_text;
    },
  },
};
</script>
