import React from 'react'
import { ToastContainer } from 'react-toastify';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Intro from '../../components/Intro/Intro';
import Services from '../../components/Services/Services';
import { decrementBy, decrementCount, incrementBy, incrementCount } from '../../redux/actions/counterActions';
import "./Home.css"

const Home = () => {

    return (
        <div className='min-h-full w-full bg-gray-100 font-body' >
             {/* =========== Start:: ToastContainer =========== */}
             <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                className={`z-50`}
            />
            {/* =========== End:: ToastContainer ================= */}
            <div className='h-screen w-full flex-col'>
            <Header />
            <Intro />
            <Services />
            <Footer />
            </div>
        </div>
    );
}
 
export default Home;
