    import { NavLink } from 'react-router-dom';

    function NavItem({ href, label, onNavigate }) {
    return (
        <li>
        <NavLink
            to={href}
            onClick={onNavigate}
            className={({ isActive }) =>
            `text-sm font-medium transition-colors duration-200 ${
                isActive
                ? 'text-neutral-900'
                : 'text-neutral-500 hover:text-neutral-900'
            }`
            }
        >
            {label}
        </NavLink>
        </li>
    );
    }

    export default NavItem;