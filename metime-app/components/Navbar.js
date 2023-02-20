import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>MeTime</h1>
            </div>
            <Link href="/about"><a>About</a></Link>
            <Link href="/calendar"><a>My Calendar</a></Link>
            <Link href="/createaccount"><a>Create Account</a></Link>
            <Link href="/login"><a>Log In</a></Link>
        </nav>    
    )
}