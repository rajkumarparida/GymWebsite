import { Helmet } from 'react-helmet-async';
import { Hero } from '../sections/Hero';
import { Stats } from '../sections/Stats';
import { Programs } from '../sections/Programs';
import { WhyChooseUs } from '../sections/WhyChooseUs';
import { Testimonials } from '../sections/Testimonials';
import { Gallery } from '../sections/Gallery';
import { Blog } from '../sections/Blog';
import { Newsletter } from '../sections/Newsletter';
import { BMICalculator } from '../components/BMICalculator';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>AD Fitness | Premium Gym in Khallikot, Odisha</title>
        <meta name="description" content="Transform your body at AD Fitness - Khallikot's premier gym with certified trainers, modern equipment, and 500+ members." />
        <meta property="og:title" content="AD Fitness | Premium Gym" />
        <meta property="og:description" content="Join 500+ members achieving their fitness goals" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=630&fit=crop" />
      </Helmet>

      <main>
        <Hero />
        <Stats />
        <Programs />
        <WhyChooseUs />
        
        {/* BMI Calculator Section */}
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BMICalculator />
          </div>
        </section>

        <Testimonials />
        <Gallery />
        <Blog />
        <Newsletter />
      </main>
    </>
  );
};