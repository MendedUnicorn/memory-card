export default function randomize(usedIndexes, num) {
  let array = usedIndexes;

  for (let i = 0; i < num; ) {
    let num = Math.floor(Math.random() * 150);
    if (!array.includes(num)) {
      array.push(num);
      i++;
    } else {
      num = Math.floor(Math.random() * 150);
    }
  }
  console.log('input: ', usedIndexes, 'output ', array);
  return array;
}
