import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { decrementBy, decrementCount, incrementBy, incrementCount } from '../../redux/actions/counterActions';

const Home = () => {
   const { count } = useSelector((state) => state.counters);
   const dispatch = useDispatch();
    return (
        <div>
            <h2>Home</h2>
            <div>Redux setup</div>
            <span>{ count }</span>
            <div className="btn">                
               <button onClick={() => dispatch(incrementCount())}  > Incriment </button>
               <button onClick={() => dispatch(decrementCount())} > Decriment </button>
               <button onClick={() => dispatch(incrementBy(3))} > Increment by 3 </button>
               <button onClick={() => dispatch(decrementBy(2))} > Decrement by 2 </button>
            </div>
        </div>
    );
}
 
export default Home;
