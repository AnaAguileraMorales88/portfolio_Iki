    import NavItem from './NavItem';
    import { NAVIGATION_ITEMS } from '../../constants/navigation';

    function Navbar() {
    return (
        <nav aria-label="Primary navigation">
        <ul className="flex items-center gap-8">
            {NAVIGATION_ITEMS.map((item) => (
            <NavItem
                key={item.id}
                href={item.href}
                label={item.label}
            />
            ))}
        </ul>
        </nav>
    );
    }

    export default Navbar;