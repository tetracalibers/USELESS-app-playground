import React from "react";
import { css } from "@emotion/css";
import { useWindowSize } from "@react-hook/window-size";
//import clockSVG from '../../../../../../../public/images/tpusg/tpusgClockTop.svg'

export default function Clock() {
    const [width, height] = useWindowSize();
    const clockSVG = "../images/tpusg/tpusgClockTop.svg";
    const css_svg = css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: ${width < height ? "100vw" : "auto"};
        height: ${width > height ? "100vh" : "auto"};
    `;

    return <img src={clockSVG} className={css_svg} />;
}
