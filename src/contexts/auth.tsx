/* eslint-disable @typescript-eslint/indent */
import { type JSX, createContext, createSignal, useContext, onMount } from 'solid-js'

interface AuthContextData {
  signIn: (params: { email: string; password: string }) => Promise<void>
  signOut: () => Promise<void>
  token: string | undefined
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = (props: { children: JSX.Element }) => {
  const [token, setToken] = createSignal<string | undefined>()

  onMount(() => {
    void loadStorageData()
  })

  const loadStorageData = async () => {
    try {
      const storageToken = localStorage.getItem('pd-solid-token')

      if (!storageToken) setToken(undefined)
      else setToken(storageToken)
    } catch (error) {
      setToken(undefined)
    }
  }

  const signIn = async ({ email, password }: { email: string; password: string }) => {
    setToken(email)
    localStorage.setItem('pd-solid-token', email)
  }

  const signOut = async () => {
    setToken(undefined)
    localStorage.removeItem('pd-solid-token')
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        token: token()
      }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth must be used within an AuthProvider.')

  return context
}
