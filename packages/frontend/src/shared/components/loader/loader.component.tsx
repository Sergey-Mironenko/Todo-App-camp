import * as React from 'react';
import classNames from 'classnames';

import { loaderStyles } from './loader.styles';

const Loader: React.FunctionComponent = () => {
  return (
	<div className={classNames(
	  loaderStyles
	)}>
	  <div />
	</div>
  )
};

export default Loader;
