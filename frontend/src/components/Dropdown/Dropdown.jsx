import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { FaUser } from 'react-icons/fa';
import { useLogoutMutation } from '../../slices/usersApiSlice.js'
import { logout } from '../../slices/authSlice.js'

const Dropdown = ({ userInfo }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dispatch = useDispatch();
const navigate = useNavigate();

  const [ logoutApiCall ] = useLogoutMutation();

const logoutHandler = async () => {
    try {
        await logoutApiCall().unwrap();
        dispatch(logout());
        navigate('/login');
    } catch (err) {
        console.log(err);

    }
}

  return (
    <div className='flex items-center relative'>
      <div
        className='flex items-center cursor-pointer'
        onClick={toggleDropdown}
      >
        <FaUser className='mr-2' />
        <span>{userInfo.name}</span>
      </div>

      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 top-12  w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
          >
            {/* Add dropdown options here */}
            <Link
              to='/profile'
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Moj Profil
            </Link>
            <Link
              to='/logout' onClick={logoutHandler}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Odjava
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
