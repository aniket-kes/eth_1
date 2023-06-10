import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../images/logo.png'
import {useState} from 'react';

const NavbarItem = ({title}) => {
  return(
    <li className={'mx-4 cursor-pointer my-4 text-lg '}>{title}</li>
  );
}

function Navbar() {
  const [ToggleMenu, SetToggleMenu] = useState(false);
  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <img src={logo} alt="logo" className='cursor-pointer w-32'/>
      </div>
      <ul className='text-white md:flex list-none hidden flex-row justify-center items-center flex-initial'>
        {["Market", "Exchange", "Tutorial", "Wallet"].map((item,index)=>(
          <NavbarItem key={item + index} title={item}/>
        ))}
        <li className='bg-[#2952E3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2952BD]'>Login</li>
      </ul>
      <div className='flex relative '>
        { ToggleMenu
          ? <AiOutlineClose fontSize={28} className='text-white cursor-pointer md:hidden' onClick={()=>SetToggleMenu(false)}/>
          : <HiMenuAlt4 fontSize={28} className='text-white cursor-pointer md:hidden' onClick={()=>SetToggleMenu(true)}/>
        }
        {ToggleMenu && (
          <ul className='top-0 right-0 flex flex-col fixed w-[70vw] h-screen z-10 shadow-2xl md:hidden text-white list-none
           justify-start items-end p-3 rounded-md blue-glassmorphism animate-slide-in'>
            <li className='text-xl w-full my-2'>
              <AiOutlineClose onClick={()=> SetToggleMenu(false)}/>
            </li>
            {["Market", "Exchange", "Tutorial", "Wallet"].map((item,index)=>(
              <NavbarItem key={item + index} title={item}/>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}
export default Navbar

