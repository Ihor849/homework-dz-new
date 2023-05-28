import { useSelector, useDispatch} from 'react-redux';
import {update, getClicksValue} from 'redux/clicksSlice';
import './App.css'

export const App = () => {
  const numberOfclicks = useSelector(getClicksValue );
  const dispatch =useDispatch()
 console.log(update(15));
  return (
    <div className='container'>
     <h1 className='title'>HelloWord</h1>
     <p className='number'>{numberOfclicks}</p>
     <div className='btnBlock'>
       <button type="button" onClick={()=>dispatch(update(5))}className="btnClicks">Number of clicks +5</button>
       <button type="button" onClick={()=>dispatch(update(10))}className="btnClicks">Number of clicks +10</button>
       <button type="button" onClick={()=>dispatch(update(20))}className="btnClicks">Number of clicks +20</button>
     </div>
    </div>
  );
};
export default App