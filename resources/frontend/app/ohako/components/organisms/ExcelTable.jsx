import React, { useEffect } from 'react'
import { css } from '@emotion/css'
import { Table, Thead, Tbody, Tr, Td, Th } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { useTableInit } from '../../hooks/useTableInit'
import { useSetlists } from '../../providers/SetlistProvider'
import { useProblemInit } from '../../hooks/useProblemInit'
import { visibles } from '../../schema/columns'
import TrashButton from '../atoms/triggerButton/TrashButton'
import EditButton from '../atoms/triggerButton/EditButton'
import format from 'date-fns/format'

const ExcelTable = () => {
  useTableInit()
  useProblemInit()
  const { allRecords } = useSetlists()

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
  `
  const css_tbody_tr = css`
    border-bottom: 0.5px dashed #f6f0ea80;
  `
  const css_th = css`
    text-align: center;
  `

  return (
    <div className={css_wrap}>
      <Table className={css_table}>
        <Thead className={css_thead}>
          <Tr>
            <Th></Th>
            {visibles.map((obj, i) => (
              <Th key={i} className={css_th}>
                <span className={css_thead_icon}>{obj.icon}</span>
                <span className={css_thead_title}>{obj.title}</span>
              </Th>
            ))}
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody className={css_tbody}>
          {allRecords.map((record, rowIdx) => (
            <Tr key={rowIdx} className={css_tbody_tr}>
              <Td>
                <EditButton recordId={record.id} />
              </Td>
              <Td>{format(record.singDate, 'yyyy/MM/dd')}</Td>
              <Td>{record.artistName}</Td>
              <Td>{record.songName}</Td>
              <Td>
                {record.singKey > 0 ? `+${record.singKey}` : record.singKey}
              </Td>
              <Td>{record.rating}</Td>
              <Td>{record.score}</Td>
              <Td>
                <ul>
                  {record.problems.map((problem, i) => (
                    <li key={`problem-${i}`}>{problem}</li>
                  ))}
                </ul>
              </Td>
              <Td>{record.memo}</Td>
              <Td>{format(record.registDate, 'yyyy/MM/dd kk:mm:ss')}</Td>
              <Td>
                <TrashButton recordId={record.id} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  )
}

export default ExcelTable
