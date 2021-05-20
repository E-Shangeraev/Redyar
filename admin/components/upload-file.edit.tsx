import React from 'react'
import {
  Label,
  Box,
  DropZone,
  DropZoneProps,
  DropZoneItem,
} from '@admin-bro/design-system'
import { BasePropertyProps } from 'admin-bro/src/frontend/components/property-type/base-property-props'
import upload from '../../services/file-upload'

const singleUpload = upload.single('image')

const Edit: React.FC<BasePropertyProps> = props => {
  const { property, record } = props

  const handleDropZoneChange: DropZoneProps['onChange'] = files => {
    const file = files[0]
    console.log(file)
  }

  const uploadedFile = record.params.files

  const fileToUpload = record.params[property.name]

  return (
    <Box marginBottom="xxl">
      <Label>{property.label}</Label>
      <DropZone onChange={handleDropZoneChange} />
      {uploadedFile && !fileToUpload && <DropZoneItem src={uploadedFile} />}
    </Box>
  )
}

export default Edit
