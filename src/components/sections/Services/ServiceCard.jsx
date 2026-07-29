    function ServiceCard({ title, description }) {
    return (
        <article className="group border-t border-iki-green/20 pt-6">
        <span
            aria-hidden="true"
            className="mb-8 block h-3 w-3 rounded-full bg-iki-lime"
        />

        <h3 className="text-xl font-semibold tracking-tight text-iki-ink md:text-2xl">
            {title}
        </h3>

        <p className="mt-4 max-w-sm text-base leading-7 text-iki-muted">
            {description}
        </p>
        </article>
    );
    }

    export default ServiceCard;