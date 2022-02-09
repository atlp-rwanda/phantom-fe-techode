import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { increment , decrement , incrementByValue } from '../../redux/slices/counter';

const Home = () => {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (  
        <div>
            <h2>Home</h2>
            <div>Redux setup</div>
            <span>{ count }</span>
            <div className="btn">                
               <button onClick={() => dispatch(increment())}  > Incriment </button>
               <button onClick={() => dispatch(decrement())} > Decriment </button>
               <button onClick={() => dispatch(incrementByValue(3))} > Increment by 3 </button>
            </div>
        </div>
    );
}
 
export default Home;
