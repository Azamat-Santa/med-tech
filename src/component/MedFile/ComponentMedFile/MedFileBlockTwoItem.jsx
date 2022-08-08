import React from 'react'
import '../medFile.css'
export default function MedFileBlockTwoItem({text}) {
  return (
    <div className="med-file__block__two__item">
          <div className="med-file__block__two__item__left">
          {text}
          </div>
          <div className="med-file__block__two__item__right">
            <input type="text" className="med-file__input" />
          </div>
    </div>
  )
}
