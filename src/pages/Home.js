import { Box } from 'components/Box/Box';
import { Section } from 'components/Section/Section';
import phonebook from '../img/phonebook.webp';

export const Home = () => {
  return (
    <Section title="Welcome to Phonebook">
      <Box>
        <Box as="img" mx="auto" src={phonebook} alt="phonebook" />
      </Box>
    </Section>
  );
};
