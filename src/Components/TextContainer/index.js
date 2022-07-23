import {useEffect} from "react"
import './/style.css'
import { fetchText } from "../../redux/Text/textSlice"
import { useSelector, useDispatch } from "react-redux"

function TextContainer() {
    const dispatch= useDispatch();

    const paras =useSelector((state)=>state.text.paras);
const format= useSelector((state)=> state.text.format);

const text=useSelector(state=>state.text.items);

 useEffect(()=>{
    dispatch(fetchText({paras: paras, format: format}));
 },
  [dispatch,paras, format]);

 return (
    <div className="textContainerDiv">{text}</div>
 )

}

export default TextContainer;