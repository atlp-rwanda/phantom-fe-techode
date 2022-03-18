import React from 'react'
import Explore from '../../components/Explore/Explore';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HowToStart from '../../components/HowToStart/HowToStart';
import Intro from '../../components/Intro/Intro';
import Services from '../../components/Services/Services';
import Testimonials from '../../components/Testimonials/Testimonials';
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
