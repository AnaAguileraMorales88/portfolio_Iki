    function CreativeWorkCard({ title, category, description }) {
    return (
        <article className="border-t border-neutral-200 pt-6">
        <header>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            {category}
            </p>

            <h3 className="mt-3 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
            {title}
            </h3>
        </header>

        <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
            {description}
        </p>
        </article>
    );
    }

    export default CreativeWorkCard;