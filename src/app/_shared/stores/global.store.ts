import { create, StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'

const initialGlobalState = {
  openSideBar: true
}

type GlobalSlice = {
  openSideBar: boolean
  setOpenSideBar: (open: boolean) => void
}

const createGlobalSlice: StateCreator<GlobalSlice> = (set) => {
  return {
    ...initialGlobalState,
    setOpenSideBar: (open) => set({ openSideBar: open })
  }
}

export const useGlobalStore = create<GlobalSlice>()(
  persist((...a) => ({ ...createGlobalSlice(...a) }), { name: 'global-store' })
)
