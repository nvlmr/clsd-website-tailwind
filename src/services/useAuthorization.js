import { useContext } from 'react';
import { UserContext } from './useAuthorization';

const useAuthorization = (requiredPermissions) => {
  const { user } = useContext(UserContext);

  // Check if user has necessary permissions
  return user?.permissions?.some((permission) =>
    requiredPermissions.includes(permission)
  );
};

export default useAuthorization;
