import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleQuestion, faCircleXmark, faEarthAsia, faEllipsisVertical, faKeyboard, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import style from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountsItem from '~/component/AccountsItem';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';

const cx = classNames.bind(style);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}/>,
    title: 'English',
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
    title: 'Feedback and help',
    to: '/feedback'
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}/>,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const [searchResult, setsearchResult] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setsearchResult([]);
    }, 0);
  }, []);

  return (
    <header className={cx('wapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="tiktok" />

        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>
                  Accounts
                </h4>
                <AccountsItem/>
                <AccountsItem/>
                <AccountsItem/>
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search accounts and videos" spellCheck={false} />
            <button>
              <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('laoding')} icon={faSpinner} />
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx('action')}>
          <Button text>Update</Button>
          <Button primary>Log in</Button>

          <Menu
            items={MENU_ITEMS}
          >
            <button className={cx('more-icon')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>

      </div>
    </header>
  );
}

export default Header;
