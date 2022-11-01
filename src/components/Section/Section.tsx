import { Box } from 'components/Box/Box';
import { SectionTitle } from './Sectio.styled';

interface IProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<IProps> = ({ title, children }) => (
  <Box as="section" px={4} pb={4} pt="80px" mx="auto" position="relative">
    {title && <SectionTitle>{title}</SectionTitle>}
    {children}
  </Box>
);
