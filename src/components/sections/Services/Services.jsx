    import Container from '../../common/Container';
    import Section from '../../common/Section';
    import ServiceCard from './ServiceCard';

    const SERVICES = [
    {
        title: 'Content Strategy',
        description:
        'Building strategic content systems aligned with business goals and audience needs.',
    },
    {
        title: 'SEO & Organic Growth',
        description:
        'Creating search-driven strategies that increase visibility, traffic and demand.',
    },
    {
        title: 'Editorial Frameworks',
        description:
        'Designing scalable processes for consistent and high-performing content production.',
    },
    ];

    function Services() {
    return (
        <Section>
        <Container>
            <header className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Expertise
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                What I do
            </h2>
            </header>

            <section className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8 lg:mt-16">
            {SERVICES.map((service) => (
                <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                />
            ))}
            </section>
        </Container>
        </Section>
    );
    }

    export default Services;