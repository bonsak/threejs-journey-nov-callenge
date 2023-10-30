import { create } from 'zustand'

const useSpriteStore = create((set) => ({
  spriteIsOn: false,
  toggleSprite: () =>
    set((state) => ({
      spriteIsOn: !state.spriteIsOn,
    })),
}))

export default useSpriteStore
