import Address from "./address/Address";
import Company from "./company/Company";
export default function User({id,name,username,email,phone,website,address,company}) {
    return (
        <div className={"user"}>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>{username}</h3>
            <h3>{email}</h3>
            <h3>{phone}</h3>
            <h3>{website}</h3>
            <Address
                street={address.street}
                suite={address.suite}
                city={address.city}
                zipcode={address.zipcode}
                geo={address.geo}
            />
            <Company
                name={company.name}
                catchPhrase={company.catchPhrase}
                bs={company.bs}
            />
        </div>
    );
}