    import { Link } from 'react-router-dom';

    import Container from '../../common/Container';
    import Section from '../../common/Section';

    function AboutPreview() {
    return (
        <Section>
        <Container>
            <article className="rounded-[2rem] bg-iki-green px-6 py-12 text-iki-cream sm:px-10 md:px-14 md:py-16 lg:px-20 lg:py-20">
            <header className="max-w-4xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-iki-lime">
                About
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl md:text-6xl">
                Hello!
                </h2>
            </header>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-iki-cream/80 md:text-xl md:leading-9">
                I’m a Content Strategist with 10+ years of experience driving SEO,
                organic growth and demand generation through data-informed content
                strategies. I’ve built high-performing content operations, led
                multidisciplinary teams and developed editorial frameworks that
                connect business goals with acquisition, conversion and brand
                growth.
            </p>

            <footer className="mt-10">
                <Link
                to="/about"
                className="inline-flex items-center text-sm font-semibold text-iki-cream underline decoration-iki-lime underline-offset-8 transition-transform duration-200 hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iki-lime focus-visible:ring-offset-4 focus-visible:ring-offset-iki-green"
                >
                More about me
                <span aria-hidden="true" className="ml-2">
                    →
                </span>
                </Link>
            </footer>
            </article>
        </Container>
        </Section>
    );
    }

    export default AboutPreview;