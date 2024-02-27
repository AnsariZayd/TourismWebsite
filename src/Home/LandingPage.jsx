import Navbar from '../Components/Navbar/Navbar';
import Explore from '../Components/Explore/Explore';
import About from '../Components/About/About';
import Contact from '../Components/About/Contact';
import React from 'react';

import Footer from '../Components/Footer/footer';

const LandingPage = () => {
 
	return (
		<>
			<Navbar />
			<Explore />
			<About />
			<Contact />
      <Footer/>
		</>
	);
};

export default LandingPage;
