import React from 'react'
import { FiAlertCircle, FiArrowLeft, FiMapPin, FiPower } from 'react-icons/fi'
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/components/sidebar.css'

type Props = {
  value: string,
}

export default function SidebarDashboard({ value }: Props) {
  const history = useHistory()
  return (
    <aside className="app-sidebar">
      <img src={mapMarkerImg} alt="Happy" />
      <main>
        {value === 'view' ? (
          <button type="button" id="map-pin-enabled" onClick={() => { history.push('/dashboard') }}>
            <FiMapPin size={24} color="#0089A5" />
          </button>
        ) : (
            <button type="button"id="map-pin-disabled" onClick={() => { history.push('/dashboard') }}>
              <FiMapPin size={24} color="#FFF" />
            </button>
          )}

        {value === 'pendings' ? (
          <button type="button" id="map-alert-enabled" onClick={() => { history.push('/pendings') }}>
            <FiAlertCircle size={24} color="#0089A5" />
          </button>
        ) : (
            <button type="button" id="map-alert-disabled" onClick={() => { history.push('/pendings') }}>
              <FiAlertCircle size={24} color="#FFF" />
            </button>
          )}

      </main>
      <footer>
        <button type="button" onClick={() => { history.push('/') }}>
          <FiPower size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  )
}