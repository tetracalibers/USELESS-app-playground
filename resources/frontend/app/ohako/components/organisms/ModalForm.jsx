import React, { useEffect, useRef, useLayoutEffect } from 'react'
import { css } from '@emotion/css'
import { Modal, Button } from 'react-materialize'
import { GiCrossedBones } from 'react-icons/gi'
import Loading from '../../../common/components/Loading'
import FormError from '../../../common/components/FormError'
import { columnsObj as cl } from '../../schema/columns'

const ModalForm = ({
  isLoading,
  header,
  headerAfter = null,
  id,
  isModalOpen,
  setIsModalOpen,
  errorMsg,
  SingDateForm,
  MusicForm = null,
  SingKeyForm,
  RatingForm,
  ScoreForm,
  ProblemsForm,
  MemoForm,
  submitLabel,
  onSubmit,
  onClose = () => {},
}) => {
  const modalContentRef = useRef(null)
  useEffect(() => {
    if (isModalOpen && modalContentRef.current) {
      modalContentRef.current.scrollIntoView()
    }
  }, [isModalOpen, modalContentRef.current])

  const css_wrap = css`
    background-color: rgba(255, 255, 255, 0);
    background-image: linear-gradient(315deg, #f9c5d17d 0%, #9795ef7a 74%);
    backdrop-filter: blur(20px) drop-shadow(2px 4px 6px white);
    overflow-y: auto;
    color: #485461;
    h4 {
      font-family: 'Satisfy', cursive;
      margin: 0;
    }
    input[type='text']:not(.browser-default),
    input[type='text']:not(.browser-default):focus:not([readonly]) {
      background: rgba(255, 255, 255, 0.25);
      border-radius: 30px;
      padding: 0 1rem;
      box-sizing: border-box;
      border: none;
      box-shadow: none;
      padding: 1rem;
      font-family: 'Bellota', 'TsukushiBMaruGothic';
      font-weight: 700;
    }
    input[type='text']:not(.browser-default):disabled {
      background: rgba(0, 0, 0, 0.1);
    }
    .input-field {
      margin-bottom: 0;
      margin-top: 0;
      .prefix.active {
        color: #485461;
      }
    }
    .input-field > label:not(.label-icon).active,
    input[type='text']:not(.browser-default):focus:not([readonly]) + label {
      font-family: 'TsukushiBMaruGothic';
      color: antiquewhite;
    }
    ul:not(.browser-default) {
      position: relative;
      margin: 0 1rem 0;
      font-family: 'TsukushiBMaruGothic';
      border: none;
      overflow: hidden;
    }
    .collection .collection-item {
      position: relative;
      background-color: rgba(255, 255, 255, 0.25);
      border: none;
      margin-bottom: 0.25rem;
      box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;
      border-radius: 30px 0 0 30px;
      background-image: linear-gradient(
        90deg,
        var(--pastel, rgba(244, 221, 232, 0.3)) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      filter: contrast(0.75);
      transform: translateZ(0);
    }
    .collection .collection-item.avatar {
      min-height: 0;
    }
    .modal-footer {
      position: absolute;
      top: 0;
      background: rgba(255, 255, 255, 0);
    }
    .modal-content {
      padding: 0 24px 24px;
    }
  `
  const css_input_label = css`
    padding: 1rem 0;
    font-family: 'Bellota', cursive;
    font-style: italic;
    font-weight: 700;
    font-size: 1.25rem;
  `
  const css_submit = css`
    text-align: right;
  `
  const css_submit_button = css`
    background-color: rgba(255, 255, 255, 0.4);
    font-family: 'Bellota', cursive;
    font-weight: 700;
    font-size: 1.25rem;
    border-radius: 30px;
    box-shadow: rgb(136 165 191 / 48%) -13px 7px 16px 0px,
      rgb(255 255 255 / 80%) 1px 1px 20px 0px;
    color: #ffffff;
  `
  const css_memo = css`
    padding-top: 1rem;
  `
  const css_button_close = css`
    font-size: 1.5rem;
  `
  const css_header = css`
    padding: 1.5rem 0;
  `

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Modal
            actions={[
              <Button
                flat
                modal="close"
                node="button"
                waves="light"
                className={css_button_close}
                onClick={onClose}
              >
                <GiCrossedBones />
              </Button>,
            ]}
            className={css_wrap}
            id={id}
            bottomSheet={false}
            fixedFooter={false}
            open={isModalOpen}
            options={{
              dismissible: true,
              endingTop: '10%',
              inDuration: 250,
              onCloseEnd: () => setIsModalOpen(false),
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: () => setIsModalOpen(true),
              opacity: 0.5,
              outDuration: 250,
              preventScrolling: true,
              startingTop: '4%',
            }}
          >
            <div ref={modalContentRef}>
              <h4 className={css_header}>{header}</h4>
              {headerAfter && <div>{headerAfter}</div>}
              {errorMsg != '' && <FormError message={errorMsg} />}
              <div>
                <div className={css_input_label}>{cl['singDate'].title}</div>
                {SingDateForm}
              </div>
              {MusicForm && (
                <div>
                  <div className={css_input_label}>Artist & Song</div>
                  {MusicForm}
                </div>
              )}
              <div>
                <div className={css_input_label}>{cl['singKey'].title}</div>
                {SingKeyForm}
              </div>
              <div>
                <div className={css_input_label}>{cl['rating'].title}</div>
                {RatingForm}
              </div>
              <div>
                <div className={css_input_label}>{cl['score'].title}</div>
                {ScoreForm}
              </div>
              <div>
                <div className={css_input_label}>{cl['problems'].title}</div>
                {ProblemsForm}
              </div>
              <div className={css_memo}>
                <div className={css_input_label}>{cl['memo'].title}</div>
                {MemoForm}
              </div>
            </div>
            <div className={css_submit}>
              <Button
                node="button"
                waves="light"
                flat
                onClick={(e) => onSubmit(e)}
                className={css_submit_button}
              >
                {submitLabel}
              </Button>
            </div>
          </Modal>
        </>
      )}
    </>
  )
}

export default ModalForm
