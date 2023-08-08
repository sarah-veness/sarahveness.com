import { useAuth0 } from '@auth0/auth0-react';

export default function AuthButtons() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const LogInButton = <button onClick={() => loginWithRedirect()}>Log In</button>;
  const LogOutButton = <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
    Log Out
  </button>

  return (
    isAuthenticated ? LogOutButton : LogInButton
  )
}