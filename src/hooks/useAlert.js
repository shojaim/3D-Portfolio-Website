import { useState } from 'react'

const useAlert = () => {
    const [alert, setsetAlert] = useState({ show: false, text: '', type:
    'danger' })

    const showAlert = ({ text, type = 'danger' }) => setsetAlert({
        show: true,
        text, 
        type
    })

    const hideAlert = () => setsetAlert({
        show: false,
        text: '',
        type: 'danger'
    })

    return { alert, showAlert, hideAlert }

}

export default useAlert