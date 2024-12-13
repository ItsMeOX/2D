function drawGraph(ctx, startX, endX, currX, m, b, mean, std) {
  // ctx: context of canvas
  // startX: starting X of slider
  // endX: ending X of slider
  // currX: current X of slider
  // m: gradient
  // b: y-intercept
  // mean: mean used for training
  // std: std used for training

  // Function to draw on canvas given parameters

  const canvas = ctx.canvas;
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  const padding = 30.5;

  // Clear canvas
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // Draw X and Y axes
  ctx.beginPath();
  // X axis
  ctx.moveTo(padding, canvasHeight - padding);
  ctx.lineTo(canvasWidth - padding, canvasHeight - padding);
  // Y axis
  ctx.moveTo(padding, canvasHeight - padding);
  ctx.lineTo(padding, padding);
  ctx.strokeStyle = '#BFBFBF';
  ctx.lineWidth = 1;
  ctx.stroke();

  // Draw graph points and lines
  let startY = startX * m + b;
  let endY = endX * m + b;
  const minY = Math.min(startY, endY);
  const maxY = Math.max(startY, endY);
  startY = maxY - startY;
  endY = maxY - endY;

  const scaleX = (canvasWidth - 2 * padding) / (endX - startX);
  const scaleY = (canvasHeight - 2 * padding) / (maxY - minY);

  // const scaledStartX = padding + startX * scaleX;
  const scaledStartX = padding + 0 * scaleX;
  const scaledStartY = padding + startY * scaleY;
  const scaledEndX = padding + (endX - startX) * scaleX;
  const scaledEndY = padding + endY * scaleY;

  let currY = currX * m + b;
  currY = maxY - currY;
  const scaledCurrX = padding + (currX - startX) * scaleX;
  const scaledCurrY = padding + currY * scaleY;

  ctx.beginPath();
  ctx.strokeStyle = '#5C93E2';
  ctx.lineWidth = 1.5;
  ctx.moveTo(scaledStartX, scaledStartY);
  ctx.lineTo(scaledEndX, scaledEndY);
  ctx.stroke();

  // Draw current point
  ctx.shadowColor = '#FFFFFF';
  ctx.shadowBlur = 5;

  ctx.fillStyle = '#D9D9D9';
  ctx.beginPath();
  ctx.arc(scaledCurrX, scaledCurrY, 3, 0, 2 * Math.PI);
  ctx.fill();

  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;

  // Add coordinate labels to current point
  ctx.font = '12px Inter';
  const normalized_x = normalize_z(currX, mean, std);
  let predicted_y = normalized_x * m + b;
  predicted_y = predicted_y.toFixed(7);
  ctx.fillText(
    '(' + currX + ', ' + predicted_y + ')',
    scaledCurrX,
    scaledCurrY - 20
  );
}

function updateGraph(
  graphId,
  minX,
  currX,
  maxX,
  gradient,
  yIntercept,
  mean,
  std
) {
  // graphId: id of canvas element
  // startX: starting X of slider
  // endX: ending X of slider
  // currX: current X of slider
  // m: gradient
  // b: y-intercept
  // mean: mean used for training
  // std: std used for training

  // Function to update canvas when slider is moved

  const canvas = document.getElementById(graphId);
  const graphCtx = canvas.getContext('2d');
  drawGraph(graphCtx, minX, maxX, currX, gradient, yIntercept, mean, std);
}

function normalize_z(input, mean, std) {
  // Function for normalizing data
  
  return (input - mean) / std;
}
