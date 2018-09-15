
let msnry;
let grid = document.querySelector('div.best-pic');
msnry = new Masonry(grid, {
    itemSelector: '.best-item',
    columnWidth: '.best-sizer',
    percentPosition: true,
    // gutter: 1,
    stagger: 30,
});