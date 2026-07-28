    function Button({ children, type = 'button', onClick }) {
    return (
        <button
        type={type}
        onClick={onClick}
        className="
            inline-flex
            items-center
            justify-center
            rounded-full
            border
            border-neutral-900
            px-6
            py-3
            text-sm
            font-medium
            text-neutral-900
            transition-colors
            duration-200
            hover:bg-neutral-900
            hover:text-white
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-neutral-900
            focus-visible:ring-offset-2
        "
        >
        {children}
        </button>
    );
    }

    export default Button;