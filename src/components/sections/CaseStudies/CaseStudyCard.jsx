    function CaseStudyCard({ title, category, description }) {
    return (
        <article className="group border-t border-iki-green/20 pt-6 transition-transform duration-300 hover:-translate-y-1">
        <header>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-iki-green">
            {category}
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-iki-ink">
            {title}
            </h3>
        </header>

        <p className="mt-4 max-w-xl text-base leading-7 text-iki-muted">
            {description}
        </p>

        <span
            aria-hidden="true"
            className="mt-8 block text-lg text-iki-green transition-transform duration-300 group-hover:translate-x-2"
        >
            →
        </span>
        </article>
    );
    }

    export default CaseStudyCard;