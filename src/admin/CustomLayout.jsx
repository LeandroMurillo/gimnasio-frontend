import { Layout } from 'react-admin';
import CustomAppBar from './CustomAppBar';
import CustomMenu from './CustomMenu';

export default function CustomLayout(props) {
  return <Layout {...props} appBar={CustomAppBar} menu={CustomMenu} />;
}
