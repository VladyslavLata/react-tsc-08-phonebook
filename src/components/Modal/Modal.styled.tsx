import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);

  body & {
    overflow: hidden;
  }
`;

export const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[5]}px;
  width: 500px;
  height: 400px;
  border-radius: ${p => p.theme.radii.md};
  background-color: ${p => p.theme.colors.bgPrimary};
`;

export const ButtonCloseModal = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.round};
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.46);
  background-color: ${p => p.theme.colors.bgSecondary};
  cursor: pointer;

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
  }

  &:active {
    box-shadow: none;
  }
`;
