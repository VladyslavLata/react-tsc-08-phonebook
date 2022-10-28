import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import { SectionTitle } from './Sectio.styled';

export const Section = ({ title, children }) => (
  <Box as="section" px={4} pb={4} pt="80px" mx="auto" position="relative">
    {title && <SectionTitle>{title}</SectionTitle>}
    {children}
  </Box>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
