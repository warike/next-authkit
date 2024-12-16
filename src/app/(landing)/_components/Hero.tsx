import { Button } from "@/components/ui/button";
import Link from "next/link";
import { env } from '@/env'

  
  export default function Hero() {
    const contact_url: string = env.NEXT_PUBLIC_CONTACT_URL
    return (
      <div className="relative isolate pt-14">
        <div className="py-8 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Unlock the Power of GenAI for Your Business
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                We offer a comprehensive AI stack to tackle high costs and integration hurdles. Empower your business with cutting-edge AI technologies.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button type="button" size={'lg'} className="text-md slate-900">
                <Link 
                  title="Dashboard link"
                  href={ { pathname: 'dashboard/'}}
                >
                  Get started
                </Link>
              </Button>
                <Button type="button" variant={"ghost"}  size={'lg'} className="text-md">
                  <Link 
                    title='Link to call schedule'
                    href={contact_url}>
                  Contact us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }