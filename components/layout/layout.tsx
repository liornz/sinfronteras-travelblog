import { Fragment } from 'react';
import MainHeader from './main-header';
import styles from './layout.module.scss';
import Footer from '../footer/footer';

interface Props {

}

const Layout: React.FC<Props> = (props) => {
const {  } = props;
  return (
    <Fragment>
      <MainHeader />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;