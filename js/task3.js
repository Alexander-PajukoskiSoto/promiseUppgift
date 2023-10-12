const fetchData = async () => {
    const res = await fetch("https://newsdata.io/api/1/news?apikey=pub_30987087f215a0f4353d950e21f279caf2ce2&language=sv"); // fetch() returns a promise, so we need to wait for it
  
    const news = await res.json(); // res is now only an HTTP response, so we need to call res.json()
  
    console.log(news); // Columbia's data will be logged to the dev console
  };
  
  fetchData();
  