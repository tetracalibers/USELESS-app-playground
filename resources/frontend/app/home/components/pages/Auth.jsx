import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useLocation } from 'react-router-dom'
import { useLaravelSanctum } from '../../../common/hooks/useLaravelSanctum'
import Head from '../../../common/components/Head'
import { css } from '@emotion/css'
import { useForm } from 'react-hook-form'
import { myPath } from '../../../routes/path'
import { BiMessageRoundedError } from 'react-icons/bi'
import classNames from 'classnames'
import PasswordInput from '../atoms/PasswordInput'
import ValidationError from '../../../common/components/FormError'
import Loading from '../../../common/components/Loading'

const Auth = () => {
  const image_back = '/images/home/door.jpg'
  const css_back = css`
    background-image: url('${image_back}');
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
  `
  const css_formWrap = css`
    margin: 0 10vw !important;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    filter: opacity(0.925);
    font-family: 'Poiret One';
    width: 80vw;
    input:not([type]),
    input[type='text']:not(.browser-default),
    input[type='password']:not(.browser-default),
    input[type='email']:not(.browser-default),
    input[type='url']:not(.browser-default),
    input[type='time']:not(.browser-default),
    input[type='date']:not(.browser-default),
    input[type='datetime']:not(.browser-default),
    input[type='datetime-local']:not(.browser-default),
    input[type='tel']:not(.browser-default),
    input[type='number']:not(.browser-default),
    input[type='search']:not(.browser-default),
    textarea.materialize-textarea {
      width: 100%;
      box-sizing: border-box;
      color: black;
    }
    input:not([type]):focus:not([readonly]),
    input[type='text']:not(.browser-default):focus:not([readonly]),
    input[type='password']:not(.browser-default):focus:not([readonly]),
    input[type='email']:not(.browser-default):focus:not([readonly]),
    input[type='url']:not(.browser-default):focus:not([readonly]),
    input[type='time']:not(.browser-default):focus:not([readonly]),
    input[type='date']:not(.browser-default):focus:not([readonly]),
    input[type='datetime']:not(.browser-default):focus:not([readonly]),
    input[type='datetime-local']:not(.browser-default):focus:not([readonly]),
    input[type='tel']:not(.browser-default):focus:not([readonly]),
    input[type='number']:not(.browser-default):focus:not([readonly]),
    input[type='search']:not(.browser-default):focus:not([readonly]),
    textarea.materialize-textarea:focus:not([readonly]) {
      box-shadow: 6px 6px 10px rgb(0 0 0 / 10%), -6px -6px 10px white;
      border-bottom: none;
      color: black;
    }
  `
  const css_input = css`
    grid-column: 1 / -1;
    span {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translate(0, -50%);
      line-height: 1.25em;
      padding: 1.25em 0;
      display: inline-block;
      box-sizing: border-box;
      color: gray;
    }
  `
  const css_title = css`
    text-align: center;
    background-color: #d8dede;
    background-image: linear-gradient(315deg, #d8dede 0%, #e5bdf6 74%);
    background-clip: text;
    color: transparent;
    grid-column: 1 / -1;
  `
  const css_button = css`
    font-family: 'Poiret One';
    width: 100% !important;
    font-size: 1.5rem !important;
  `
  const css_button_login = css`
    margin-top: 1rem !important;
    padding: 0 1rem;
    justify-self: end;
    grid-column: 2;
  `
  const css_button_regist = css`
    padding: 0 0.5rem;
    margin-top: 0;
    justify-self: end;
    grid-column: 1;
  `
  const css_validation_error = css`
    grid-column: 1 / -1;
    font-family: 'TsukushiBmaruGothic';
    font-size: 0.9rem;
    display: flex;
    justify-content: start;
    align-items: center;
    svg {
      font-size: 1.5rem;
    }
  `
  const css_server_error = css`
    grid-column: 1 / -1;
    font-size: 0.9rem;
    padding: 1rem 0;
    line-height: 1.25rem;
    font-family: 'TsukushiBmaruGothic';
    background-color: #fe7bb0;
    background-image: linear-gradient(315deg, #fe7bb0 0%, #ff748b 74%);
    background-clip: text;
    color: transparent;
    svg {
      fill: palevioletred;
      font-size: 1.5rem;
    }
  `

  const [pressButtonType, setPressButtonType] = useState(null)
  const [tmpFormData, setTmpFormData] = useState(null)
  const { api } = useLaravelSanctum()
  const location = useLocation()
  const wantToGoBack = location.state ? location.state.wantToGoBack : false

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const authFetch = async () => {
    return await api
      .post(`/api/auth/${pressButtonType}`, {
        json: tmpFormData,
      })
      .json()
  }

  const onSubmit = async (data, e) => {
    if (data) {
      const sendTo = e.target.getAttribute('data-button-type')
      setPressButtonType(sendTo)
      setTmpFormData(data)
    }
  }

  const navigate = useNavigate()
  const [existingError, setError] = useState('')

  const { isLoading, refetch } = useQuery(['user'], authFetch, {
    enabled: false,
    onSuccess: (data) => {
      if (!data.status) {
        setError(data.message)
        return
      }
      const userInfo = data.userInfo
      localStorage.setItem('tomixy_play_id', userInfo.id)
      wantToGoBack ? navigate(-1) : navigate(myPath.this.Profile(userInfo.id))
    },
    onError: (err) => {
      console.log(err)
      setError(err.message)
    },
    onSettled: () => {
      setPressButtonType(null)
      setTmpFormData(null)
    },
  })

  useEffect(() => {
    if (pressButtonType && tmpFormData) refetch()
  }, [pressButtonType, tmpFormData])

  return (
    <>
      <div className={classNames('neu-skeuos', css_back)}>
        <Head title="login" />
        <form className={classNames('paper', css_formWrap)}>
          <h1 className={css_title}>Login</h1>
          {existingError && (
            <div className={css_server_error}>
              <BiMessageRoundedError />
              {existingError}
            </div>
          )}
          {errors.name && (
            <ValidationError
              message="ユーザー名を入力してください"
              wrapClassName={css_validation_error}
            />
          )}
          <input
            placeholder="User Name"
            type="text"
            name="name"
            className={css_input}
            {...register('name', { required: true })}
          />
          {errors.password && (
            <ValidationError
              message="パスワードを入力してください"
              wrapClassName={css_validation_error}
            />
          )}
          <PasswordInput
            wrapClassName={css_input}
            inputOption={{
              ...register('password', { required: true }),
            }}
            name="password"
          />
          <button
            className={classNames(css_button, css_button_login)}
            onClick={handleSubmit(onSubmit)}
            disabled={!!pressButtonType}
            data-button-type="login"
          >
            Login
          </button>
          <button
            className={classNames(css_button, css_button_regist)}
            onClick={handleSubmit(onSubmit)}
            disabled={!!pressButtonType}
            data-button-type="regist"
          >
            New Registration
          </button>
        </form>
      </div>
      {isLoading && <Loading />}
    </>
  )
}

export default Auth
