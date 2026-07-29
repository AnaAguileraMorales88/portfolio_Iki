import Button from '../../ui/Button';

function HeroContent() {
    return (
        <article className="max-w-5xl">
            <header>

                <p className="mb-8 text-xs font-semibold uppercase leading-relaxed tracking-[0.12em] text-iki-green sm:text-sm md:whitespace-nowrap md:text-lg md:tracking-[0.2em]">
                    <span
                        aria-hidden="true"
                        className="mr-3 inline-block h-2 w-2 rounded-full bg-iki-lime align-middle md:h-3 md:w-3"
                    />
                    Storytelling Content Strategist | Growth through Content | SEO &amp;
                    Storytelling
                </p>

                <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-iki-ink sm:text-6xl md:text-7xl lg:text-8xl">
                    I build content strategies that connect
                    <br className="hidden md:block" />
                    <span className="text-iki-green">brands with audiences</span> and drive
                    <br className="hidden md:block" />
                    <span className="text-iki-green">business growth.</span>
                </h1>
            </header>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-neutral-600 md:text-xl">
                I’m a Content Strategist with 10+ years of experience driving SEO,
                organic growth and demand generation through data-informed content
                strategies. I build editorial frameworks that align business goals,
                audience needs and measurable results.
            </p>

            <footer className="mt-10 md:mt-12">
                <Button to="/contact">Let&apos;s work together</Button>
            </footer>
        </article>
    );
}

export default HeroContent;