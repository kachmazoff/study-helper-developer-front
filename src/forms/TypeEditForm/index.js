import React from 'react'

import { editType, getType } from '../../services/articlesTypesApi'

function TypeEditForm({ data, ...props }) {
  const [editableData, setEditableData] = React.useState(data)

  React.useEffect(() => {
    getType(props.match.params.id)
      .then((d) => {
        setEditableData({...d})
      })
  }, [props.match.params.id])

  const onChange = React.useCallback((event) => {
    const dataCopy = { ...editableData }
    dataCopy[event.target.name] = event.target.value
    setEditableData(dataCopy)
  }, [editableData])

  const onSubmit = React.useCallback((event) => {
    event.preventDefault()
    editType(editableData)
  }, [editableData])

  return (
    <form onSubmit={onSubmit}>
      {
        !editableData
          ? <p>Подождите..</p>
          : <>
            <input type="text" name="name" value={editableData.name} onChange={onChange} placeholder="Тип" />
            <input type="text" name="shortcut" value={editableData.shortcut} onChange={onChange} placeholder="Shortcut" />
            <input type="text" name="bgColor" value={editableData.bgColor} onChange={onChange} placeholder="Цвет фона" />
            <input type="text" name="fontColor" value={editableData.fontColor} onChange={onChange} placeholder="Цвет текта" />
            <input type="submit" value="Изменить" disabled={!editableData} />
          </>
      }
    </form>
  )
}

export default TypeEditForm
