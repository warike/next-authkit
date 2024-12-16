import { useAuth } from "@/components/context/AuthContext"
import { Button } from "@/components/ui/button"
import Link from "next/link"




export default function SignInLink(){
  
  const { session: { user }, signInUrl } = useAuth();
  if(user)
    return (
      <Button type="button" size={'sm'} className="text-xs slate-900">
          <Link 
            title="Dashboard link"
            href={ { pathname: 'dashboard/'}}
          >
            Dashboard
          </Link>
      </Button>
    )
  return (
    <>
      <Link 
        href={signInUrl} 
        className="text-sm/6 font-semibold text-gray-900"
        title='Sign in'
      >
        Sign in <span aria-hidden="true">&rarr;</span>
      </Link>
    </>
  )
}