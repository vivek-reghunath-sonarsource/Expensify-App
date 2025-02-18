import React from 'react';
import {Animated, View} from 'react-native';
import styles from '@styles/styles';
import floatingMessageCounterContainerPropTypes from './floatingMessageCounterContainerPropTypes';

function FloatingMessageCounterContainer(props) {
    return (
        <Animated.View style={[styles.floatingMessageCounterWrapperAndroid, ...props.containerStyles]}>
            <View style={styles.floatingMessageCounterSubWrapperAndroid}>{props.children}</View>
        </Animated.View>
    );
}

FloatingMessageCounterContainer.propTypes = floatingMessageCounterContainerPropTypes;
FloatingMessageCounterContainer.displayName = 'FloatingMessageCounterContainer';

export default FloatingMessageCounterContainer;
