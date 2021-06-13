import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './LoaderSpinner.module.scss';

const LoaderSpinner = () => (
  <div className={s.container}>
    <Loader type="TailSpin" color="cornflowerblue" height={60} width={60} />
  </div>
);
export default LoaderSpinner;