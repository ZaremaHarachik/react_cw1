import Geo from "./geo/Geo"
export default function Address({street,suite,city,zipcode,geo}) {
    return (
        <div className={"address"}>
            <h4>{street}</h4>
            <h4>{suite}</h4>
            <h4>{city}</h4>
            <h4>{zipcode}</h4>
            <Geo
                lat={geo.lat}
                lng={geo.lng}
            />

        </div>
    );
}