import React, { memo, useEffect, useState } from "react";
import { bilet } from "../../Databese";
import { defaultImg } from "../../assets/images/jpg";
import "./test.scss";
import { transform } from "lodash";

const index = memo(() => {
  const [number, setNumber] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [right, setRight] = useState(false);
  const [testNumber, setTestNumber] = useState(0);
  const [getSavollar, setSavollar] = useState([]);
  const [javobllar, setJavoblar] = useState([]);
  const [surildi, setSurildi] = useState(0);
  const [shablon, setShablon] = useState([]);

  // const [savol, setSavol] = useState(0);
  // let getSavollar = JSON.parse(localStorage.getItem('shablon')) ? JSON.parse(localStorage.getItem('shablon')):[]
  // let shablon;
  useEffect(() => {
    // shablon = JSON.parse(localStorage.getItem('shablon'))?JSON.parse(localStorage.getItem('shablon')):[];
    // console.log(shablon);
    setJavoblar(shablon);
    // nima(shablon)
  }, [disabled, surildi]);
  // function nima(p){
  //   console.log(p);
  // }
  console.log(javobllar);
  const hendleClick = (index, i) => {
    setDisabled(true);
    setTestNumber(index);
    setShablon([
      ...shablon,
      {
        disabled: true,
        savol: i,
        variant: index,
        status: bilet.bilet1[i].right == index,
      },
    ]);
    // window.localStorage.setItem('shablon',JSON.stringify(shablon));

    console.log(shablon);
    if (index == bilet.bilet1[testNumber].right) {
      setSavollar([
        ...getSavollar,
        { id: testNumber, index: index, right: "bg-success" },
      ]);
      setRight(true);
      // setSavollar()
    } else {
      setRight(false);
      setSavollar([
        ...getSavollar,
        { id: testNumber, index: "", right: "bg-danger" },
      ]);
    }

    setDisabled(true);
  };
  const hendlenext = (id) => {
    setSurildi(id);
    setRight(false);

    setDisabled(false);
  };
  return (
    <div>
      <div
        className="test__container"
        style={{ transform: `translateX(${-surildi * 100}vw)` }}
      >
        {bilet.bilet1.map((item, i) => (
          <div id="test" key={item.id} className="test__pege">
            <h1 className="test__title">{item.question}</h1>
            <div className="test__box">
              <img
                className="test__img"
                src={item.img ? item.img : defaultImg}
                alt=""
              />
              <ul className="test__savollari">
                {item.answer.map((answer, index) => (
                  <button
                    style={
                      shablon?.find((e) => e.savol === i)?.disabled
                        ? shablon?.find(
                            (e) => e.savol === i && e.variant === index
                          )?.variant === index
                          ? shablon?.find((e) => e.variant === index)?.status
                            ? { backgroundColor: "green" }
                            : { backgroundColor: "red" }
                          : null
                        : null
                    }
                    disabled={shablon.find((e) => e.savol == i)?.disabled}
                    id={i.toString()}
                    key={index}
                    onClick={() => hendleClick(index, i)}
                  >
                    <p>F{index + 1}</p>
                    <p>{answer}</p>
                  </button>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <footer className="footer__test">
        <ul>
          {bilet.bilet1.map((item, index) => (
            <li
              style={
                shablon.find((e) => e.savol == item.id)?.disabled
                  ? shablon[index]?.status
                    ? { backgroundColor: "green" }
                    : { backgroundColor: "red" }
                  : null
              }
              id={item.id == surildi ? "true" : "false"}
              className={item.id == surildi ? "true" : "false"}
              onClick={() => hendlenext(index)}
              key={item.id}
            >
              {item.id + 1}
            </li>
          ))}
        </ul>
        <div>0:23:00</div>
      </footer>
    </div>
  );
});

export default index;
// disabled && testNumber == index? bilet.bilet1[i].right == testNumber ?{backgroundColor:'green'}:{backgroundColor:'red'}:null
