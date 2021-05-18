import { useCallback, useState } from "react"
import { useHistory } from "react-router"
import axios from "axios"
import { User } from "../types/api/user"

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      let success = false;
      setLoading(() =>  true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if(res.data) {
            success = true;
          } else {
            alert('ユーザーが見つかりません')
          }
        })
        .catch(() => {
          alert('ログインできません')
        })
        .finally(() => {
          setLoading(() => false);
          if(success) history.push('/home');
        });
    },
    []
  )
  return  { login, loading };
}
