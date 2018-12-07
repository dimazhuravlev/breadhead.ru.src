import { useEffect, useLayoutEffect } from 'react'
import canUseDOM from 'can-use-dom'

export const useIsomorficEffect = canUseDOM ? useLayoutEffect : useEffect
