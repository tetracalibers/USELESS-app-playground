import React, { useEffect, useMemo } from 'react'
import { css } from '@emotion/css'
import { Table, Thead, Tbody, Tr, Td, Th } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { useTableInit } from '../../hooks/useTableInit'
import { useSetlists } from '../../providers/SetlistProvider'
import { useProblemInit } from '../../hooks/useProblemInit'
import { useWindowSize } from '@react-hook/window-size'
import { columnsObj as vis } from '../../schema/columns'
import TrashButton from '../atoms/triggerButton/TrashButton'
import EditButton from '../atoms/triggerButton/EditButton'
import format from 'date-fns/format'
import RateStarsPrint from '../../../common/components/RateStarsPrint'
import ScoreChartPrint from '../../../common/components/ScoreChartPrint'
import SingKeyPrint from '../atoms/table/SingKeyPrint'
import SingDetails from '../molecules/SingDetails'
import classNames from 'classnames'
import PuffLoader from 'react-spinners/PuffLoader'

const ExcelTable = () => {
  useTableInit()
  useProblemInit()
  const { allRecords } = useSetlists()
  const [width, height] = useWindowSize()

  const latestRecordId = useMemo(() => {
    if (allRecords.length > 0) {
      const idArr = allRecords.map((record) => record.id)
      return Math.max(...idArr)
    }
  }, [allRecords.length])

  const image_back = '../images/ohako/twinkleBack.jpg'
  const css_wrap = css`
    width: 100vw;
    min-height: calc(100vh - 100px);
    background-image: linear-gradient(
        221deg,
        rgba(12, 186, 186, 0.9) 0%,
        rgba(100, 125, 238, 0.9) 74%
      ),
      url(../images/ohako/twinkleBack.jpg);
    background-blend-mode: screen;
    background-size: cover;
    .responsiveTable tbody tr {
      margin: 1em;
      border-radius: 2rem;
      border: none;
      overflow: hidden;
      @media (max-width: 40em) {
        box-shadow: rgb(50 50 93 / 25%) 0px 50px 100px -20px,
          rgb(0 0 0 / 30%) 0px 30px 60px -30px,
          rgb(10 37 64 / 35%) 0px -2px 6px 0px inset;
      }
    }
    @media screen and (max-width: 40em) {
      .responsiveTable td.pivoted {
        min-height: 4rem;
      }
    }
    .btn-flat:focus {
      background-color: inherit;
    }
  `
  const css_table = css`
    overflow-x: scroll;
    color: #f5f5f5;
    background-image: linear-gradient(
        315deg,
        rgba(12, 186, 186, 0.9) 0%,
        rgba(100, 125, 238, 0.9) 74%
      ),
      url('${image_back}');
    background-size: cover;
    background-attachment: fixed;
    td {
      text-align: center;
    }
    @media (max-width: 40em) {
      background-image: linear-gradient(
          88deg,
          rgba(12, 186, 186, 0.9) 0%,
          rgba(100, 125, 238, 0.9) 74%
        ),
        url(../images/ohako/twinkleBack.jpg);
      tr {
        background-size: cover;
        background-image: linear-gradient(
            315deg,
            rgba(12, 186, 186, 0.9) 0%,
            rgba(100, 125, 238, 0.9) 74%
          ),
          url('${image_back}');
      }
    }
  `
  const css_thead = css`
    position: sticky;
    top: 100px;
    background: rgba(140, 170, 200, 0.5);
    backdrop-filter: hue-rotate(45deg) blur(2px);
    color: bisque;
    z-index: 2;
  `
  const css_thead_title = css`
    font-family: 'Rye', cursive;
    z-index: 1;
    position: relative;
  `
  const css_thead_icon = css`
    position: relative;
    svg {
      position: absolute;
      font-size: 3rem;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: rgba(140, 170, 200, 0.5);
    }
  `
  const css_tbody = css`
    font-family: 'Klee';
    ${allRecords.length == 0 &&
    `
      position: relative;
      height: calc(100vh - 30px - 1.5rem - 100px - 1px);
      @media (max-width: 40em) {
        height: calc(100vh - 100px);
      }
      & > span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `}
  `
  const css_tbody_tr = css`
    border-bottom: 0.5px dashed #f6f0ea80;
  `
  const css_th = css`
    text-align: center;
  `
  const css_sing_details = css`
    @media (max-width: 40em) {
      position: relative;
      height: 150px;
      margin: 1rem -0.25em 2rem;
    }
  `

  return (
    <div className={css_wrap}>
      <Table className={css_table}>
        <Thead className={css_thead}>
          <Tr>
            <Th></Th>
            <Th className={css_th}>
              <span className={css_thead_icon}>{vis.singDate.icon}</span>
              <span className={css_thead_title}>{vis.singDate.title}</span>
            </Th>
            <Th className={css_th}>
              <span className={css_thead_icon}>{vis.songName.icon}</span>
              <span className={css_thead_title}>Sing Details</span>
            </Th>
            <Th className={css_th}>
              <span className={css_thead_icon}>{vis.singKey.icon}</span>
              <span className={css_thead_title}>{vis.singKey.title}</span>
            </Th>
            <Th className={css_th}>
              <span className={css_thead_icon}>{vis.rating.icon}</span>
              <span className={css_thead_title}>{vis.rating.title}</span>
            </Th>
            <Th className={css_th}>
              <span className={css_thead_icon}>{vis.score.icon}</span>
              <span className={css_thead_title}>{vis.score.title}</span>
            </Th>
            <Th className={css_th}>
              <span className={css_thead_icon}>{vis.registDate.icon}</span>
              <span className={css_thead_title}>{vis.registDate.title}</span>
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody className={css_tbody}>
          {allRecords.length == 0 ? (
            <PuffLoader size={height * 0.4} color="#aecad6" />
          ) : (
            <>
              {allRecords.map((record, rowIdx) => (
                <Tr
                  key={rowIdx}
                  className={css_tbody_tr}
                  id={
                    record.id == latestRecordId && 'sing-history-latest-record'
                  }
                >
                  <Td>
                    <EditButton record={record} />
                  </Td>
                  <Td>{format(record.singDate, 'yyyy/MM/dd')}</Td>
                  <Td className={css_sing_details}>
                    <SingDetails record={record} />
                  </Td>
                  <Td>
                    <SingKeyPrint value={record.singKey} />
                  </Td>
                  <Td>
                    <RateStarsPrint rate={record.rating} />
                  </Td>
                  <Td>
                    <ScoreChartPrint score={record.score} />
                  </Td>
                  <Td>{format(record.registDate, 'yyyy/MM/dd kk:mm:ss')}</Td>
                  <Td>
                    <TrashButton recordId={record.id} />
                  </Td>
                </Tr>
              ))}
            </>
          )}
        </Tbody>
      </Table>
    </div>
  )
}

export default ExcelTable
