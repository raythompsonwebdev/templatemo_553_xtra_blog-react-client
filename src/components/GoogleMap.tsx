
const GoogleMap = () => (
    <div className="col-12">
      <hr className="tm-hr-primary tm-mb-55" />
      <div className="gmap_canvas">
        <iframe
          title="map"
          width="100%"
          height="477"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
      </div>
    </div>
  )

export default GoogleMap;
