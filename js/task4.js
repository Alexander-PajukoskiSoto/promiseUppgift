const fetchCountry = async (alpha3Code) => {
  try {
    const res = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_30987087f215a0f4353d950e21f279caf2ce2&language=sv`
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};


const fetchCountryAndNeigbors = async () => {
  const columbia = await fetchCountry("col");

  const neighbors = await Promise.all(
    columbia.borders.map((border) => fetchCountry(border))
  );

  console.log(neighbors);
};

fetchCountryAndNeigbors();

//skipped