    import Container from '../../common/Container';
    import Section from '../../common/Section';
    import CreativeWorkCard from './CreativeWorkCard';

    const CREATIVE_WORK = [
    {
        title: 'Creative Project 01',
        category: 'Storytelling',
        description:
        'A creative content project focused on building meaningful connections between brands and audiences.',
    },
    {
        title: 'Creative Project 02',
        category: 'Editorial',
        description:
        'An editorial project combining strategic thinking, storytelling and content development.',
    },
    {
        title: 'Creative Project 03',
        category: 'Content',
        description:
        'A content project designed to communicate complex ideas through clear and engaging storytelling.',
    },
    ];

    function CreativeWork() {
    return (
        <Section>
        <Container>
            <header>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Creative work
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                Selected creative work
            </h2>
            </header>

            <section className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8 lg:mt-16">
            {CREATIVE_WORK.map((project) => (
                <CreativeWorkCard
                key={project.title}
                title={project.title}
                category={project.category}
                description={project.description}
                />
            ))}
            </section>
        </Container>
        </Section>
    );
    }

    export default CreativeWork;