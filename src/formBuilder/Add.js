// @flow

import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  addDetails: {
    '& .popover': {
      width: '300px',
      'z-index': '1051 !important',
      '& .popover-inner': {
        border: '1px solid #1d71ad',
        borderRadius: '4px',
        '& .popover-header': { borderBottom: '1px solid #1d71ad' },
        '& .popover-body': {
          '& .fb-radio-group': { display: 'block' },
          '& div': { margin: '0', display: 'inline-block', width: '50%' },
          '& .left': { textAlign: 'left' },
          '& .right': { textAlign: 'right' }
        }
      }
    }
  }
})

export default function Add({
  name,
  addElem,
  hidden
}: {
  name: string,
  addElem: (choice: string) => void,
  hidden?: boolean
}) {
  const classes = useStyles()
  const [popoverOpen, setPopoverOpen] = useState(false)

  return (
    <div style={{ display: hidden ? 'none' : 'initial' }}>
      <a onClick={() => setPopoverOpen(true)} id={`${name}_add`}>
        <i className='fa fa-plus-square card-add' />Add!
      </a>
      <div>
        <div>
          <div className='left'>
            <button
              className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap py-2 px-4 rounded text-base leading-normal no-underline'
              onClick={() =>
                addElem('section')
              }
              color='secondary'
            >
              Create Section
            </button>
          </div>
          <div className='right'>
            <button
              className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap py-2 px-4 rounded text-base leading-normal no-underline'
              onClick={() => {
                addElem('card')
              }}
              color='primary'
            >
              Create Card
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
