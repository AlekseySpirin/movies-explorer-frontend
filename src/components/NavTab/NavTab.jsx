import React from 'react';
import cl from './NavTab.module.css';

function NavTab() {
  return (
    <div>
      <nav className={cl.navTab}>
        <ul className={cl.navTabList}>
          <li className={cl.navTabItem}>
            <a className={cl.navTabLink} href='#about-project'>
              О проекте
            </a>
          </li>
          <li className={cl.navTabItem}>
            <a className={cl.navTabLink} href='#techs'>
              Технологии
            </a>
          </li>
          <li className={cl.navTabItem}>
            <a className={cl.navTabLink} href='#about-me'>
              Студент
            </a>
          </li>
        </ul>
        {/* <button type={'button'}>О проекте</button> */}
        {/* <button type={'button'}>Технологии</button> */}
        {/* <button type={'button'}>Студент</button> */}
      </nav>
    </div>
  );
}

export default NavTab;
