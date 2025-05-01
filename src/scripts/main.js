'use strict';

const trows = document.querySelectorAll('tr');

for (const tr of trows) {
  const secondChild = tr.querySelector('tr > :nth-child(2)');
  const cloneSecondChild = document.createElement(`${secondChild.tagName}`);

  cloneSecondChild.textContent = secondChild.textContent;

  const fourthChild = tr.querySelector('tr > :nth-child(4)');

  fourthChild.after(cloneSecondChild);
}
