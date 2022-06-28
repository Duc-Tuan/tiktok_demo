import PropTypes from 'prop-types';
import classNames from 'classnames';
import { forwardRef, useState } from 'react';

import images from '~/component/Images';
import styles from './Image.module.scss';

const Images = forwardRef(({ src, alt, classes, customFallback = images.noImage, ...props }, ref) => {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(customFallback);
  };

  return (
    <img
      className={classNames(classes, styles.wrapper)}
      ref={ref}
      src={fallback || src}
      {...props}
      alt={alt}
      onError={handleError}
    />
  );
});

Images.prototypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  classes: PropTypes.string,
  customFallback: PropTypes.string,
};

export default Images;
