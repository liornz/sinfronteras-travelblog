import { Fragment } from 'react';
import MainHeader from './main-header';

interface Props {

}

const Layout: React.FC<Props> = (props) => {
const {  } = props;
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;