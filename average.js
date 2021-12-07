
function average(numbers, threshold = 0.25) {
  const filtered = numbers.filter(number=>!isNaN(number));
  const mean = filtered.reduce((p, c)=> p + c, 0) / filtered.length;
  const difference = filtered.map((n, i, a) => n - (a[i-1] || 0));

  const d_mean = difference.reduce((p, c)=> p + c, 0) / difference.length;
  const d_variance = difference.reduce((p, c)=> p + Math.pow((c - d_mean), 2), 0) / difference.length;
  const d_cov = Math.sqrt(d_variance) / d_mean;

  if (d_cov > threshold) {
    return NaN; 
  } else {
    return mean;
  } 

}

module.exports = {average};
