    import { useState } from 'react';

    import NavItem from './NavItem';
    import { NAVIGATION_ITEMS } from '../../constants/navigation';

    function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((currentState) => !currentState);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <nav aria-label="Primary navigation">
        <button
            type="button"
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4 md:hidden"
        >
            <span className="sr-only">
            {isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            </span>

            <span aria-hidden="true" className="text-2xl">
            {isOpen ? '×' : '☰'}
            </span>
        </button>

        <ul
            id="primary-navigation"
            className={`${
            isOpen ? 'flex' : 'hidden'
            } absolute left-0 right-0 top-20 z-10 flex-col gap-6 border-b border-neutral-200 bg-white px-6 py-8 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}
        >
            {NAVIGATION_ITEMS.map((item) => (
            <NavItem
                key={item.id}
                href={item.href}
                label={item.label}
                onNavigate={handleClose}
            />
            ))}
        </ul>
        </nav>
    );
    }

    export default Navbar;