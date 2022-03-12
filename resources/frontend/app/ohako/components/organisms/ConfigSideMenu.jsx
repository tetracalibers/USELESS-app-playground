import React from 'react'
import {
  pushRotate as MenuDefault,
  push as MenuForSafari,
  slide as MenuForMobile,
} from 'react-burger-menu'
import FilterConfigForm from '../molecules/FilterConfigForm'
import SortConfigForm from '../molecules/SortConfigForm'
import { GiLightSabers } from 'react-icons/gi'
import { GrSettingsOption } from 'react-icons/gr'
import { css } from '@emotion/css'
import { isSafari, isMobile } from 'react-device-detect'

const menuStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '50px',
    height: '50px',
    left: '25px',
    top: '25px',
    filter: 'opacity(0.5) blur(.5px) invert(1) drop-shadow(0px 0px 6px ivory)',
    transform: 'translateZ(0)',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    width: '24px',
    height: '24px',
    right: '24px',
    color: 'cornflowerblue',
  },
  bmCross: {
    background: 'none',
  },
  bmMenuWrap: {
    position: 'fixed',
    maxHeight: '100vh',
  },
  bmMenu: {
    backgroundImage: 'url("../images/ohako/shell.jpg")',
    backgroundPosition: 'center',
    padding: '0',
    fontSize: '1.15em',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    height: 'fit-content',
    minHeight: '100vh',
    backdropFilter: 'contrast(0.5) blur(1px)',
    background: 'rgba(255,255,255,.5)',
    padding: '0.8em',
    fontFamily: 'Satisfy,cursive',
    color: '#7c98b3',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    backgroundImage:
      'linear-gradient(315deg,rgba(4,93,233,.5) 0%,rgba(9,198,249,.5) 74%)',
  },
}

const ConfigSideMenu = () => {
  const css_memu = css`
    nav {
      background-color: transparent;
      box-shadow: none;
    }
    #react-burger-cross-btn svg {
      filter: drop-shadow(1px 1px 4px white);
    }
  `

  const menuOptions = {
    outerContainerId: 'outerContainer-forReactBurgerMenu',
    pageWrapId: 'pageWrap-forReactBurgerMenu',
    customBurgerIcon: <GrSettingsOption />,
    customCrossIcon: <GiLightSabers />,
    disableAutoFocus: true,
    styles: menuStyles,
    className: css_memu,
  }

  const menuChildren = (
    <>
      <FilterConfigForm />
      <SortConfigForm />
    </>
  )

  if (isMobile) {
    return <MenuForMobile {...menuOptions}>{menuChildren}</MenuForMobile>
  }

  if (isSafari) {
    return <MenuForSafari {...menuOptions}>{menuChildren}</MenuForSafari>
  }

  return <MenuDefault {...menuOptions}>{menuChildren}</MenuDefault>
}

export default ConfigSideMenu
