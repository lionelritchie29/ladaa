import React, { createContext, useContext, useEffect, useState } from 'react';
import { USER_STORAGE_KEY } from '../constant';
import { UsersService } from '../services/api/users-service';
import { LocalStorageService } from '../services/storage/LocalStorageService';
import { ModalContext } from './ModalContext';

export const AuthContext = createContext<any>(null);

type props = {
  children: any;
  storageService: LocalStorageService;
  usersService: UsersService;
};

export type ClientSpoonacularUser = {
  username: string;
  hash: string;
};

export type ClientUser = {
  id: string;
  username: string;
  email: string;
  spoonacularUser: ClientSpoonacularUser;
};

const AuthProvider = ({ children, storageService, usersService }: props) => {
  const [loggedUser, setLoggedUser] = useState<ClientUser | null>(null);

  const checkLoggedUser = async () => {
    const userId = storageService.get(USER_STORAGE_KEY);
    if (userId) {
      const user = await usersService.get(userId);
      if (user) {
        setLoggedUser({
          id: user.id,
          email: user.email,
          username: user.username,
          spoonacularUser: {
            username: user.spoonacularUser.username,
            hash: user.spoonacularUser.hash,
          },
        });
        console.log(loggedUser);
      }
    }
  };

  const logout = async () => {
    storageService.delete(USER_STORAGE_KEY);
    setLoggedUser(null);
  };

  useEffect(() => {
    checkLoggedUser();
  }, []);

  return (
    <AuthContext.Provider value={[loggedUser, setLoggedUser, logout]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
