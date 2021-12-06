
function average(numbers) {
  const filtered = numbers.filter(number=>!isNaN(number));
  return filtered.reduce((p, c)=> p + c, 0) / filtered.length;
}

module.exports = {average};
