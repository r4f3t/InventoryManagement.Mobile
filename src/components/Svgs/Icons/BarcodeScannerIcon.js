import React from "react"
import Svg, { Path } from "react-native-svg"

import Colors from "../../../constants/Colors"

function BarcodeScannerIcon(props) {
  return (
    <Svg width="200" height="100" viewBox="0 0 200 100" fill="none" {...props}>
      <Path
        stroke={Colors.scannerIconColor}
        strokeWidth={5}
        d="M2.5 5v32M0 2.5h32M197.5 95V63M200 97.5h-32M5 97.5h32M2.5 100V68M195 2.5h-32M197.5 0v32"
      />
    </Svg>
  )
}

export default BarcodeScannerIcon
