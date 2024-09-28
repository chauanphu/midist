import React, { useEffect, useState } from 'react';
import lablogoDark from '../../Assets/lab_logo_dark.png';
import lablogoLight from '../../Assets/lab_logo_light.png';
import DesktopMenu from './DesktopMenu/DesktopMenu';
import MobileMenu from './MobileMenu/MobileMenu';
import MenuButton from './MenuButton/MenuButton';

const Navbar = ({ footerRef }) => {
    const [scroll, setScroll] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [dropDown, setDropDown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    
    const handleOpenMenu = () => setOpenMenu(!openMenu);
    
    const handleDropDown = () => setDropDown(!dropDown);
    
    const scrollToFooter = () => {
        if (footerRef) {
            console.log(footerRef)
            footerRef.current.scrollIntoView({ behavior: 'smooth'});
        } else {
            console.error('fail')
        }
    } 

    return (
        <nav
            className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 
                ${scroll ? 'bg-white shadow-lg' : 'bg-gray-900'}`}
        >
            <div className='max-w-6xl mx-auto px-4'>
                <div className='flex justify-between items-center py-4'>
                    <div className='flex items-center'>
                        <img src={scroll ? lablogoDark : lablogoLight} alt="lab logo" className='w-10 h-auto' />
                        <span className={`ml-2 text-2xl font-bold ${scroll ? 'text-gray-800' : 'text-white'}`}>
                            MIDIS Lab
                        </span>
                    </div>

                    <DesktopMenu  className='' scroll={scroll} dropDown={dropDown} handleDropDown={handleDropDown} scrollToFooter={scrollToFooter}/>

                    <MenuButton scroll={scroll} openMenu={openMenu} handleOpenMenu={handleOpenMenu} />
                </div>
            </div>
            <MobileMenu scroll={scroll} dropDown={dropDown} handleDropDown={handleDropDown} openMenu={openMenu} handleOpenMenu={handleOpenMenu} scrollToFooter={scrollToFooter}/>
        </nav>
    )
}


export default Navbar;