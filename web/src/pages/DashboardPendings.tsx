import React, { useEffect, useState } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";

import '../styles/pages/dashboard.css';
import mapIcon from "../utils/mapIcon";
import noContent from "../images/no-content.svg";
import { FiArrowLeft, FiArrowRight, FiEdit3, FiTrash } from "react-icons/fi";
import SidebarDashboard from "../components/SidebarDashboard";
import { useHistory } from "react-router-dom";
import api from "../services/api";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{ id: number; url: string; }>;
}

interface OrphanageParams {
  id: string
}


export default function DashboardPendings() {
  const history = useHistory()
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])
  useEffect(() => {
    api.get('pendinglist').then(response => {
      setOrphanages(response.data)
    })
  }, [])

  function handleEditNavigation(id: number) {

    history.push(`/orphanages/${id}`)
  }

  return (
    <div id="page-dashboard">

      <SidebarDashboard value="pendings" />
      <div className="cards-container">
        <header>
          <h1>Cadastros pendentes</h1>
          <h2>{orphanages.length} orfanatos</h2>
        </header>
        <main>
          <hr />
          <div className="map-container">
            {orphanages.length>0?(
              orphanages.map(orphanage => {
              return (
                <div className="map">
                  <Map
                    key={orphanage.id}
                    center={[orphanage.latitude, orphanage.longitude]}
                    zoom={16}
                    style={{ width: '100%', height: 227, borderRadius: 20 }}
                    dragging={false}
                    touchZoom={false}
                    zoomControl={false}
                    scrollWheelZoom={false}
                    doubleClickZoom={false}
                  >
                    <TileLayer
                      url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                    />
                    <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]} />
                  </Map>

                  <div className="map-controlls">
                    <p>{orphanage.name}</p>
                    <button type="button" className="map-delete-button" onClick={() => { handleEditNavigation(orphanage.id) }}>
                      <FiArrowRight size={24} color="#15C3D6" />
                    </button>
                  </div>
                </div>
              )
              
            })
            ) :(
              <div  className="no-content-img">
                <img src={noContent} alt="No Content"/>
              </div>
            )
          }
          </div>
        </main>
      </div>
    </div>
  );
}