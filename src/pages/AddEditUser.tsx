import {
  MDBBtn,
  MDBInput,
  MDBValidation,
  MDBValidationItem,
} from 'mdb-react-ui-kit';
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { createUserStart, updateUserStart } from '../redux/actionCreators';
import { AddEditFormValue, TUserStatus } from '../types';

type StatusValueType = TUserStatus | '';

type FormState = {
  name: string;
  email: string;
  phone?: number;
  address: string;
  status: StatusValueType;
};

const initialFormState: FormState = {
  name: '',
  email: '',
  address: '',
  status: '',
};

const options = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
];

export const AddEditUser: FC = () => {
  const { id } = useParams();
  const [formValue, setFormValue] = useState(initialFormState);
  const [editMode, setEditMode] = useState(false);
  const { users } = useAppSelector((state) => state.data);
  const { name, email, phone, address, status } = formValue;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      // edit mode
      setEditMode(true);
      const user = users.find((user) => user.id === Number.parseInt(id));
      if (user) {
        const { id, ...formValue } = user;
        setFormValue(formValue);
        return;
      }
    } else {
      // add mode
      setFormValue(initialFormState);
      setEditMode(false);
    }
  }, [id, users]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email && phone && address && status) {
      let successMsg: string;
      const postData: AddEditFormValue = {
        ...formValue,
        phone,
        status: status as TUserStatus,
      };
      if (!editMode) {
        dispatch(createUserStart(postData));
        successMsg = 'User Added Successfully';
      } else {
        if (!id) {
          return;
        }
        dispatch(updateUserStart(Number.parseInt(id), postData));
        setEditMode(false);
        successMsg = 'User Updated Successfully';
      }
      toast.success(successMsg);
      setTimeout(() => {
        navigate('/');
      }, 500);
    }
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormValue({ ...formValue, status: e.target.value as StatusValueType });
  };

  return (
    <MDBValidation
      className="row g-3"
      style={{ marginTop: '100px' }}
      noValidate
      onSubmit={handleSubmit}
    >
      <p className="fs-2 fw-bold">
        {editMode ? 'Edit User Detail' : 'Add User Detail'}
      </p>
      <div
        style={{
          margin: 'auto',
          padding: '15px',
          maxWidth: '400px',
          alignContent: 'center',
        }}
      >
        <MDBValidationItem feedback="Please provide a name" invalid>
          <MDBInput
            value={name || ''}
            name="name"
            type="text"
            onChange={handleInput}
            required
            label="Name"
          />
        </MDBValidationItem>
        <br />
        <MDBValidationItem feedback="Please provide a email" invalid>
          <MDBInput
            value={email || ''}
            name="email"
            type="email"
            onChange={handleInput}
            required
            label="EMail"
          />
        </MDBValidationItem>
        <br />
        <MDBValidationItem feedback="Please provide a phone number" invalid>
          <MDBInput
            value={phone || ''}
            name="phone"
            type="number"
            onChange={handleInput}
            required
            label="Phone Number"
          />
        </MDBValidationItem>
        <br />
        <MDBValidationItem feedback="Please provide a your address" invalid>
          <MDBInput
            value={address || ''}
            name="address"
            type="text"
            onChange={handleInput}
            required
            label="Address"
          />
        </MDBValidationItem>
        <br />
        <select
          name="status"
          value={status}
          style={{
            width: '100%',
            borderRadius: '4px',
            height: '35px',
            borderColor: '#83ccc5',
          }}
          onChange={handleSelect}
        >
          <option>Please Select Status</option>
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <br />
        <br />
        <div className="col-12">
          <MDBBtn style={{ marginRight: '10px' }} type="submit">
            {editMode ? 'Update' : 'Add'}
          </MDBBtn>
          <MDBBtn onClick={() => navigate('/')} color="danger">
            Go back
          </MDBBtn>
        </div>
      </div>
    </MDBValidation>
  );
};
