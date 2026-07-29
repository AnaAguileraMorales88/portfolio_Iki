    import { Link } from 'react-router-dom';

    import Section from '../../common/Section';

    function ContactCTA() {
    return (
        <Section>
        <article className="border-t border-neutral-200 pt-16 md:pt-20">
            <header className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Let's work together
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
                Have a project in mind or looking to build a stronger content
                strategy?
            </h2>
            </header>

            <footer className="mt-10">
            <Link
                to="/contact"
                className="inline-flex items-center text-base font-medium text-neutral-900 underline underline-offset-4 transition-opacity duration-200 hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4"
            >
                Let&apos;s talk
                <span aria-hidden="true" className="ml-2">
                →
                </span>
            </Link>
            </footer>
        </article>
        </Section>
    );
    }

    export default ContactCTA;