import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Explore from '../../components/Explore/Explore';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HowToStart from '../../components/HowToStart/HowToStart';
import Intro from '../../components/Intro/Intro';
import Services from '../../components/Services/Services';
import Testimonials from '../../components/Testimonials/Testimonials';
import {SuccessButton , DangerButton , InfoButton} from '../../components/buttons/Buttons';
import Logout from '../../components/logout/Logout';
import { decrementBy, decrementCount, incrementBy, incrementCount } from '../../redux/actions/counterActions';
import main from '../../assets/js/main'

const Home = () => {

    return (
        <div className='min-h-full w-full font-body' style={main.style} >
            <div className='h-full w-full flex-col'>
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
