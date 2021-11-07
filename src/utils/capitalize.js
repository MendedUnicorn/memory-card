export default function capitalize(str) {
  const strArr = str.split('');
  return strArr[0].toUpperCase() + str.slice(1);
}
