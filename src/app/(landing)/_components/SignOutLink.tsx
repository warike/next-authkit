import { useAuth } from "@/components/context/AuthContext"
import { Button } from "@/components/ui/button"

export default function SignOutLink(){
    const { session: { user }, signOut } = useAuth()
    if(!user)
      return null
    return (
      <>
        <Button onClick={ async () => {
          await signOut()
        } }
          type="button" 
          variant={"link"} 
          size={'sm'} 
          className="text-sm slate-900"
        >
            Sign out
        </Button>
      </>
    )
  }