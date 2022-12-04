import {createRoot} from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context'

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
<AppProvider>
<BrowserRouter>
<App />
</BrowserRouter>
</AppProvider>
)