import { useRouter } from "next/router";
import { useEffect } from "react";
function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      console.log(cookie.substring(name.length + 1));
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}
export default function RequireAuth(WrappedComponent) {
  return function WithAuth(props) {
    const router = useRouter();
    useEffect(() => {
      const sessionId = getCookie("session");
      if (!sessionId) {
        router.replace("/");
      }
    }, []);
    return <WrappedComponent {...props} />;
  };
}
