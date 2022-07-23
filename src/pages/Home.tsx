import { FC, useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  MDBBtn,
  MDBContainer,
  MDBIcon,
  MDBSpinner,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTooltip,
} from 'mdb-react-ui-kit';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { deleteUserStart, loadUsersStart } from '../redux/actionCreators';
import { Link } from 'react-router-dom';

export const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsersStart());
  }, [dispatch]);

  if (loading) {
    return (
      <MDBSpinner style={{ marginTop: '15px' }} role="status">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    );
  }

  const handleDelete = (userId: number) => {
    if (window.confirm('Are you sure that you wanted to delte that user ?')) {
      dispatch(deleteUserStart(userId));
      toast.success('User Deleted Successfully');
      setTimeout(() => {
        dispatch(loadUsersStart());
      }, 200);
    }
  };

  return (
    <>
      {error && toast.error(error.message)}
      <MDBContainer>
        <div className="container" style={{ marginTop: '150px' }}>
          <MDBTable>
            <MDBTableHead dark>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </MDBTableHead>
            {users && users.length > 0 ? (
              users.map((user, index) => (
                <MDBTableBody key={index}>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td>{user.status}</td>
                    <td>
                      <MDBBtn
                        className="m-1"
                        tag="a"
                        color="none"
                        onClick={() => handleDelete(user.id)}
                      >
                        <MDBTooltip title="Delete" tag="span">
                          <MDBIcon
                            fas
                            icon="trash"
                            style={{ color: '#dd4b39' }}
                            size="lg"
                          />
                        </MDBTooltip>
                      </MDBBtn>{' '}
                      <Link to={`/editUser/${user.id}`}>
                        <MDBTooltip title="Edit" tag="span">
                          <MDBIcon
                            fas
                            icon="pen"
                            style={{ color: '#55acee', marginBottom: '10px' }}
                            size="lg"
                          />
                        </MDBTooltip>
                      </Link>{' '}
                      <Link to={`/userInfo/${user.id}`}>
                        <MDBTooltip title="View" tag="span">
                          <MDBIcon
                            fas
                            icon="eye"
                            style={{ color: '#3b5938', marginBottom: '10px' }}
                            size="lg"
                          />
                        </MDBTooltip>
                      </Link>
                    </td>
                  </tr>
                </MDBTableBody>
              ))
            ) : (
              <MDBTableBody className="align-center mb-0">
                <tr>
                  <td colSpan={7} className="text-center mb-0">
                    No Data found
                  </td>
                </tr>
              </MDBTableBody>
            )}
          </MDBTable>
        </div>
      </MDBContainer>
      <div>
        <h2>Home</h2>
      </div>
    </>
  );
};
