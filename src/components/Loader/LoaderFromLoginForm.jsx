import { ColorRing } from 'react-loader-spinner';
export const LoaderFromLoginForm = () => {
  return (
      <ColorRing
        visible={true}
        height="30"
        width="30"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#FC02CE', '#02FC0B', '#F5FC02', '#029DFC', '#ADB3B7']}
      />
  );
};
