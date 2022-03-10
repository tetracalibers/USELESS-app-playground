import React, { useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { myPath } from '../../../routes/path'
import { css } from '@emotion/css'
import { Parallax } from 'react-parallax'
import { Card, CardTitle, Collection, CollectionItem } from 'react-materialize'
import { Carousel } from '3d-react-carousal'
import Head from '../../../common/components/Head'
import Image from 'rc-image'
import { useWindowSize } from '@react-hook/window-size'
const path = myPath

export default function Top() {
  const [width, height] = useWindowSize()
  const image_hero = '../images/home/tree.PNG'
  const tetcaliLogo = '../images/home/TetraCalibersCMS.png'
  const tpusgLogo = '../images/home/ReTryPlayingUSG.jpg'
  const singHistoryImages = [
    {
      caption: '',
      image: '../images/home/singHistoryMaker/sing-history-add1-PC.png',
    },
    {
      caption: '',
      image: '../images/home/singHistoryMaker/sing-history-add2-PC.png',
    },
    {
      caption: '',
      image: '../images/home/singHistoryMaker/sing-history-add3-PC.png',
    },
    {
      caption: '',
      image: '../images/home/singHistoryMaker/sing-history-add4-PC.png',
    },
    {
      caption: '',
      image: '../images/home/singHistoryMaker/sing-history-add5-PC.png',
    },
    {
      caption: '',
      image: '../images/home/singHistoryMaker/sing-history-config-PC.png',
    },
    {
      caption: '',
      image: '../images/home/singHistoryMaker/sing-history-filter-PC.png',
    },
    {
      caption: '',
      image:
        '../images/home/singHistoryMaker/sing-history-filtered-table-PC.png',
    },
    {
      caption: '',
      image: '../images/home/singHistoryMaker/sing-history-sort-PC.png',
    },
    {
      caption: '',
      image: '../images/home/singHistoryMaker/sing-history-edit-PC.png',
    },
    {
      caption: '',
      image: '../images/home/singHistoryMaker/sing-history-delete-PC.png',
    },
  ]
  const singHistorySlides = useMemo(() => {
    return singHistoryImages.map(({ caption, image }, i) => (
      <Image src={image} key={i} preview={{ mask: 'Click to Preview' }} />
    ))
  }, [])

  const css_wrap = css`
    font-family: 'TsukushiBMaruGothic';
    width: 100vw;
    position: relative;
    padding-top: 10vh;
    img {
      width: 3rem;
      height: 3rem;
    }
    .slider .slides li img {
      height: 100%;
      width: 100%;
      background-size: contain;
      background-position: top;
      background-repeat: no-repeat;
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
    width: 80vw;
    filter: opacity(0.8);
    transform: translateZ(0);
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
    height: ${80 * 0.5 + 'vw'};
    overflow-y: scroll;
    .card-title {
      color: black;
      background: #20202050;
      filter: drop-shadow(2px 4px 6px white);
      transform: translateZ(0);
    }
    img {
      height: auto;
    }
  `
  const css_title = css`
    font-family: 'Poiret One', cursive;
    color: #2f4353;
    width: 100vw;
    font-size: ${width < height ? '7vw' : '4vw'};
    text-align: center;
    filter: opacity(0.7) blur(0.5px);
    transform: translateZ(0);
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
  const css_carousel_wrap = css`
    .react-3d-carousel {
      height: 30vw !important;
      .slider-container {
        position: absolute;
        left: 50%;
        top: 0%;
        height: 100%;
        width: 100%;
        margin: 0px auto 0px -50%;
        .slider-right,
        .slider-left {
          z-index: 0;
          div {
            margin-top: 0;
          }
        }
        .slider-content {
          position: relative;
          left: 50%;
          top: 50%;
          width: 70%;
          height: 100%;
          transform: translate(-50%, -50%);
          .slider-single .slider-single-content {
            width: 100%;
            height: auto;
            img {
              width: auto;
              height: auto;
            }
          }
        }
      }
    }
  `

  return (
    <>
      <Head title="tomixy's playground with Node.js" />
      <div className={css_wrap}>
        <Parallax bgImage={image_hero} strength={-100} className={css_hero}>
          <div className={css_title_wrap}>
            <div className={css_title}>tomixy's Demo Playground</div>
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
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain-wordmark.svg" />
                  </span>
                </a>
              </CollectionItem>
              <CollectionItem>
                <NavLink to={`${path.tpusg.Top}`}>
                  <span className={css_link_text}>リメイク版デモサイト</span>
                  <span className={css_tool_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
                  </span>
                </NavLink>
              </CollectionItem>
              <CollectionItem>
                <NavLink to={`${path.tpusg.admin.Dashboard}`}>
                  <span className={css_link_text}>管理画面デモ（準備中）</span>
                  <span className={css_tool_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
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
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original-wordmark.svg" />
                  </span>
                </a>
              </CollectionItem>
              <CollectionItem>
                <NavLink to={`${path.tetcali.Top}`}>
                  <span className={css_link_text}>
                    移植版デモサイト（準備中）
                  </span>
                  <span className={css_tool_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                  </span>
                </NavLink>
              </CollectionItem>
              <CollectionItem>
                <NavLink to={`${path.tetcali.admin.Dashboard}`}>
                  <span className={css_link_text}>管理画面デモ（準備中）</span>
                  <span className={css_tool_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                  </span>
                </NavLink>
              </CollectionItem>
            </Collection>
          </Card>
          <Card
            className={css_card}
            header={
              <CardTitle
                image={
                  '../images/home/singHistoryMaker/sing-history-top-PC.png'
                }
                className={css_card_thumbnail}
              >
                Sing-History Maker
              </CardTitle>
            }
          >
            <Collection className={css_card_ul}>
              <CollectionItem className={css_carousel_wrap}>
                <Carousel
                  slides={singHistorySlides}
                  autoplay={false}
                  interval={1000}
                />
              </CollectionItem>
              <CollectionItem>
                <NavLink to={`${path.this.Auth}`}>
                  <span className={css_link_text}>Webアプリ</span>
                  <span className={css_tool_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" />
                  </span>
                </NavLink>
              </CollectionItem>
              <CollectionItem>
                <NavLink to={`${path.karaoke.Demo}`}>
                  <span className={css_link_text}>
                    登録不要のお試しデモ（準備中）
                  </span>
                  <span className={css_tool_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                  </span>
                </NavLink>
              </CollectionItem>
            </Collection>
          </Card>
          <Card
            className={css_card}
            header={
              <CardTitle
                image={'../images/home/playground-login.png'}
                className={css_card_thumbnail}
              >
                Login
              </CardTitle>
            }
          >
            <Collection className={css_card_ul}>
              <CollectionItem>
                <NavLink to={`${path.this.Auth}`}>
                  <span className={css_link_text}>ユーザー登録とログイン</span>
                  <span className={css_tool_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
                  </span>
                </NavLink>
              </CollectionItem>
            </Collection>
          </Card>
          <Card
            className={css_card}
            header={
              <CardTitle
                image={'../images/home/sing-history-music-suggest-form-src.png'}
                className={css_card_thumbnail}
              >
                Repository
              </CardTitle>
            }
          >
            <Collection className={css_card_ul}>
              <CollectionItem>
                <a href="https://github.com/tetracalibers/USELESS-app-playground">
                  <span className={css_link_text}>本サイトのソースコード</span>
                  <span className={css_tool_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
                  </span>
                </a>
              </CollectionItem>
            </Collection>
          </Card>
        </div>
      </div>
    </>
  )
}
