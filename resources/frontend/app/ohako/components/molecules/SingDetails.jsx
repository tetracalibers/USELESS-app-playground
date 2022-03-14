import React, { useEffect } from 'react'
import { css } from '@emotion/css'
import { Card, CardTitle, Icon } from 'react-materialize'
import { BiUserVoice } from 'react-icons/bi'
import { HiCursorClick } from 'react-icons/hi'
import { columnsObj as col } from '../../schema/columns'
import classNames from 'classnames'

const SingDetails = ({ record }) => {
  const { artistName, songName, memo, problems, jacketImage } = record

  const css_wrap = css`
    width: 100%;
    left: 0;
    top: 0;
    height: 100px;
    text-align: center;
    @media (max-width: 40em) {
      position: absolute;
      padding: 0 1rem;
      top: 50px;
    }
    .card {
      position: relative;
      margin: 0.5rem auto;
      background-color: rgb(255, 255, 255, 0.25);
      backdrop-filter: blur(5px);
      border-radius: 10px;
      display: flex;
      height: 100px;
      box-sizing: border-box;
      color: rgb(72, 84, 97);
      font-family: 'Noto Serif JP', serif;
      justify-items: center;
      width: 40vw;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
      cursor: pointer;
      @media (max-width: 40em) {
        backdrop-filter: blur(2px);
        width: 100%;
        box-shadow: rgb(136 165 191 / 48%) 6px 2px 16px 0px,
          rgb(135 206 235 / 51%) -6px -2px 16px 0px;
      }
    }
    .card-image {
      img {
        width: 100px;
        height: 100px;
        filter: opacity(0.8);
        border-radius: 10px 0 0 10px;
        transform: translateZ(0);
      }
    }
    .card-content {
      width: calc(100% - 100px);
      padding: 0;
      & > div {
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: calc(40vw - 100px);
        height: 100px;
        text-shadow: black 0px 0px;
        box-sizing: border-box;
        @media (max-width: 40em) {
          text-shadow: none;
          width: 100%;
        }
      }
    }
    .card-reveal {
      background-color: whitesmoke;
      font-family: 'Klee';
      color: cadetblue;
      text-align: left;
      i {
        z-index: 10;
        position: relative;
      }
    }
  `
  const css_song_name = css`
    font-weight: 700;
  `
  const css_artist_name = css`
    font-size: 0.8rem;
  `
  const css_reveal_title = css`
    font-family: 'Rye';
    color: #9899d9;
    font-size: 1rem;
    margin: 0;
  `
  const css_problem_wrap = css`
    position: relative;
    li {
      list-style-type: circle !important;
      list-style-position: inside;
      padding: 0.1rem 0;
    }
    h1 {
      padding: 0 0 15px 0;
    }
  `
  const css_memo_wrap = css`
    position: relative;
    h1 {
      padding: 2rem 0;
    }
  `
  const css_memo = css`
    padding: 1rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  `
  const css_reveal_title_icon = css`
    position: absolute;
    font-size: 3rem;
    margin: 0.5rem 0;
    display: inline-block;
    transform: translate(-50%, -50%);
    color: rgba(140, 170, 200, 0.25);
  `
  const css_card_content_wrap = css`
    width: 100%;
    height: 100px;
    padding: 24px;
    box-sizing: border-box;
    display: grid;
    @media (max-width: 40em) {
      padding: 24px 0;
    }
  `
  const css_click_icon = css`
    position: absolute;
    display: inline-block;
    left: calc(40vw - 100px - 1.5rem);
    top: calc(100px - 2rem);
    z-index: -1;
    color: #fffff070;
    font-size: 1.5rem;
    @media (max-width: 40em) {
      left: calc(100% - 1.5rem);
    }
  `

  return (
    <div className={css_wrap}>
      <Card
        closeIcon={<Icon>close</Icon>}
        header={
          <CardTitle
            image={jacketImage.replace('30x30', '100x100')}
            reveal
            waves="light"
          />
        }
        reveal={
          <div>
            <div className={css_problem_wrap}>
              <h1 className={css_reveal_title}>
                <span className={css_reveal_title_icon}>
                  {col.problems.icon}
                </span>
                <span>Problem</span>
              </h1>
              <div>
                <ul>
                  {problems.map((problem, i) => (
                    <li key={`problem-${i}`}>{problem}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={css_memo_wrap}>
              <h1 className={css_reveal_title}>
                <span className={css_reveal_title_icon}>{col.memo.icon}</span>
                <span>Memo</span>
              </h1>
              <div className={css_memo}>{memo}</div>
            </div>
          </div>
        }
      >
        <div className={classNames('activator', css_card_content_wrap)}>
          <div className={classNames('activator', css_song_name)}>
            {songName}
          </div>
          <div className={classNames('activator', css_artist_name)}>
            <BiUserVoice />
            {artistName}
          </div>
          <span className={classNames('activator', css_click_icon)}>
            <HiCursorClick />
          </span>
        </div>
      </Card>
    </div>
  )
}

export default SingDetails
