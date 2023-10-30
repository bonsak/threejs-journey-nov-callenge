import { create } from 'zustand'

const useSoundStore = create((set) => ({
  soundIsOn: false,
  toggleSound: () =>
    set((state) => ({
      soundIsOn: !state.soundIsOn,
    })),
}))

export default useSoundStore
