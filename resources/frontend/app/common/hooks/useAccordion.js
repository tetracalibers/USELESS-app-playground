import { useState } from 'react'
import { css } from '@emotion/css'

export const useAccordion = (
  triggerElemTag = 'dt',
  toggleVisibleElemTag = 'dd',
  activeClass = 'accordion_active'
) => {
  const [openTab, setOpenTab] = useState(null)

  const accordionToggle = (e) => {
    if (openTab) {
      console.log(openTab)
      for (let i = 0; i < openTab.children.length; i++) {
        openTab.children[i].classList.remove(activeClass)
      }
    }
    const accordionWrap = e.target.parentElement
    setOpenTab(accordionWrap)
    for (let i = 0; i < accordionWrap.children.length; i++) {
      accordionWrap.children[i].classList.add(activeClass)
    }
  }

  const css_accordionWrap = css`
    ${triggerElemTag} {
      cursor: pointer;
      &.${activeClass} {
        cursor: default;
      }
    }
    ${toggleVisibleElemTag} {
      display: none;
      &.${activeClass} {
        display: block;
      }
    }
  `

  return {
    accordionToggle,
    css_accordionWrap,
  }
}
