import React from 'react'
import Button from './Button'

const Function = () => {
  return (
    <section className='flex flex-col gap-x-12 flexStart overflow-hidden '>
      <div className='container flex flex-wrap gap-x-10 padding-container'>
          <div className=' inline-flex items-center'>
          <Button
            type='button'
            title='Link/URL'
            icon='/linh_url.svg'
            variant='btn_dark_green_big'
          />
          </div>

          <div className=' inline-flex items-center'>
            <Button
              type='button'
              title='Login'
              icon='/user.svg'
              variant='btn_dark_green'
              />
          </div>

          <div className=' inline-flex items-center'>
              <Button
              type='button'
              title='Login'
              icon='/user.svg'
              variant='btn_dark_green'
              />
          </div>
        </div>
        <div className='container flex flexBetween flexCenter padding-container'>
        <div className=' inline-flex items-center'>
          <Button
            type='button'
            title='Link/URL'
            icon='/linh_url.svg'
            variant='btn_gray_dark'
          />
          </div>

          <div className=' inline-flex items-center'>
            <Button
              type='button'
              title='Login'
              icon='/user.svg'
              variant='btn_dark_green'
              />
          </div>

          <div className=' inline-flex items-center'>
              <Button
              type='button'
              title='Login'
              icon='/user.svg'
              variant='btn_dark_green'
              />
          </div>
        </div>
    </section>
  )
}

export default Function