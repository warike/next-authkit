import { Icons } from '@/components/shared/Icons'
import { siteConfig } from '@/lib/config'
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import SignInLink from './SignInLink'
import SignOutLink from './SignOutLink'
import { useNavBar } from '@/components/context/NavBarContext'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const products = [
    { name: 'Product analytics', description: 'Awesome product analytics', href: '#', icon: Icons.chartPie },
    { name: 'Security', description: 'Awesome  product security', href: '#', icon: Icons.fingerPrint },
    { name: 'Integrations', description: 'Awesome  product integration', href: '#', icon: Icons.squaresPlus },
  ]

export default function MenuNavBar(){
    const {setMobileMenuOpen } = useNavBar();
    return(
        <>
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href={'/'} className='-m-1.5 p-1.5' title={siteConfig.siteName} >
                        <span className="sr-only">{siteConfig.siteName}</span>
                        <Icons.logo className="size-6 text-stone-700" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <Button
                        type="button"
                        variant={'ghost'}
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Icons.bars className="size-6 text-stone-700" />
                    </Button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">

                <Popover className="relative">
                    <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                    Product
                    <Icons.chevronDown aria-hidden="true" className="size-5 flex-none text-gray-400" />
                    </PopoverButton>

                    <PopoverPanel
                    transition
                    className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                    <div className="p-4">
                        {products.map((item) => (
                        <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                        >
                            <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <item.icon aria-hidden="true" className="h-6 text-gray-600 group-hover:" />
                            </div>
                            <div className="flex-auto">
                                <Link href={item.href} className="block font-semibold text-gray-900" title={item.name}>
                                    {item.name}
                                    <span className="absolute inset-0" />
                                </Link>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    </PopoverPanel>
                </Popover>
                <Link 
                    title={'Link to features'}
                    href="#" className="text-sm/6 font-semibold text-gray-900"
                >
                    Features
                </Link>
                <Link 
                    title={'Link to pricing'}
                    href="#" className="text-sm/6 font-semibold text-gray-900"
                >
                    Pricing
                </Link>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
                    <SignOutLink />
                    <SignInLink />
                </div>
            </nav>
        </>
    )
}

