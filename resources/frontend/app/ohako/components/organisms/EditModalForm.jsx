import React from 'react'
import { useSetlists } from '../../providers/SetlistProvider'
import { useUpdateSubmit } from '../../hooks/useUpdateSubmit'
import { useBackup } from '../../hooks/useBackup'
import MusicInfoNoEdit from '../atoms/edit/MusicInfoNoEdit'
import SingKeyEdit from '../atoms/edit/SingKeyEdit'
import MemoEdit from '../atoms/edit/MemoEdit'
import ProblemsEdit from '../atoms/edit/ProblemsEdit'
import ScorePointEdit from '../atoms/edit/ScorePointEdit'
import RatingEdit from '../atoms/edit/RatingEdit'
import SingDateEdit from '../atoms/edit/SingDateEdit'
import ModalForm from './ModalForm'
import Loading from '../../../common/components/Loading'
import { ToastContainer } from 'react-toastify'

const EditModalForm = () => {
  const {
    isModalOpen,
    errorMsg,
    setErrorMsg,
    isLoading,
    onSubmit,
    toastContainerOptions,
  } = useUpdateSubmit()
  const { setEditingRecordId, setTmpRecords, allRecords, setInitComplete } =
    useSetlists()
  const { backupData } = useBackup()

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ModalForm
            isLoading={false}
            header="Edit the history"
            id="ohakoEditSetlistFormModal"
            isModalOpen={isModalOpen}
            errorMsg={errorMsg}
            SingDateForm={<SingDateEdit />}
            headerAfter={<MusicInfoNoEdit />}
            SingKeyForm={<SingKeyEdit />}
            RatingForm={<RatingEdit />}
            ScoreForm={<ScorePointEdit />}
            ProblemsForm={<ProblemsEdit />}
            MemoForm={<MemoEdit />}
            submitLabel="Save"
            onSubmit={onSubmit}
            onClose={() => {
              setEditingRecordId(-1)
              setErrorMsg('')
            }}
          />
          <ToastContainer {...toastContainerOptions} />
        </>
      )}
    </>
  )
}

export default EditModalForm
