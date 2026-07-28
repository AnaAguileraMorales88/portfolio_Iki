    import Container from '../common/Container';
    import Navbar from '../navigation/Navbar';

    function Header() {
    return (
        <header className="border-b border-neutral-200">
        <Container>
            <section className="flex h-20 items-center justify-between">
            <a
                href="/"
                className="text-lg font-semibold tracking-tight text-neutral-900"
                aria-label="Go to home page"
            >
                Itzel Moreno Villaseñor
            </a>

            <Navbar />
            </section>
        </Container>
        </header>
    );
    }

    export default Header;