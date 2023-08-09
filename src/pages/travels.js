import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const TravelsPage = () => {
  return (
      <Layout pageTitle="Travels">
          <iframe width="100%" height = "800px" frameborder = "0" allowfullscreen allow = "geolocation" src = "//umap.openstreetmap.fr/en/map/trips_945355?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true" > </iframe><p><a href="/ / umap.openstreetmap.fr / en / map / trips_945355 ? scaleControl = false & miniMap=false & scrollWheelZoom=true & zoomControl=true & allowEdit=false & moreControl=true & searchControl=null & tilelayersControl=null & embedControl=null & datalayersControl=true & onLoadPanel=undefined & captionBar=false & captionMenus=true">See full screen</a></p>
      </Layout>
  )
}

export const Head = () => <Seo title="Travels" />

export default TravelsPage