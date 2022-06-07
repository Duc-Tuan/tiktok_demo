import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import style from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(style);

function Header() {
  return (
    <header className={cx('wapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="tiktok" />

        <div className={cx('search')}>
            <input placeholder='Search accounts and videos' spellCheck={false} />
            <button>
                <FontAwesomeIcon className={cx('clear')} icon={ faCircleXmark } />
            </button>
                <FontAwesomeIcon className={cx('laoding')} icon={ faSpinner } />
            <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={ faMagnifyingGlass } />
            </button>
        </div>

        <div className={cx('action')}>

        </div>
      </div>
    </header>
  );
}

export default Header;
