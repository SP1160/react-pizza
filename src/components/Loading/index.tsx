import React from 'react';
import { Oval } from 'react-loader-spinner';

import styles from './Loading.module.scss';

export const Loading: React.FC = () => {
    return (
        <Oval
            height={125}
            width={125}
            color="#f2723f"
            wrapperStyle={{}}
            wrapperClass={styles.root}
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#f2723f"
            strokeWidth={6}
            strokeWidthSecondary={6}
        />
    );
};
