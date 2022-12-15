import React, { useState, useEffect } from 'react';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch('https://api.imgflip.com/get_memes');
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImage() {
    const memesArray = allMemes;
    const n = Math.floor(Math.random() * memesArray.length);
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: memesArray[n].url,
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <section>
      <div className="form">
        <div className="form-inputs">
          <input
            type="text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            placeholder="Top text"
          />
          <input
            type="text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            placeholder="Bottom text"
          />
        </div>

        <input
          className="meme-btn"
          type="button"
          value="Get a new meme image 🖼"
          onClick={getMemeImage}
        />
      </div>

      <div className="meme">
        <img className="meme-img" src={meme.randomImage} />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </section>
  );
}
