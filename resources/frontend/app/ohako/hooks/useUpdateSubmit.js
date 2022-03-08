import { useState } from 'react'
import { useLaravelSanctum } from '../../common/hooks/useLaravelSanctum'
import { useSetlists } from '../providers/SetlistProvider'
import { useEditDiff } from '../providers/EditDiffProvider'
import { useQuery } from 'react-query'
import { toast, Flip } from 'react-toastify'

export const useUpdateSubmit = () => {
  const [isModalOpen, toggleModalOpen] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const { setInitComplete, allRecords, setAllRecords } = useSetlists()
  const { api } = useLaravelSanctum()
  const { diff, resetDiff } = useEditDiff()

  const submitFetch = async () => {
    return await api
      .post('/api/ohako/setlist/update', {
        json: {
          ...diff,
          singDate: diff.singDate
            ? diff.singDate.toLocaleDateString('ja-JP')
            : new Date().toLocaleDateString('ja-JP'),
          problems: diff.problemsData.map((obj) => obj.id),
        },
      })
      .json()
  }

  const { refetch, isLoading } = useQuery('updateSetlistSubmit', submitFetch, {
    enabled: false,
    retry: 0,
    onSuccess: (data) => {
      if (!data.status) {
        console.log(data.message)
        setError(data.message)
        return
      }
      const updatedAllRecords = allRecords.map((obj) =>
        obj.id == diff.id ? diff : obj
      )
      setAllRecords(updatedAllRecords)
      setErrorMsg('')
      resetDiff()
      toggleModalOpen(false)
      toast.success('Updated successfully', {
        ...toastOptions,
      })
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

  const onSubmit = (e) => {
    setInitComplete(false)
    refetch()
  }

  const toastOptions = {
    position: 'bottom-left',
    //autoClose: 5000,
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Flip,
    theme: 'colored',
  }

  const toastContainerOptions = {
    position: 'bottom-left',
    //autoClose: 5000,
    autoClose: false,
    hideProgressBar: false,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnHover: true,
    draggable: true,
    pauseOnFocusLoss: true,
    transition: Flip,
    theme: 'colored',
  }

  return {
    isModalOpen,
    errorMsg,
    setErrorMsg,
    isLoading,
    onSubmit,
    toastContainerOptions,
  }
}
