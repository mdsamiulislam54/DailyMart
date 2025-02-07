import Logo from './Logo'
import MenuItem from './MenuItem'
import { useDarkMode } from '../ContextApi/DarkModeApi'

import DarkModeButton from '../DarkModeButton/DarkModeButton';

const Navbar = () => {
    const { darkMode} = useDarkMode();



    return (
        <div className={` py-3`}>
            <div className="w-Container mx-auto">
                <div className="flex items-center justify-between">
                    <Logo />
                    <DarkModeButton/>
                    <MenuItem />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
