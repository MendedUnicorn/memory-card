export default async function getData(url) {
  let arr = [];
  for (let i = 1; i < 150; i++) {
    await setTimeout(
      () =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
          .then((data) => data.json())
          .then((pokemon) => {
            arr.push({
              name: pokemon.name,
              image: pokemon.sprites.other['official-artwork'].front_default,
            });
            console.log('fetched ', pokemon.name);
          }),
      1000
    );
  }
  console.log(arr);
  return JSON.stringify(arr, null, 2);
}
