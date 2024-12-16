import { authkitMiddleware } from '@workos-inc/authkit-nextjs';
import { 
  type NextRequest, 
  type NextFetchEvent, 
  type NextMiddleware,
  NextResponse, 
} from 'next/server';
import { isDev } from '@/lib/config';


async function authMiddleware(request: NextRequest, context: NextFetchEvent) {
  const middleware: NextMiddleware = await authkitMiddleware({
    debug: true,
    middlewareAuth: {
      enabled:  isDev() ,
      unauthenticatedPaths: [
        "/",
      ],
    },
  })
  const response = await middleware(request, context) as NextResponse
  /** getSession returns { user: null } if it's given the response as parameter */
//   const session = await getSession();
  return response;
}

export default async function middleware(request: NextRequest, context: NextFetchEvent) {
  try {
    return authMiddleware(request, context);
  } catch (error) {
    console.error('Error in middleware:', error);
    return NextResponse.json('Internal Server Error', { status: 500 });
  }
}

export const config = {
    matcher: [
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      '/(api|trpc)(.*)',
    ],
  }