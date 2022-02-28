import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {SuccessButton , DangerButton , InfoButton} from '../../components/Buttons/Buttons';
import Explore from '../../components/Explore/Explore';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HowToStart from '../../components/HowToStart/HowToStart';
import Intro from '../../components/Intro/Intro';
import Services from '../../components/Services/Services';
import Testimonials from '../../components/Testimonials/Testimonials';
import { decrementBy, decrementCount, incrementBy, incrementCount } from '../../redux/actions/counterActions';
import "./Home.css"

const Home = () => {
   const { count } = useSelector((state) => state.counters);
   const dispatch = useDispatch();
    return (
        <div className='min-h-full w-full bg-gray-100 font-body' >
            <div className='h-screen w-full flex-col'>
            <Header />
            <Intro />
            <HowToStart />
            <Explore />
            <Services />
            <Testimonials />
            <Footer />
            </div>
        </div>
    );
}
 
export default Home;
