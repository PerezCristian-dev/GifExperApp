export const getGifs = async (category)=>{
    const request = `https://api.giphy.com/v1/gifs/search?api_key=0LAVLxZkLxJVYUFIGmr9p5spb7cbQQg5&q=${category}&limit=10`
    const reps = await fetch(request);
    const {data} = await reps.json();
    const gifs = data.map(compo=> ({
      id: compo.id,
      title: compo.title,
      url: compo.images.original.url
    }));
 
    return gifs;
  }
  