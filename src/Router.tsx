import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { RestorePassword } from './pages/RestorePassword'
import { ResetPassword } from './pages/ResetPassword'
import { CreateUser } from './pages/CreateUser'
import { UploadCSV } from './pages/UploadCSV'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/restore-password" element={<RestorePassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/upload-csv" element={<UploadCSV />} />
    </Routes>
  )
}
