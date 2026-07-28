    function ServiceCard({ title, description }) {
    return (
        <article>
        <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
            {title}
        </h3>

        <p className="mt-4 max-w-sm text-base leading-7 text-neutral-600">
            {description}
        </p>
        </article>
    );
    }

    export default ServiceCard;