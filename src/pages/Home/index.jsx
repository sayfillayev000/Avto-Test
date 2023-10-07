import React, { memo, useState } from "react";
import { Link } from "react-router-dom";

const index = memo(() => {
  const [biletlar, setBiletlar] = useState(false)
  return (
    <div className="home">
      {
        !biletlar && <section className="test__info">
          <h4>Mazkur testlar O'zbekiston Respublikasi YHXB tomonidan tasdiqlangan rasmiy biletlar asosida tuzilgan</h4>
          <button className="mavzular" type="button">Mavzular bo'yicha trenirovkani boshlash </button>
          <div className="btn__box">
            <button onClick={() => setBiletlar(true)} type="button">Biletlar bo'yicha trenirovkani boshlash</button>
            <button type="button">Imtihon topshirish </button>
          </div>
        </section>
      }
      {
        biletlar && <section className="home__peges">
          <form className="home__form">
            <select name="" id="" className="home__select">
              <option value="1-Bilet">1-Bilet</option>
              <option value="2-Bilet">2-Bilet</option>
              <option value="3-Bilet">3-Bilet</option>
              <option value="4-Bilet">4-Bilet</option>
              <option value="5-Bilet">5-Bilet</option>
              <option value="6-Bilet">6-Bilet</option>
              <option value="7-Bilet">7-Bilet</option>
              <option value="8-Bilet">8-Bilet</option>
              <option value="9-Bilet">9-Bilet</option>
              <option value="10-Bilet">10-Bilet</option>
            </select>
            <Link to="/biletlar">
              <button className="form__submit" type="button">Boshlash</button>
            </Link>
          </form>
        </section>
      }
    </div>
  );
});

export default index;
