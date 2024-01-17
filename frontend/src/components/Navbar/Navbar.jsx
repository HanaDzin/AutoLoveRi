import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import {BiSolidMoon, BiSolidSun} from 'react-icons/bi'
import {HiMenuAlt1, HiMenuAlt3} from 'react-icons/hi'

//mobile responsive menu
import ResponsiveMenu from './ResponsiveMenu.jsx'

export const NavLinks = [
    {
        _id: "1",
        name: "Početna",
        link: "/"
    },
    {
        _id: "2",
        name: "Vozila",
        link: "/cars"
    },
    {
        _id: "3",
        name: "O nama",
        link: "/about"
    },
    {
        _id: "4",
        name: "Novosti",
        link: "/news"
    }
]



const Navbar = ({theme, setTheme}) => {

//responsive menu za manje ekrane
const [showMenu, setShowMenu] = useState(false);

const toggleMenu = () => {
    setShowMenu(!showMenu);
}


  return (
    
    <nav className='shadow-md bg-white dark:bg-dark dark:text-white duration-300
        fixed top-0 flex w-full z-30'>
        <div className='container'>
            <div className="flex justify-between items-center">
                <div>
                    <Link to='/'><h1 className='text-xl font-bold py-2'>AutoLoveRi</h1></Link>
                </div>

            <div className='hidden md:block'>
                <ul className='flex items-center gap-8'>
                { 
                    NavLinks.map((data) => (
                    
                        <Link to={data.link}>
                        <div key={data._id} className='py-4'>
                            <a className='py-2 
                            hover:border-b-2 
                            hover:text-primary
                            hover:border-primary
                            transition-colors duration-300
                            text-md font-medium' 
                            >{data.name}</a>
                        </div>
                        </Link>
                    ))}
                    <div>
                {
                        theme == "dark" ? 
                        (<BiSolidSun onClick={() => setTheme("light")}
                        className='text-2xl'/>) : 
                        (<BiSolidMoon onClick={() => setTheme("dark")} 
                        className='text-2xl'/> )
                } 
                </div>
                </ul>
            </div>
                <div className='flex items-center gap-4 md:hidden'>
                <div>
                {
                        theme == "dark" ? 
                        (<BiSolidSun onClick={() => setTheme("light")}
                        className='text-2xl'/>) : 
                        (<BiSolidMoon onClick={() => setTheme("dark")} 
                        className='text-2xl'/> )
                } 
                </div>

                {
                    showMenu ?
                    (<HiMenuAlt1 
                    onClick={toggleMenu} 
                    size={30}
                    className="cursor-pointer transition-all"
                    />) :
                    (<HiMenuAlt3 
                    onClick={toggleMenu} 
                    size={30}
                    className="cursor-pointer transition-all"
                    />)
                }


            </div>
        </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </nav>
  )
}

export default Navbar