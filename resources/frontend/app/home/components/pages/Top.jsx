import React from 'react'
import { NavLink } from 'react-router-dom'
import { myPath } from '../../../routes/path'
import { css } from '@emotion/css'
import { useWindowSize } from '@react-hook/window-size'
import { Parallax, Background } from 'react-parallax'
import { Card, CardTitle, Collection, CollectionItem } from 'react-materialize'
import Head from '../../../common/components/Head'
import classNames from 'classnames'
const path = myPath

export default function Top() {
  const [width, height] = useWindowSize()

  const image_hero = '../images/home/tree.PNG'
  const tetcaliLogo = '../images/home/TetraCalibersCMS.png'
  const tpusgLogo = '../images/home/ReTryPlayingUSG.jpg'
  const css_wrap = css`
    font-family: 'TsukushiBMaruGothic';
    width: 100vw;
    position: relative;
    padding-top: 10vh;
    img {
      width: 3rem;
      height: 3rem;
    }
  `
  const css_hero = css`
    width: 100vw;
    height: 80vh;
    margin-bottom: 10vh;
    position: relative;
    .react-parallax-content {
      height: 80vh;
    }
  `
  const css_card = css`
    width: ${width < height ? '80vw' : '40vw'};
    filter: opacity(0.8);
  `
  const css_card_group = css`
    display: grid;
    align-items: center;
    justify-content: center;
    .card .card-image .card-title {
      position: sticky;
    }
  `
  const css_card_thumbnail = css`
    height: 40vh;
    overflow-y: scroll;
    .card-title {
      color: black;
      background: #20202050;
      filter: drop-shadow(2px 4px 6px white);
    }
    img {
      height: auto;
    }
  `
  const css_title = css`
    font-family: 'Poiret One', cursive;
    color: #2f4353;
    width: 100vw;
    font-size: 4vw;
    text-align: center;
    filter: opacity(0.7) blur(0.5px);
  `
  const css_title_wrap = css`
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff80;
  `
  const css_card_ul = css`
    border: none;
  `
  const css_link_text = css`
    padding-bottom: 1rem;
    display: block;
    font-size: 1.25rem;
    color: #2f435380;
  `
  const css_tool_icons = css`
    text-align: right;
    display: block;
  `

  return (
    <>
      <Head title="tomixy's playground with Node.js" />
      <div className={css_wrap}>
        <Parallax bgImage={image_hero} strength={-100} className={css_hero}>
          <div className={css_title_wrap}>
            <div className={css_title}>tomixy's playground with Node.js</div>
          </div>
        </Parallax>
        <div className={css_card_group}>
          <Card
            className={css_card}
            header={
              <CardTitle image={tpusgLogo} className={css_card_thumbnail}>
                TryPlayingUSG
              </CardTitle>
            }
          >
            <Collection className={css_card_ul}>
              <CollectionItem>
                <a href="https://try-playing-usg.kuron.jp">
                  <span className={css_link_text}>運用中の本番サイト</span>
                  <span className={css_tool_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                  </span>
                </a>
              </CollectionItem>
              <CollectionItem>
                <NavLink to={`${path.tpusg.Top}`}>
                  <span className={css_link_text}>リメイク版デモサイト</span>
                  <span className={css_tool_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
                  </span>
                </NavLink>
              </CollectionItem>
              <CollectionItem>
                <NavLink to={`${path.tpusg.admin.Dashboard}`}>
                  <span className={css_link_text}>管理画面デモ</span>
                  <span className={css_tool_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg" />
                  </span>
                </NavLink>
              </CollectionItem>
            </Collection>
          </Card>
          <Card
            className={css_card}
            header={
              <CardTitle image={tetcaliLogo} className={css_card_thumbnail}>
                TetraCalibersCMS
              </CardTitle>
            }
          >
            <Collection className={css_card_ul}>
              <CollectionItem>
                <a href="https://tetracalibers.net">
                  <span className={css_link_text}>運用中の本番サイト</span>
                  <span className={css_tool_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original-wordmark.svg" />
                  </span>
                </a>
              </CollectionItem>
              <CollectionItem>
                <NavLink to={`${path.tetcali.Top}`}>
                  <span className={css_link_text}>移植版デモサイト</span>
                  <span className={css_tool_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg" />
                  </span>
                </NavLink>
              </CollectionItem>
              <CollectionItem>
                <NavLink to={`${path.tetcali.admin.Dashboard}`}>
                  <span className={css_link_text}>管理画面デモ</span>
                  <span className={css_tool_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg" />
                  </span>
                </NavLink>
              </CollectionItem>
            </Collection>
          </Card>
          <Card className={css_card}>
            <NavLink to={`${path.karaoke.Demo}`}>
              <span className={css_link_text}>カラオケ記録帳</span>
              <span className={css_tool_icons}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg" />
              </span>
            </NavLink>
          </Card>
          <Card className={css_card}>
            <NavLink to={`${path.this.Auth}`}>
              <span className={css_link_text}>ユーザー登録とログイン</span>
            </NavLink>
          </Card>
          <Card className={css_card}>
            <a href="">
              <span className={css_link_text}>本サイトのソースコード</span>
              <span className={css_tool_icons}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
              </span>
            </a>
          </Card>
        </div>
      </div>
    </>
  )
}
