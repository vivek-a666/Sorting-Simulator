// sleep function
// stop execution of every thing for (ms) of time
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function drawColumn(ctx, x, y, width, height, radius, value, fill, stroke) {
  // validate the parameters
  if (typeof stroke === "undefined") {
    stroke = false;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  if (typeof radius === "number") {
    radius = { tl: radius, tr: radius, br: radius, bl: radius };
  } else {
    var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  // fill with color if exist

  // start the shape of the rect
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y); // start a the x position
  // bottom side
  ctx.lineTo(x + width - radius.tr, y);
  //  right bottom corner
  ctx.quadraticCurveTo(x + width, y, x + width, y - radius.tr);
  // right side
  ctx.lineTo(x + width, y + height + radius.br);
  // top right corner
  ctx.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius.br,
    y + height
  );
  // top side
  ctx.lineTo(x + radius.bl, y + height);
  // top left corner
  ctx.quadraticCurveTo(x, y + height, x, y + height + radius.bl);
  // left size
  ctx.lineTo(x, y - radius.tl);
  // bottom left corner
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fillStyle = fill;
    ctx.fill();
  }
  ctx.font = "14px Arial";
  ctx.textAlign = "center";

  ctx.fillText(value, width / 2 + x, y + 18);

  // draw stroke if exist
  if (stroke) {
    ctx.stroke();
  }
}

// function swap
// swap two element of an array
function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
          return false;
      }
  }
  return true;
}

// data

const colors = {
  ideal: "black",
  compared: "purple",
  okay: "green",
  swapped: "red",
  selected: "blue"
};

const operations = {
  swap: "swap",
  compare: "compare",
  select: "select"
};