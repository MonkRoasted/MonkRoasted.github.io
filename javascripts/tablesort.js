document$.subscribe(() => {
  document.querySelectorAll(".md-typeset table").forEach((table) => {
    if (table.dataset.sortableInitialized) return;

    new Tablesort(table);
    table.dataset.sortableInitialized = "true";
  });
});
