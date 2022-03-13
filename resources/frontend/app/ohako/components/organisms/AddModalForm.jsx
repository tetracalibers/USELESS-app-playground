import React, { useState, useEffect } from 'react'
import { useSetlists } from '../../providers/SetlistProvider'
import { useAddTmp } from '../../providers/AddTmpProvider'
import { useLatest } from '../../hooks/useLatest'
import { useQuery } from 'react-query'
import { useLaravelSanctum } from '../../../common/hooks/useLaravelSanctum'
import SingDateInput from '../atoms/add/SingDateInput'
import RateInput from '../atoms/add/RateInput'
import SingKeyInput from '../atoms/add/SingKeyInput'
import MusicSuggestForm from '../molecules/MusicSuggestForm'
import MemoInput from '../atoms/add/MemoInput'
import ScoreInput from '../atoms/add/ScoreInput'
import ProblemInput from '../atoms/add/ProblemInput'
import ModalForm from './ModalForm'
import parseISO from 'date-fns/parseISO'

const AddModalForm = () => {
  const [isModalOpen, toggleModalOpen] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const { api } = useLaravelSanctum()
  const { user, addRecord, setInitComplete } = useSetlists()
  const { addTmpRecord: tmp, resetAddTmpRecord } = useAddTmp()
  useLatest()

  const submitFetch = async () => {
    return await api
      .post('/api/ohako/setlist/store', {
        json: {
          ...tmp,
          userId: user.id,
          singDate: tmp.singDate
            ? tmp.singDate.toLocaleDateString('ja-JP')
            : new Date().toLocaleDateString('ja-JP'),
          problems: tmp.problemsData.map((obj) => obj.id),
        },
      })
      .json()
  }

  const { refetch, isLoading } = useQuery('newSetlistSubmit', submitFetch, {
    enabled: false,
    retry: 0,
    onSuccess: (data) => {
      if (!data.status) {
        console.log(data.message)
        setError(data.message)
        return
      }
      addRecord({
        ...tmp,
        id: data.id,
        problems: tmp.problemsData.map((obj) => obj.content),
        registDate: parseISO(data.created_at),
      })
      resetAddTmpRecord()
      setErrorMsg('')
      toggleModalOpen(false)
    },
    onError: (err) => {
      console.log(err)
      setErrorMsg('エラーが発生しました。もう一度送信してください。')
      toggleModalOpen(true)
    },
    onSettled: () => {
      setInitComplete(true)
    },
  })

  const submitHandler = (e) => {
    setInitComplete(false)
    refetch()
  }

  return (
    <ModalForm
      isLoading={isLoading}
      header="Add a new history"
      id="ohakoAddSetlistFormModal"
      isModalOpen={isModalOpen}
      setIsModalOpen={toggleModalOpen}
      errorMsg={errorMsg}
      SingDateForm={<SingDateInput />}
      MusicForm={<MusicSuggestForm />}
      SingKeyForm={<SingKeyInput />}
      RatingForm={<RateInput />}
      ScoreForm={<ScoreInput />}
      ProblemsForm={<ProblemInput />}
      MemoForm={<MemoInput />}
      submitLabel="Add"
      onSubmit={submitHandler}
    />
  )
}

export default AddModalForm
