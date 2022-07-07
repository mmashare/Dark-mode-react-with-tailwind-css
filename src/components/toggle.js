import React from 'react';
import { ThemeContext } from './themeContext';

const Toggle = () => {
    // they look like a useState value but it's not because we create this context in (themeContext.js) file
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className='bg-white h-screen dark:bg-black'>
      {theme === 'dark' ? (
        // as per the logic when theme = dark then show this (light Theme btn) and if the theme is light then show the other condition btn.
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-gray-500 dark:bg-white mt-[270px] ml-[550px] cursor-pointer"
        >
         Light
        </button>
      ) : (
        // ye button only jab visible hoga jab (theme -> light) hoga and if you click this btn then theme change in light look at this logic -> {{setTheme(theme === 'dark' ? 'light' : 'dark')}}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-white bg-black mt-[270px] ml-[550px] cursor-pointer"
        >
          Dark
        </button>
      )}
    </div>
  );
};

export default Toggle;