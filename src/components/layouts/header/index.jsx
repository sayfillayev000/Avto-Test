import { memo } from "react";
import { logo } from "../../../assets/images/jpg";
import { useSelector } from "react-redux";
// const test = useSelector(test => test.display)
// console.log(test.answer);
const index = memo(() => {
  return (
    <></>
    // <>
    //   <header className="test__header">
    //      <img src={logo} alt="" />
    //      <div className="header__title">
    //       <strong>Sayfillayev</strong>
    //       <strong>Muhammad</strong>
    //      </div>
    //       {/* <h1>{test.answer}</h1> */}
    //   </header>
    // </>
  );
});

export default index;
