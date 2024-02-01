import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

const isLoggedin=false
// This function can be marked `async` if using `await` inside
export const  middleware = ( request: NextRequest) =>{

//IF condition  should contain in such away that it can stop infinite loop as every time page render this middleware will render 
    if (!isLoggedin && request.url!== "http://localhost:3000/about") {
        
        
        return NextResponse.redirect(new URL('/about',request.url));
      }
return NextResponse.next();
}
 
// See "Matching Paths" below to learn more

export const config = {
// matcher is use to avoid multipal condition in middlewar 
    matcher: ['/about/:path*', '/dashboard/:path*'],
  }