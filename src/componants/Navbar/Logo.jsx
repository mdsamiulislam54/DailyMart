import { Link } from "react-router"


const Logo = () => {
  return (
    <div className='flex items-center gap-5'>
        <Link to={'/'}>
        <h2 className="font-bold tracking-wide text-2xl"><span className="font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">D</span >aily<span className="text-xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">M</span>art</h2>
        </Link>
        
    </div>
  )
}

export default Logo