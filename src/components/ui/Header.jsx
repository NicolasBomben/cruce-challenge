//icons
import { AlignJustify } from "lucide-react";
import { UserRound } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import logo from "../../assets/cruce.png";
//styles
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={`container ${styles.container}`}>
      <nav className={styles.navBar}>
        <div className={styles.topBar}>
          <div className={styles.itemsLeft}>
            <AlignJustify className={styles.icon} />
            <p className={styles.textCategory}>Categorías</p>
            <p className={styles.textNav}>LOL</p>
            <p className={styles.textNav}>CryBabies</p>
            <p className={styles.textNav}>Funko</p>
            <p className={styles.textHot}>Hot sale!</p>
          </div>

          <div className={styles.itemsRight}>
            <Search className={styles.icon} />
            <UserRound className={styles.icon} />
            <div className={styles.cartContainer}>
              <ShoppingCart className={styles.icon} />
              <span className={styles.cartCount}>3</span>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div className={styles.mobileContainer}>
          <AlignJustify alt="Menú" className={styles.menuMobile} />
          <img src={logo} alt="Logo" className={styles.logo} />
          <div className={styles.cartMobile}>
            <ShoppingCart alt="Carrito" className={styles.icon} />
            <span className={styles.cartCount}>3</span>
          </div>
        </div>
      </nav>
    </header>
  );
};
