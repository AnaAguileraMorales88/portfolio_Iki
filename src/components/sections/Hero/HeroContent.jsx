    import Button from '../../ui/Button';

    function HeroContent() {
    return (
        <article className="max-w-5xl">
        <header>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
            Content Strategist | Storytelling | SEO &amp;  ORGANIC Growth 
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-neutral-950 md:text-6xl lg:text-7xl">
            I build content strategies that connect brands with audiences and
            drive business growth.
            </h1>
        </header>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-neutral-600">
            I’m a Content Strategist with 10+ years of experience driving SEO,
            organic growth and demand generation through data-informed content
            strategies. I build editorial frameworks that align business goals,
            audience needs and measurable results.
        </p>

        <footer className="mt-12">
            <Button>Let's work together</Button>
        </footer>
        </article>
    );
    }

    export default HeroContent;