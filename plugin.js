$(function(){

	// The .drawLine() object
var obj = {
  strokeStyle: '#000',
  strokeWidth: 6,
  rounded: true
};

// Your array of points
var pts = [
  [80, 50],
  [100, 150],
  [200, 100],
  [150, 200]
];

// Add the points from the array to the object
for (var p = 0; p < pts.length; p += 1) {
  obj['x'+(p+1)] = pts[p][0];
  obj['y'+(p+1)] = pts[p][1];
}

// Draw the line
$('canvas').drawLine(obj);


});