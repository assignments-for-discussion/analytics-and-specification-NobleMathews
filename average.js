
function average(numbers, threshold = 0.25) {
  const filtered = numbers.filter((number)=>!isNaN(number));
  const mean = filtered.reduce((p, c)=> p + c, 0) / filtered.length;
  const difference = filtered.map((n, i, a) => n - (a[i-1] || 0));

  const dMean = difference.reduce((p, c)=> p + c, 0) / difference.length;
  const varReducer = (p, c)=>p + Math.pow((c - dMean), 2);
  const dVariance = difference.reduce(varReducer, 0) / difference.length;
  const dCov = Math.sqrt(dVariance) / dMean;

  if (dCov > threshold) {
    return NaN;
  } else {
    return mean;
  }
}

module.exports = {average};
