    import { Link } from 'react-router-dom';

    import Section from '../../common/Section';

    function AboutPreview() {
    return (
        <Section>
        <article className="max-w-4xl">
            <header>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                About
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
                Hello!
            </h2>
            </header>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600 md:text-xl">
            I’m a Content Strategist with 10+ years of experience driving SEO,
            organic growth and demand generation through data-informed content
            strategies. I’ve built high-performing content operations, led
            multidisciplinary teams and developed editorial frameworks that
            connect business goals with acquisition, conversion and brand growth.
            </p>

            <footer className="mt-10">
            <Link
                to="/about"
                className="inline-flex items-center text-sm font-medium text-neutral-900 underline underline-offset-4 transition-opacity duration-200 hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4"
            >
                More about me
                <span aria-hidden="true" className="ml-2">
                →
                </span>
            </Link>
            </footer>
        </article>
        </Section>
    );
    }

    export default AboutPreview;