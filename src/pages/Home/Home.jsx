import Button from '../../components/ui/Button';
import Container from '../../components/common/Container';
import DefaultLayout from '../../layouts/DefaultLayout';

function Home() {
  return (
    <DefaultLayout>
      <Container>
        <h1>Home</h1>

        <Button>Let's Talk</Button>
      </Container>
    </DefaultLayout>
  );
}

export default Home;