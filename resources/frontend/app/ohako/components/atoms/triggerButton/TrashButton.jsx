import React, { useRef } from 'react'
import { css } from '@emotion/css'
import { useQuery } from 'react-query'
import { useLaravelSanctum } from '../../../../common/hooks/useLaravelSanctum'
import { useSetlists } from '../../../providers/SetlistProvider'
import { GiCrossedSabres } from 'react-icons/gi'
import { ToastContainer, toast, Flip } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert'
import { Button } from 'react-materialize'

const TrashButton = ({ recordId }) => {
  const { api } = useLaravelSanctum()
  const { trashRecord } = useSetlists()
  const clicked = useRef(-1)

  const toastOptions = {
    position: 'top-right',
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    transition: Flip,
    theme: 'colored',
  }

  const trashFetch = async () => {
    return await api
      .post('/api/ohako/setlist/destroy', {
        json: {
          id: clicked.current,
        },
      })
      .json()
  }

  const { refetch, isLoading } = useQuery('recordTrash', trashFetch, {
    enabled: false,
    retry: 0,
    onSuccess: (data) => {
      if (clicked.current == data.id) {
        toast.success('Deleted successfully', {
          ...toastOptions,
        })
        trashRecord(data.id)
      }
    },
    onError: (err) => {
      console.log(err)
      if (clicked.current > 0) {
        toast.error('failure to delete', {
          ...toastOptions,
        })
      }
    },
    onSettled: () => (clicked.current = -1),
  })

  const css_confirm_text = css`
    font-family: rye;
    font-size: 2rem;
    font-style: italic;
    letter-spacing: 0.1em;
    text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c,
      0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424,
      0 7px 0 #222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c,
      0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414,
      0 15px 0 #121212, 0 22px 30px rgb(0 0 0 / 90%);
    color: #e0dfdc;
    font-family: 'Trade Winds', cursive;
  `
  const css_confirm_button_wrap = css`
    display: flex;
    flex: 1 1;
    justify-content: space-evenly;
    button:focus {
      background: inherit;
    }
  `
  const css_confirm_button_yes = css`
    padding-top: 4rem;
    font-size: 2rem;
    text-align: center;
    text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #ff8000,
      0 -18px 40px #f00;
    color: #ffffff;
    letter-spacing: 0.1em;
    font-family: 'Josefin Sans', sans-serif;
  `
  const css_confirm_button_cancel = css`
    text-align: center;
    font-size: 2rem;
    padding-top: 4rem;
    color: rgba(255, 255, 255, 0.3);
    text-shadow: 0 0 15px rgb(255 255 255 / 50%),
      0 0 10px rgb(255 255 255 / 50%);
    letter-spacing: 0.1em;
    font-family: 'Josefin Sans', sans-serif;
  `
  const css_confirm_icon = css`
    position: absolute;
    left: 50%;
    font-size: 10rem;
    top: -100%;
    transform: translate(-50%, -50%);
    z-index: -1;
    height: auto;
    color: rgba(75, 115, 180, 1);
    filter: brightness(0.5);
    transform: translateZ(0);
  `

  const trashHandler = (e) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <div className={css_confirm_icon}>{<GiCrossedSabres />}</div>
            <p className={css_confirm_text}>
              Are you sure you want me to delete it?
            </p>
            <div className={css_confirm_button_wrap}>
              <button
                onClick={() => {
                  clicked.current = recordId
                  onClose()
                  refetch()
                }}
                className={css_confirm_button_yes}
              >
                Delete
              </button>
              <button onClick={onClose} className={css_confirm_button_cancel}>
                Cancel
              </button>
            </div>
          </div>
        )
      },
    })
  }

  const css_wrap = css`
    .btn-floating:hover {
      background: none;
      filter: brightness(0.5);
      transform: translateZ(0);
    }
  `
  const css_button = css`
    background: none;
    position: relative;
    color: skyblue;
    overflow: visible;
    transform: scale(1.25);
    @media (max-width: 40em) {
      width: auto;
      height: auto;
      transform: scale(1.5);
    }
    svg {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%) scale(1.25);
      @media (max-width: 40em) {
        top: 50%;
        left: 100%;
        transform: translate(-100%, -50%) scale(1.5);
      }
    }
  `

  return (
    <div className={css_wrap}>
      <Button
        floating
        node="button"
        flat
        waves="light"
        onClick={(e) => trashHandler(e)}
        disabled={isLoading}
        data-record-id={recordId}
        className={css_button}
      >
        <GiCrossedSabres />
      </Button>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        transition={Flip}
        theme="colored"
      />
    </div>
  )
}

export default TrashButton
