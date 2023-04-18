import React, { useRef, useState } from 'react'
import { BasicButton } from '../../components/BasicButton'
import { UploadBox, UploadCSVContainer } from './styles'
import { uploadAccountingEntries } from '../../helpers/apiHelpers'

export function UploadCSV() {
  const fileInput = useRef(null) as React.RefObject<HTMLInputElement>
  const [file, setFile] = useState() as any

  function handleFileChange(event: any) {
    setFile(event.target.files[0])
  }

  async function handleUploadFile() {
    try {
      await uploadAccountingEntries(file)
      alert('Upload list succesfully')
    } catch (error: any) {
      alert(error.response.data.message)
    }
  }

  return (
    <UploadCSVContainer>
      <UploadBox>
        <strong>Lista de lançamentos Contábeis</strong>
        <input
          type="file"
          name="image"
          ref={fileInput}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        {file ? (
          <span>
            Arquivo selecionado: <strong>{file.name}</strong>
          </span>
        ) : (
          ''
        )}
        <div>
          <BasicButton
            onClick={() => {
              if (fileInput.current !== null) {
                fileInput.current.click()
              }
            }}
          >
            Selecionar
          </BasicButton>
          {file ? (
            <BasicButton onClick={handleUploadFile}>Enviar</BasicButton>
          ) : (
            ''
          )}
        </div>
      </UploadBox>
    </UploadCSVContainer>
  )
}
