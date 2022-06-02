import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { login, logout, selectUser } from "../app/features/user/userSlice";
import { auth } from "../firebase/client";
import { useDispatch, useSelector } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const { uid } = user;
        dispatch(login({ uid }));
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, []);

  return [user];
}