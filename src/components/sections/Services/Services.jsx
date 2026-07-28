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
        <header>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            What I do
            </h2>
        </header>

        <section className="mt-12 grid gap-12 md:grid-cols-3">
            {SERVICES.map((service) => (
            <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
            />
            ))}
        </section>
        </Section>
    );
    }

    export default Services;