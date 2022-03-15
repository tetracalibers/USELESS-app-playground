import React, { useEffect, lazy, Suspense } from 'react'
import { css } from '@emotion/css'
import { useSetlists } from '../../providers/SetlistProvider'
import { useLaravelAccessGate } from '../../../common/hooks/useLaravelAccessGate'
import ExcelTable from '../organisms/ExcelTable'
import AddButton from '../atoms/triggerButton/AddButton'
import Loading from '../../../common/components/Loading'
import ConfigSideMenu from '../organisms/ConfigSideMenu'
import Header from '../molecules/Header'
import EditModalForm from '../organisms/EditModalForm'
import ScrollButtonsFab from '../molecules/ScrollButtonsFab'

const AddModalForm = lazy(() => import('../organisms/AddModalForm'))

const Top = () => {
  const { userInfo, accessQuery } = useLaravelAccessGate()
  const { isLoading, refetch } = accessQuery
  const { setUser } = useSetlists()

  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    setUser(userInfo)
  }, [userInfo])

  const css_outer_container = css`
    height: 100vh;
  `

  return (
    <>
      <div
        id="outerContainer-forReactBurgerMenu"
        className={css_outer_container}
      >
        <ConfigSideMenu />
        <main id="pageWrap-forReactBurgerMenu">
          {isLoading ? (
            <Loading />
          ) : (
            <Suspense fallback={<Loading />}>
              <Header />
              <ExcelTable />
              <EditModalForm />
              <AddModalForm />
              <AddButton />
              <ScrollButtonsFab />
            </Suspense>
          )}
        </main>
      </div>
    </>
  )
}

export default Top
