import {
  getKindeServerSession,
  LogoutLink,
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

const HomePage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <>
      {user ? (
        <>
          <p>Welcome {user.email}</p>
          <LogoutLink>
            <button>Logout</button>
          </LogoutLink>
        </>
      ) : (
        <>
          <RegisterLink>
            <button>Register</button>
          </RegisterLink>
          <LoginLink>
            <button>Login</button>
          </LoginLink>
        </>
      )}
    </>
  );
};

export default HomePage;
