/*Взяти масив usersList.
    Створити компонент,котрий характеризує юзера.
    Створити компонент,котрий характеризує підоб'єкт юзера address. Використати в компоненті юзера.
Створити компонент,котрий характеризує підоб'єкт адреси юзера geo. Використати в компоненті адреси.
Вкладеність компонентів : App->Users->User->Address->Geo
Вивести всі об'єкти з масиву*/

import './App.css';
import User from "./components/user/User";

let users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618'
      }
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains'
    }
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: '-68.6102',
        lng: '-47.0653'
      }
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications'
    }
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: {
        lat: '29.4572',
        lng: '-164.2990'
      }
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services'
    }
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: {
        lat: '-31.8129',
        lng: '62.5342'
      }
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems'
    }
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: {
        lat: '-71.4197',
        lng: '71.7478'
      }
    },
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications'
    }
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: {
        lat: '24.8918',
        lng: '21.8984'
      }
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers'
    }
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: {
        lat: '-14.3990',
        lng: '-120.7677'
      }
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers'
    }
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: {
        lat: '24.6463',
        lng: '-168.8889'
      }
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies'
    }
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: {
        lat: '-38.2386',
        lng: '57.2232'
      }
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models'
    }
  }
];

export default function App() {
  return (
    <div className="users">
    <User id={users[0].id}
          name={users[0].name}
          username={users[0].username}
          email={users[0].email}
          phone={users[0].phone}
          website={users[0].website}
          address={users[0].address}
          company={users[0].company}
    />
      <User id={users[1].id}
            name={users[1].name}
            username={users[1].username}
            email={users[1].email}
            phone={users[1].phone}
            website={users[1].website}
            address={users[1].address}
            company={users[1].company}
      />
      <User id={users[2].id}
            name={users[2].name}
            username={users[2].username}
            email={users[2].email}
            phone={users[2].phone}
            website={users[2].website}
            address={users[2].address}
            company={users[2].company}
      />
      <User id={users[3].id}
            name={users[3].name}
            username={users[3].username}
            email={users[3].email}
            phone={users[3].phone}
            website={users[3].website}
            address={users[3].address}
            company={users[3].company}
      />
      <User id={users[4].id}
            name={users[4].name}
            username={users[4].username}
            email={users[4].email}
            phone={users[4].phone}
            website={users[4].website}
            address={users[4].address}
            company={users[4].company}

      />
      <User id={users[5].id}
            name={users[5].name}
            username={users[5].username}
            email={users[5].email}
            phone={users[5].phone}
            website={users[5].website}
            address={users[5].address}
            company={users[5].company}
      />
      <User id={users[6].id}
            name={users[6].name}
            username={users[6].username}
            email={users[6].email}
            phone={users[6].phone}
            website={users[6].website}
            address={users[6].address}
            company={users[6].company}
      />
      <User id={users[7].id}
            name={users[7].name}
            username={users[7].username}
            email={users[7].email}
            phone={users[7].phone}
            website={users[7].website}
            address={users[7].address}
            company={users[7].company}
      />
      <User id={users[8].id}
            name={users[8].name}
            username={users[8].username}
            email={users[8].email}
            phone={users[8].phone}
            website={users[8].website}
            address={users[8].address}
            company={users[8].company}
      />
      <User id={users[9].id}
            name={users[9].name}
            username={users[9].username}
            email={users[9].email}
            phone={users[9].phone}
            website={users[9].website}
            address={users[9].address}
            company={users[9].company}
      />

    </div>
  );
}


