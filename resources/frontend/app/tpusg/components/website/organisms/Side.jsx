import React from 'react'
import { SideNav, SideNavItem, Button } from 'react-materialize'
import { css } from '@emotion/css'
import { myPath } from '../../../../routes/path'
const path = myPath.tpusg

export default function Side(props) {
  const { returnDir } = props

  const adjustPath = (pathFromRoot) => {
    return returnDir.toString() + pathFromRoot
  }

  const sideNavContainer = css`
    font-family: 'Noto Sans JP';
    background-color: #f5f5f5;
    padding-top: 3rem;
    font-size: 18px;
    .my_tpusg_website_side_link a {
      font-family: 'Megrim', 'Noto Sans JP';
      font-weight: 100;
      color: #000;
      font-size: 18px;
    }
    .my_tpusg_website_side_title {
      text-align: center;
      a {
        font-family: 'Noto Sans JP';
        font-weight: 300;
        background: hsl(210, 13%, 30%);
        color: rgba(255, 255, 255, 0);
        background-clip: text;
        text-shadow: 1px 2px 1px rgba(255, 255, 255, 0.5);
        font-size: 1.25em;
        line-height: 1.25em;(0, 0%, 100%, 0.8);
      }
    }
    .my_tpusg_website_side_subtitle {
      text-align: center;
      margin-bottom: 2rem;
      a {
        font-family: 'Noto Sans JP';
        font-weight: 300;
        font-size: 0.625em;
        letter-spacing: 0.7em;
        color: hsl(210, 13%, 30%);
        text-shadow: 0 1px 1px hsla(0, 0%, 100%, 0.8);
      }
    }
  `

  return (
    <>
      <SideNav
        options={{
          draggable: true,
          preventScrolling: true,
        }}
        trigger={<Button node="button">MENU</Button>}
        className={sideNavContainer}
      >
        <SideNavItem
          href={adjustPath(path.Top)}
          waves
          className={'my_tpusg_website_side_title'}
        >
          Try Playing USG!!
        </SideNavItem>
        <SideNavItem subheader className={'my_tpusg_website_side_subtitle'}>
          USGをプレイする
        </SideNavItem>
        <SideNavItem
          href={adjustPath(path.Motive)}
          waves
          className={'my_tpusg_website_side_link'}
        >
          MOTIVE
        </SideNavItem>
        <SideNavItem
          href={adjustPath(path.Playlist)}
          waves
          className={'my_tpusg_website_side_link'}
        >
          SEARCH FOR SONGS
        </SideNavItem>
        <SideNavItem
          href="https://unison-s-g.com/"
          waves
          className={'my_tpusg_website_side_link'}
        >
          JUMP TO USG HP!!
        </SideNavItem>
        <SideNavItem
          href={adjustPath(path.Profile)}
          waves
          className={'my_tpusg_website_side_link'}
        >
          執筆者紹介
        </SideNavItem>
        <SideNavItem
          href={adjustPath(path.Recruitment)}
          waves
          className={'my_tpusg_website_side_link'}
        >
          共同執筆者募集！
        </SideNavItem>
        <SideNavItem
          href={adjustPath(path.Contact)}
          waves
          className={'my_tpusg_website_side_link'}
        >
          お問い合わせ
        </SideNavItem>
      </SideNav>
    </>
  )
}
