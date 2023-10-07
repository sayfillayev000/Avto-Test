import { memo } from "react";
import { bilet } from "../../../Databese";
import { useDispatch, useSelector } from "react-redux";
import { testDisplay } from "../../../store/testsDisplay";

const index = memo(() => {
 const id = useSelector(index => index.display.right )
 const test = useSelector(test => test.display)
  const dispatch = useDispatch()
  const hendlenext = (id) =>{
    dispatch(testDisplay.rightTest(false))
   dispatch(testDisplay.nextTest(id - 1))
 }
 console.log(id);
  return (
      <footer className="footer__test">
        <ul> 
          {
          bilet.bilet1.map((item, index) =>(
            <li style={id == bilet.bilet1[test.answer].right ? {backgroundColor:"#03DF02"}: {backgroundColor:"red"}} onClick={() => hendlenext(item.id)} key={item.id}>{index +1}</li>
          ))
          }
       
        </ul>
        <div>
          0:23:00
        </div>
      </footer>
  );
});

export default index;
