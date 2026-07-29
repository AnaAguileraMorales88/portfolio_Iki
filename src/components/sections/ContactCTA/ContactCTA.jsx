    import { Link } from 'react-router-dom';

    import Container from '../../common/Container';
    import Section from '../../common/Section';

    function ContactCTA() {
    return (
        <Section>
        <Container>
            <article className="rounded-[2rem] bg-iki-lime px-6 py-12 text-iki-green sm:px-10 md:px-14 md:py-16 lg:px-20 lg:py-24">
            <header className="max-w-5xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em]">
                Let&apos;s work together
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
                Have a project in mind or looking to build a stronger content
                strategy?
                </h2>
            </header>

            <footer className="mt-10 md:mt-12">
                <Link
                to="/contact"
                className="group inline-flex items-center rounded-full bg-iki-green px-6 py-3 text-sm font-semibold text-iki-cream transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iki-green focus-visible:ring-offset-4 focus-visible:ring-offset-iki-lime"
                >
                Let&apos;s talk
                <span
                    aria-hidden="true"
                    className="ml-3 transition-transform duration-200 group-hover:translate-x-1"
                >
                    →
                </span>
                </Link>
            </footer>
            </article>
        </Container>
        </Section>
    );
    }

    export default ContactCTA;