import React from 'react'
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
