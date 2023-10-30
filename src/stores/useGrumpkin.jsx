import { create } from 'zustand'

const useGrumpkinStore = create((set) => ({
  grumpkinType: 1,
  setGrumpkinType: (grumpkinType) =>
    set(() => ({ grumpkinType: grumpkinType })),
}))

export default useGrumpkinStore
