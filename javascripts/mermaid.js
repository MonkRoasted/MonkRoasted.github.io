document$.subscribe(async () => {
  mermaid.initialize({
    startOnLoad: false,
    theme: document.body.getAttribute("data-md-color-scheme") === "slate"
      ? "dark"
      : "default",
  });
  await mermaid.run({ querySelector: ".mermaid" });
});
