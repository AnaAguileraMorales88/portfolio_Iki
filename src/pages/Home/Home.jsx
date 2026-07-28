    import DefaultLayout from '../../layouts/DefaultLayout';
    import Container from '../../components/common/Container';

    import Hero from '../../components/sections/Hero';
    import Services from '../../components/sections/Services';

    function Home() {
    return (
        <DefaultLayout>
        <Container>
            <Hero />

            <Services />
        </Container>
        </DefaultLayout>
    );
    }

    export default Home;