import React from "react";

// eslint-disable-next-line func-style
function GoogleMap() {
  return (
    <div className="col-12">
      <hr className="tm-hr-primary tm-mb-55" />
      <div className="gmap_canvas"> 
          <iframe width="100%" height="477" id="gmap_canvas"
              src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
      </div>
    </div> 
  );
}

export default GoogleMap;
