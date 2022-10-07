import React from 'react'
import { Form, Label, Submit, TextField, useForm } from '@redwoodjs/forms'
import { Button } from '../Button/button'

export const TodoForm = ({onSubmit, defaultState, isEdit, formMethods, AddLoading, EditLoading}) => {
  return (
    <Form onSubmit={onSubmit} formMethods={formMethods}>
      <Label
        name="name"
        className="rw-label mr-4"
        errorClassName="rw-label rw-label-error"
      >
        Todo
      </Label>
      <TextField
        name="name"
        defaultValue={defaultState}
        className="rw-input bg-gray-200"
        errorClassName="rw-input rw-input-error"
        validation={{ required: true }}
      />
      <div className="rw-button-group">
        {!isEdit&&!EditLoading ? <Button text='Add' loading={AddLoading}/>
        : <Button text='Edit' loading={EditLoading}/>
        }
      </div>
    </Form>
  )
}
