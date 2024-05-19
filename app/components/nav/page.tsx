import Link from "next/link"

const Nav = () => {
  return (
    <div className="p-4 w-full bg-blue-300">
        <div className="flex justify-between">
            <div>
                Rate My dom
            </div>
            <div className="flex w-2/4 justify-between ">
           
                    <Link href=''>Home</Link>
                    <Link href={{}}>About</Link>
                    <Link href={{}}>Contact</Link>
                    <Link href='../login'>Login</Link>
                    <Link href={{}}>Register</Link>
            tyuiop
            </div>
        </div>
    </div>
  )
}

export default Nav