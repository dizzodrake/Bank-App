import { Link } from 'react-router-dom'
const LandingNav = ()=>{
    return (
        <nav class='navbar nav'>
            <Link to=''>Home</Link>
            <Link to=''>Register</Link>
            <Link to=''>Log In</Link>
        </nav>

    )
}
export default LandingNav;