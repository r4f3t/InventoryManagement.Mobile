import React from 'react'
import { Text as RNText } from 'react-native'

import { SIZE, WEIGHT } from './Text.const'
import Colors from '../../constants/Colors'

function Text({ value, size = 'medium', weight = 'normal', color = Colors.textColor, style, children, ...rest }) {
    return (
        <RNText style={[style, { fontSize: SIZE[size], fontWeight: WEIGHT[weight], color }]} {...rest}>{value || children}</RNText>
    )
}

export default Text;
