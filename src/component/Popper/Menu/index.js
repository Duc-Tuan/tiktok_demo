import Tippy from "@tippyjs/react/headless";

import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper} from '~/component/Popper';
import styles from './Menu.module.scss';
import MenuItems from "./MenuItems";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => 
            <MenuItems key={index} data={item}/>
        )
    };

    return (
        <Tippy
            interactive
            placement="bottom-end"
            render={(attrs) => (
              <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                <PopperWrapper className={cx('menu-popper')}>
                    {renderItems()}
                </PopperWrapper>
              </div>
            )}
          >
            {children}
          </Tippy>
    );
}

export default Menu;