'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach(row => {
  const cloneCell = row.cells[1].cloneNode(true);

  row.cells[row.cells.length - 1].before(cloneCell);
});
