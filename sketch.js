function setup() {
  createCanvas(400, 400);

  background(255);

  noFill();

  const nth = 1, //nth closest point
    numPoints = 20,
    points = [];

  for (let i = 0; i < numPoints; i++) {
    points.push(createVector(random(width), random(height)));
  }

  strokeWeight(1);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let distances = [];
      for (let i = 0; i < points.length; i++) {
        distances.push(dist(x, y, points[i].x, points[i].y));
      }
      distances = distances.sort(function (a, b) { return a - b; });

      stroke(distances[nth]);

      point(x, y);
    }
  }

  stroke(255, 0, 0);
  strokeWeight(7);

  for (let i = 0; i < points.length; i++) {
    point(points[i].x, points[i].y);
  }
}