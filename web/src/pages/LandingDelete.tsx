import React, { useEffect, useState } from 'react'
import '../styles/pages/landing-delete.css'
import { Link, useHistory, useParams } from 'react-router-dom'
import api from '../services/api'


interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  pending: string;
  accepted: string;

  images: Array<{ id: number; url: string; }>;
}

interface OrphanageParams {
  id: string
}

function LandingDelete() {
  const history = useHistory()
  const params = useParams<OrphanageParams>()
  const [orphanage, setOrphanage] = useState<Orphanage>()

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data)
    })
  }, [params.id])

  if (!orphanage) {
    return <p>Carregando...</p>
  }

  async function handleDeleteButton(id:number){
    const ret =  await api.delete(`orphanages/${id}`)
    if(ret.status === 200){
      alert("Orfanato excluído com sucesso!")
      history.push('/dashboard')
    }else{
      alert("Ops! Encontramos um problema: " + ret.statusText)
    }
  }

  return (
    <div id="page-landing-delete">
      <div className="content-wrapper">
        <main>
          <h1>Excluir!</h1>
          <p>
            {`Você tem certeza que quer excluir ${orphanage?.name}?`}
          </p>
          <button onClick={() => { handleDeleteButton(orphanage.id) }} className="delete-button" type="button">
            Excluir
          </button>
          <Link to="/dashboard" className="go-back-map" type="button">
            Voltar para o dashboard
          </Link>
        </main>
      </div>
    </div>

  );
}

export default LandingDelete