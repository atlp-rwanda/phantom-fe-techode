import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {SuccessButton , DangerButton , InfoButton} from '../../components/buttons/Buttons';
import { decrementBy, decrementCount, incrementBy, incrementCount } from '../../redux/actions/counterActions';

const Home = () => {
   const { count } = useSelector((state) => state.counters);
   const dispatch = useDispatch();
    return (
        <div className='flex items-center justify-center flex-col' >
            <h2>Home</h2>
            <div>Redux setup</div>
            <span>{ count }</span>
            <div className="flex flex-wrap">
                <div className="w-24 m-2">
                   <SuccessButton name={`Incriment`} onclick={() => dispatch(incrementCount())}/>
                </div>     
                <div className="w-24 m-2">
                   <DangerButton name={`Decrement`} onclick={() => dispatch(decrementCount())}/>
                </div>
                <div className="w-26 m-2">
                   <InfoButton name={`Increment by 3 `} onclick={() => dispatch(incrementBy(3))}/>
                </div>
                <div className="w-26 m-2">
                    <DangerButton name={`Decrement by 2`} onclick={() => dispatch(decrementBy(2))}/>
                </div>              
            </div>
        </div>
    );
}
 
export default Home;
