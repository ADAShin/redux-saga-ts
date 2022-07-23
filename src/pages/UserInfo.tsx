import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

import { useAppSelector } from '../hooks/redux';
import { TUser } from '../types';

export const UserInfo: FC = () => {
  const navigate = useNavigate();
  const { users } = useAppSelector((state) => state.data);
  const { id } = useParams();
  let singleUser: TUser | undefined = undefined;
  if (id) {
    singleUser = users.find((user) => user.id === Number.parseInt(id));
  }

  return (
    <div style={{ marginTop: '100px' }}>
      <div
        className="row"
        style={{
          margin: 'auto',
          padding: '15px',
          maxWidth: '450px',
          alignContent: 'center',
        }}
      >
        <p className="col-md-12 fs-3">User Detail</p>
        <hr />
        {singleUser ? (
          <>
            <p className="col-md-6 fw-bold">ID:</p>
            <p className="col-md-6">{singleUser.id}</p>
            <p className="col-md-6 fw-bold">Name:</p>
            <p className="col-md-6">{singleUser.name}</p>
            <p className="col-md-6 fw-bold">Email:</p>
            <p className="col-md-6">{singleUser.email}</p>
            <p className="col-md-6 fw-bold">Phone:</p>
            <p className="col-md-6">{singleUser.phone}</p>
            <p className="col-md-6 fw-bold">Address:</p>
            <p className="col-md-6">{singleUser.address}</p>
          </>
        ) : (
          <p className="col-md-12">Data not found.</p>
        )}
      </div>
      <MDBBtn onClick={() => navigate('/')} color="danger">
        Go Back
      </MDBBtn>
    </div>
  );
};
