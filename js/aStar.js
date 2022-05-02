// gamesettings
const c = document.getElementsByTagName("canvas")[0];
const ctx = c.getContext("2d");
const w = 400;
const h = 400;
const ROWS = 25;
const COLS = 25;
const BLOCK_W = Math.floor(w / COLS);
const BLOCK_H = Math.floor(h / ROWS);
