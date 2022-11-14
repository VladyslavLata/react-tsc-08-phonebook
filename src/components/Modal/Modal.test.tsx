import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from './Modal';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../constants/theme';

// const onClose = jest.fn();

// describe('MyComponent', () => {
//   const root = document.createElement('div')!;

//   it('render modal children', () => {
//     render(
//       <ThemeProvider theme={theme}>
//         <Modal onClose={onClose}>
//           <p>hello</p>
//         </Modal>
//       </ThemeProvider>,
//       root;
//     );
//   });
//   userEvent.click(screen.getByRole('button'));
//   expect(onClose).toBeCalledTimes(1);
// });
