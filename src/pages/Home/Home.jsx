    import DefaultLayout from '../../layouts/DefaultLayout';

    import Hero from '../../components/sections/Hero';
    import Services from '../../components/sections/Services';
    import CaseStudies from '../../components/sections/CaseStudies';
    import CreativeWork from '../../components/sections/CreativeWork';
    import AboutPreview from '../../components/sections/AboutPreview';
    import ContactCTA from '../../components/sections/ContactCTA';

    function Home() {
    return (
        <DefaultLayout>
        <Hero />

        <Services />

        <CaseStudies />

        <CreativeWork />

        <AboutPreview />

        <ContactCTA />
        </DefaultLayout>
    );
    }

    export default Home;