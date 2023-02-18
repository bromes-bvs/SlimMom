import { MenuStyled } from './Menu.styled';

export default function ModalMenu({ anchorEl, onClose, open, children }) {
  return (
    <MenuStyled
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      sx={{
        top: '65px',
        backgroundColor: '#264061',
      }}
    >
      {children}
    </MenuStyled>
  );
}
