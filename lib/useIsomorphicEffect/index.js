import { useEffect, useLayoutEffect } from 'react'
import { canUseDOM } from '../canUseDom'

export const useIsomorficEffect = canUseDOM ? useLayoutEffect : useEffect
