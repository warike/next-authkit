"use server"
import Footer from "@/components/shared/Footer"
import Header from "./_components/Header"
import Hero from "./_components/Hero"
import { signOut, withAuth, getSignInUrl, getSignUpUrl } from "@workos-inc/authkit-nextjs"
import { AuthProvider, type AuthContextType } from "@/components/context/AuthContext"

export default async function HomePage() {

  const session = await withAuth();
  const signInUrl = await getSignInUrl();
  const signUpUrl = await getSignUpUrl();

  const variables: AuthContextType = {
    session,
    signOut,
    signInUrl,
    signUpUrl
  };

  return (
    <AuthProvider variables={variables}>
      <div className="bg-white">
        <Header />
        <main>
          <Hero />
        </main>
        <Footer />
      </div>
    </AuthProvider>
    
  )
}
