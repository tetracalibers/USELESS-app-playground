import React from 'react'
import { useEditDiff } from '../../providers/EditDiffProvider'
import { useUpdateSubmit } from '../../hooks/useUpdateSubmit'
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
    toggleModalOpen,
    errorMsg,
    setErrorMsg,
    isLoading,
    onSubmit,
    toastContainerOptions,
  } = useUpdateSubmit()
  const { resetDiff } = useEditDiff()

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
            setIsModalOpen={toggleModalOpen}
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
              resetDiff()
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
