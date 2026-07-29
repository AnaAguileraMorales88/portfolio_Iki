import Container from '../../common/Container';
import Section from '../../common/Section';
import CaseStudyCard from './CaseStudyCard';

const CASE_STUDIES = [
    {
        title: 'Case Study 01',
        category: 'Content Strategy',
        description:
            'A strategic content project focused on connecting business objectives with audience needs.',
    },
    {
        title: 'Case Study 02',
        category: 'SEO & Organic Growth',
        description:
            'An organic growth project built around data-informed content and search strategy.',
    },
    {
        title: 'Case Study 03',
        category: 'Editorial Strategy',
        description:
            'An editorial framework designed to create scalable and consistent content operations.',
    },
];

function CaseStudies() {
    return (
        <Section>
            <Container>
                <header className="max-w-2xl">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                        Selected work
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                        Selected case studies
                    </h2>
                </header>

                <section className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8 lg:mt-16">
                    {CASE_STUDIES.map((caseStudy) => (
                        <CaseStudyCard
                            key={caseStudy.title}
                            title={caseStudy.title}
                            category={caseStudy.category}
                            description={caseStudy.description}
                        />
                    ))}
                </section>
            </Container>
        </Section>
    );
}

export default CaseStudies;