import classNames from 'classnames';
import { useState } from 'react';
import { forwardRef } from 'react';

import images from '~/assets/images';
import styles from './Image.module.scss';

const Images = forwardRef(({ src, alt, classes, fallback: customFallback = images.noImage, ...props }, ref) => {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(customFallback);
  };

  return (
    <img
      className={classNames(styles.Wrapper, classes)}
      ref={ref}
      src={fallback || src}
      {...props}
      alt={alt}
      onError={handleError}
    />
  );
});

export default Images;
