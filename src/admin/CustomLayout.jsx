// src/admin/CustomLayout.jsx
import { Layout } from 'react-admin';
import CustomAppBar from './CustomAppBar';

export default function CustomLayout(props) {
  return <Layout {...props} appBar={CustomAppBar} />;
}
