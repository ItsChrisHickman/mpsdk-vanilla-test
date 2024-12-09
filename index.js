import { setupSdk } from '@matterport/sdk'

const main = async () => {
  // Initialize SDK here
  const mpSdk = await setupSdk('zucgbhaithi4kq415d4a1p7fa', { space: 'GaCi2yTEcj4' })
  await mpSdk.App.state.waitUntil(state => state.phase === mpSdk.App.Phase.PLAYING)
  mpSdk.Camera.rotate(115, 0) 
}
main().catch(err => console.error('Error:', err))
