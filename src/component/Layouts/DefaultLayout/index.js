import className from 'classnames/bind';
import Header from "~/component/Layouts/components/Header";
import styles from "./DefaultLayout.module.scss";
import Sidebar from "./Sidebar";

const cx = className.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;