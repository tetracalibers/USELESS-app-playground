import React, { useEffect } from 'react'
import { useLaravelAccessGate } from '../../../common/hooks/useLaravelAccessGate'
import Head from '../../../common/components/Head'
import { css } from '@emotion/css'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import { myPath } from '../../../routes/path'
import GlassCardLink from '../atoms/GlassCardLink'
import Loading from '../../../common/components/Loading'

const ToTpusgAdminLink = React.memo(({ authority_id }) => {
  const accessibleTpusg =
    authority_id === 1 || (authority_id >= 20 && authority_id < 30)
  if (!accessibleTpusg) return <></>

  return (
    <GlassCardLink
      linkTitle="ReTryPlayingUSG"
      link={`../../${myPath.tpusg.admin.Dashboard}`}
    />
  )
})

const ToTetcaliAdminLink = React.memo(({ authority_id }) => {
  const accessibleTetcali = authority_id === 1
  if (!accessibleTetcali) return <></>

  return (
    <GlassCardLink
      linkTitle="TetraCalibersCMS"
      link={`../../${myPath.tetcali.admin.Dashboard}`}
    />
  )
})

const Profile = () => {
  const { userInfo, accessQuery } = useLaravelAccessGate()
  const { isLoading, refetch } = accessQuery

  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    console.log(userInfo)
  }, [userInfo])

  const image_back = '../images/home/momiji.jpg'

  const css_wrap = css`
    width: 100vw;
    min-height: 100vh;
    background-image: url('${image_back}');
    background-size: cover;
    background-repeat: no-repeat;
    box-sizing: border-box;
    position: absolute;
  `
  const css_profile_card = css`
    display: grid;
    justify-content: center;
    justify-items: center;
    position: absolute;
    width: 80vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    border-radius: 3rem;
  `
  const css_user_thumbnail = css`
    width: 10rem;
    filter: blur(0.35px);
    transform: translateZ(0);
    border-radius: 50%;
  `
  const css_user_name = css`
    background-clip: text;
    font-family: TsukushiBmaruGothic;
    color: transparent;
    font-size: 3rem;
    padding: 1rem;
    background-color: #5b6467;
    background-image: linear-gradient(315deg, #5b6467 0%, #8b939a 74%);
    filter: blur(0.25px) drop-shadow(-2px -2px 6px #ffffff) drop-shadow(2px 2px 6px white);
    transform: translateZ(0);
    margin: 0;
}
  `
  const css_item_wrap = css`
    width: 80vw;
    margin: 2rem 10vw;
    padding: 0 5vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  `

  return (
    <>
      <div className={css_wrap}>
        {userInfo ? (
          <>
            <Head title={`${userInfo.name}のアカウント情報`} />
            <CustomCard
              effectColor="#ffffff"
              blur={25}
              borderRadius={0}
              className={css_profile_card}
            >
              <img
                src={`../images/user/${userInfo.thumbnail}`}
                className={css_user_thumbnail}
              />
              <h1 className={css_user_name}>{userInfo.name}</h1>
              <div>{userInfo.profile}</div>
              <div className={css_item_wrap}>
                <GlassCardLink
                  linkTitle="カラオケ記録帳"
                  link={`../../${myPath.karaoke.admin.Top(userInfo.id)}`}
                />
                <ToTpusgAdminLink authority_id={userInfo.authority_id} />
                <ToTetcaliAdminLink authority_id={userInfo.authority_id} />
              </div>
            </CustomCard>
          </>
        ) : (
          <></>
        )}
      </div>
      {isLoading && <Loading />}
    </>
  )
}

export default Profile
