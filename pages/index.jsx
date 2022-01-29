import Head from 'next/head';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ServiceSection from '../components/ServiceSection';
import Header from './../components/Header';
import Hero from './../components/Hero';
import Portfolio from './../components/Portfolio';

export default function Home() {
  return (
    <div className="bg-color">
      <Head>
        <title>Digital Agency</title>
        <meta name="description" content="Digital Agency Figma To React App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-2 container m-auto">
        <Navbar />
        <Header />
        <Hero />
        <ServiceSection />
        <Portfolio />
        <ContactBanner />
        <Footer />
      </div>
    </div>
  );
}
