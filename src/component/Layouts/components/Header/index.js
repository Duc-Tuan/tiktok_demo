import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCircleXmark,
  faCloudUpload,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faMagnifyingGlass,
  faMessage,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

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
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Viet Nam',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const [searchResult, setsearchResult] = useState([]);

  const currenUser = true;
  
  useEffect(() => {
    setInterval(() => {
      setsearchResult([]);
    }, 0);
  }, []);

  const handleMenuChange = (menuItem) => {
    switch(menuItem.type) {
      case 'Language':
        break;
      default:
    }
  }


  return (
    <header className={cx('wapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="tiktok" />

        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountsItem />
                <AccountsItem />
                <AccountsItem />
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
        </HeadlessTippy>

        <div className={cx('action')}>
            { currenUser ? (
              <>
                <Tippy delay={[0, 200]} content="Update video" placement='bottom'>
                  <button className={cx('action-btn')}>
                    <FontAwesomeIcon icon={faCloudUpload} />
                  </button>
                </Tippy>
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </>
            ) : (
              <>
                <Button text>Update</Button>
                <Button primary>Log in</Button>
              </>
            )}
              <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                {currenUser ? (
                  <img className={cx('user-avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ddcb57a7bcd8bf0fc01c18338b2caf59~c5_300x300.webp?x-expires=1654880400&x-signature=h20mu1akX3Zz8p3Tfl8SCo0s1n0%3D" alt="Nguyen Van A" />
                ) : (
                <button className={cx('more-btn')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
                )}
              </Menu>
            </div>
      </div>
    </header>
  );
}

export default Header;
