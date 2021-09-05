import * as admin from 'firebase-admin'
import credentials from '../../../utils/firebaseCridentials.js'

admin.initializeApp({
    credential: admin.credential.cert(credentials)
})

export default function acceptRequest(req, res) {

}