    import { Link } from 'react-router-dom';

    function Button({ children, to }) {
    if (to) {
        return (
        <Link
            to={to}
            className="inline-flex min-h-11 items-center rounded-full bg-iki-green px-6 py-3 text-sm font-semibold text-iki-cream transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iki-green focus-visible:ring-offset-4"
        >
            {children}
        </Link>
        );
    }

    return (
        <button
        type="button"
        className="inline-flex min-h-11 items-center rounded-full bg-iki-green px-6 py-3 text-sm font-semibold text-iki-cream transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iki-green focus-visible:ring-offset-4"
        >
        {children}
        </button>
    );
    }

    export default Button;