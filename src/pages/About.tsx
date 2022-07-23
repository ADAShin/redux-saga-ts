import { MDBTypography } from 'mdb-react-ui-kit';
import { FC } from 'react';

export const About: FC = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <MDBTypography note noteColor="primary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </MDBTypography>
    </div>
  );
};
