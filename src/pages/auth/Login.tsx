import React, { useContext, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Redirect, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { USER_STORAGE_KEY } from '../../constant';
import { AuthContext, ClientUser } from '../../contexts/AuthContext';
import { ToastContext } from '../../contexts/ToastContext';
import { User } from '../../models/user';
import { UsersService } from '../../services/api/users-service';
import { LocalStorageService } from '../../services/storage/LocalStorageService';

type FormData = {
  email: string;
  password: string;
};

type props = {
  usersService: UsersService;
  storageService: LocalStorageService;
};

const Login = ({ usersService, storageService }: props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [loggedUser, setLoggedUser, logout]: [ClientUser | null, React.Dispatch<React.SetStateAction<ClientUser | null>>, Function] = useContext(AuthContext);
  const makeToast = useContext(ToastContext);

  if (loggedUser) {
    return <Redirect to="/" />;
  }

  const onLogin: SubmitHandler<FormData> = async ({ email, password }) => {
    makeToast!('Signing in...', "default");
    btnRef.current!.disabled = true;
    const user: User | boolean = await usersService.validate(email, password);
    if (user) {
      makeToast!(`Welcome back, ${(user as User).username}`, "success");
      storageService.save(USER_STORAGE_KEY, (user as User).id);
      setLoggedUser({
        id: (user as User).id,
        username: (user as User).username,
        email: (user as User).email,
      });
    } else {
      makeToast!('User does not exist or wrong combination of username or password', 'error');
    }
    btnRef.current!.disabled = false;
    if (user) return <Redirect to="/" />;
  };

  return (
    <div className="w-11/12 md:w-3/4 mx-auto my-16 rounded-lg overflow-hidden">
      <div className="bg-green-700 text-white flex shadow-xl" style={{ minHeight: '75vh' }}>
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-white">Sign in to your Account</h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={handleSubmit(onLogin)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white">Email address</label>
                    <div className="mt-1">
                      <input
                        {...register('email', { required: true })}
                        id="email"
                        type="email"
                        className="text-gray-900 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    {errors.email && <small className="text-red-500">Email is required</small>}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-white">Password</label>
                    <div className="mt-1">
                      <input
                        {...register('password', { required: true })}
                        id="password"
                        type="password"
                        className="text-gray-900 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    {errors.password && <small className="text-red-500">Password is required</small>}
                  </div>

                  <div>
                    <button
                      id="sign-in-btn"
                      ref={btnRef}
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-green-800 hover:bg-green-600 shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
                <div>
                  <Link to="/auth/register" className="text-xs text-yellow-300 hover:text-yellow-200">
                    Do not have an account ? Register here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <div>
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80"
              alt=""
            />
          </div>
          <div
            className="absolute top-0 left-0 h-full w-full"
            style={{ backgroundColor: 'rgba(6, 95, 70, 0.5)' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
