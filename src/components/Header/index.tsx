import React from 'react';
import {Outlet} from 'react-router-dom';
import styles from './Header.module.scss';
import stylesTema from 'styles/Tema.module.scss';

export default function Header({ children }: { children?: React.ReactNode}) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa das massas
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}
