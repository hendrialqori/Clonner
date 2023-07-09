import C from '../src/main'
import { describe, expect, it } from 'vitest'

describe('Clone', () => {

  // it('Should correctly')

  it('Should be same value', () => {

    const profile = {
      name: 'Hendri',
      department: 'IT',
      role: 'Frontend Engineer'
    }

    const profileState = C.clonner(profile, draft => {
      draft.name = 'Hendri Alqori'
    })

    expect(profileState).toEqual({
      name: 'Hendri Alqori',
      department: 'IT',
      role: 'Frontend Engineer'
    })

  })
})