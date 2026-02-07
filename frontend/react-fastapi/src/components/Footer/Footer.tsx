import './Footer.css'
import MR_logo from '../../assets/MR.png'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function Footer() {
  const [dateTime, setDateTime] = useState(new Date())
  const { i18n } = useTranslation()

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="layout-footer">
        <div className="row">
          <div className="col-4 sx layout-logo">
            <img src={MR_logo} alt="" className="logo-img" />Mauro Rosato
          </div>

          <div className="col-4 center">
            <div className={`language-selector lang-${i18n.language}`}>
              <select
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
              >
                <option value="it">🇮🇹 Italiano</option>
                <option value="en">🇬🇧 English</option>
                <option value="es">🇪🇸 Español</option>
                <option value="de">🇩🇪 Deutsch</option>
                <option value="fr">🇫🇷 Français</option>
              </select>
            </div>
          </div>

          <div className="col-4 dx">
            <div className="layout-datetime">
              {dateTime.toLocaleDateString()} —{' '}{dateTime.toLocaleTimeString()}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer