"use server"
import { type AuthContextType, AuthProvider } from '@/components/context/AuthContext'
import MainLayout from '@/components/shared/MainLayout'
import { withAuth, signOut, getSignInUrl, getSignUpUrl } from '@workos-inc/authkit-nextjs';

export default async function DashboardLayout({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
 
  const session = await withAuth({ ensureSignedIn: true});
  const signInUrl = await getSignInUrl();
  const signUpUrl = await getSignUpUrl();

  const variables: AuthContextType = {
    session,
    signOut,
    signInUrl,
    signUpUrl
  };
  return (
    <>
      <AuthProvider variables={variables}>
        <MainLayout>
          {children}
        </MainLayout>
      </AuthProvider>
    </>
  )
}
