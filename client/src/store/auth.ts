import { atom } from 'recoil'

// TODO: displayName, photoURLの型をstringにしたいが、authFucntionでは、格納する際、型がstrirng | nullであるため、エラーを吐く
type userState = {
  uid: string
  displayName: any
  photoURL: any
}

export const signInUserState = atom<userState>({
  key: 'auth/signIn',
  default: {
    uid: '',
    displayName: '',
    photoURL: '',
  },
})
