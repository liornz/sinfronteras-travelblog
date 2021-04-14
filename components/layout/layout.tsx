import { Fragment } from 'react';
import MainHeader from './main-header';
import styles from './layout.module.scss';

interface Props {

}

const Layout: React.FC<Props> = (props) => {
const {  } = props;
  return (
    <Fragment>
      <MainHeader />
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;