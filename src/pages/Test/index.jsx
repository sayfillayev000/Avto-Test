import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { bilet } from '../../Databese'
import { defaultImg } from '../../assets/images/jpg'
import { testDisplay } from '../../store/testsDisplay'
import { Footer } from '../../components/layouts'

const index = memo(() => {
  const dispatch = useDispatch()
  const test = useSelector(test => test.display)
  console.log("render2");
  const hendlestyle = (index) => {
    console.log(bilet.bilet1[test.answer].right, "data");
    console.log(index, "index");
    if (bilet.bilet1[test.answer].right === index) {
      console.log(true);
      return "trueTest"
    } else if (index == 0) {
      console.log(false);
      return "falseTest"
    } else if (index == 1) {
      console.log(false);
      return "falseTest"
    } else if (index == 2) {
      console.log(false);
      return "falseTest"
    } else if (index == 3) {
      console.log(false);
      return "falseTest"
    } else if (index == 4) {
      console.log(false);
      return "falseTest"
    }
  }
  console.log(test.right);
  return (
    <>
      <div className='test__pege'>
        <h1 className='test__title'>{bilet.bilet1[test.answer].question}</h1>
        <div className='test__box'>
          <img className='test__img' src={bilet.bilet1[test.answer].img ? bilet.bilet1[test.answer].img : defaultImg} alt="" />
          <ul className='test__savollari'>
            {
              bilet.bilet1[test.answer].answer.map((answer, index) => (
                <li
                  style={(test.right && index == bilet.bilet1[test.answer].right) ? { backgroundColor: "#03DF02" } : test.right ? { backgroundColor: "red" } : null} key={answer.id} onClick={() => dispatch(testDisplay.rightTest(index))}><p>F{index + 1}</p><p>{answer}</p></li>
              ))
            }
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
})

export default index