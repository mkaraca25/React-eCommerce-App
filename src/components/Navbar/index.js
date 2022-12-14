import React from 'react'
import {Link} from "react-router-dom";
import styles from "./styles.module.css"
import { Button } from '@chakra-ui/react'
import { Icon } from '@iconify/react';
function Navbar() {
  return (
        <nav className={styles.nav}>
          <div className={styles.left}>
            <div className={styles.logo}>
                <Link to="/">eCommerce</Link>
            </div>
            <ul className={styles.menu}>
                <li>
                  <Icon icon="material-symbols:production-quantity-limits-rounded" width="24" height="24" />
                </li>
                <li>
                  <Link to="/">Product</Link>
                </li>
            </ul>
          </div>
          <div className={styles.right}>
            <Link to="/signin">
                <Button colorScheme='blue'>Login</Button>
            </Link>
            <Link to="/signup">
                <Button colorScheme='purple'>Register</Button>
            </Link>
          </div>
        </nav>
  )
}

export default Navbar