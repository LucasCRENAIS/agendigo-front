import axios from 'axios';


import { 
  LOGIN,
  LOGOUT,
  SIGNIN,
  userSignin,
  userConnect,
  showError,
  CITIES,
  saveCities,
  showmessageSuccesSignin,
  showmessageSuccesSigninCust,
  SIGNINCUST, userSigninCust,
  CATEGORIES, saveCategories,
  saveActivities,ACTIVITIES,
  LOAD_TOKEN_FROM_LOCALSTORAGE,
  COMPANIES,
  saveCompanies,
  SERVICES,
  saveServices,
  saveDates,
  DATES,
  APPOINTMENT,
  userAppointement,
  showmessageSuccesAppointment,
  showmessageErrorAppointment,



  } from '../actions';
 
const auth = (store) => (next) => (action) => {
  switch (action.type) {

  case LOGOUT:
    localStorage.removeItem('token');
    next(action);
    break;

  case LOAD_TOKEN_FROM_LOCALSTORAGE:
    const data = JSON.parse(localStorage.getItem('token'));
    if (data){
      store.dispatch(userConnect(data));
    }    
    next(action);
    break;

  case LOGIN: {
      const { username, password } = store.getState().login;
      const {token} = store.getState().login;
      console.log('je suis dans email', username);
      console.log('je suis dans password', password);
      // effectuer mon appel à l'api
      axios.post('https://agendigo.herokuapp.com/api/v1/login_check', { headers: {
        Authorization: `Bearer ${token}`,
      },
      username,
      password,
      })
        .then((response) => {
          console.log('users:',response)
          store.dispatch(userConnect(response.data));
          
          localStorage.setItem('token', JSON.stringify(response.data));
          
          console.log('je suis dans le localStorage',localStorage);
        })
        .catch((error) => {
     
          store.dispatch(showError('Oops ! votre email et/ou votre mot de passe sont erronés'));
          
        });

        next(action);
      // avaler l'action (pas de next)
      break;
    }


    case SIGNIN: {
      const { email, password, company_name, siren_number, firstname, lastname, category_id, activity_id } = store.getState().signin;

      console.log('je suis dans email', email);
      console.log('je suis dans password', password);
      // effectuer mon appel à l'api
      axios.post('https://agendigo.herokuapp.com/api/v1/signin', {
        email,
        password,
        company_name,
        siren_number,
        firstname,
        lastname,
        category_id,
        activity_id,
      })
        .then((response) => {
          console.log('inscription',response)
          store.dispatch(userSignin(response.data));
          store.dispatch(showmessageSuccesSignin('Votre inscription a été effectuée avec succès'))
        })
        .catch((error) => {
     
         window.alert('OOPs ! erreur lors de l\'inscription');
          
        });

        next(action);
      // avaler l'action (pas de next)
      break;
    }


    case SIGNINCUST: {
      const { email, password,  firstname, lastname } = store.getState().signinCust;

      // effectuer mon appel à l'api
      axios.post('https://agendigo.herokuapp.com/api/v1/signin', {
        email,
        password,
        firstname,
        lastname,
      
      })
        .then((response) => {
          console.log('inscription custommers',response)
          store.dispatch(userSigninCust(response.data));
          store.dispatch(showmessageSuccesSigninCust('Votre inscription en tant que particulier a été effectuée avec succès'))
        })
        .catch((error) => {
     
         window.alert('Oops ! erreur lors de l\'inscription');
          
        });

        next(action);
      // avaler l'action (pas de next)
      break;
    }

    case CITIES: {
      
      // effectuer mon appel à l'api
      axios.get('https://agendigo.herokuapp.com/api/v1/cities/')
        .then((response) => {
          
          store.dispatch(saveCities(response.data));
          
        })
        .catch((error) => {
     console.error(error);
        });
        next(action);
        break;

      }

      case CATEGORIES: {
        // effectuer mon appel à l'api
        axios.get('https://agendigo.herokuapp.com/api/v1/')
          .then((response) => {
            console.log('categories:',response)
            store.dispatch(saveCategories(response.data));
            
          })
          .catch((error) => {
       console.error('erreur Catégories',error);
          });
          next(action);
          break;
  
        }

        case ACTIVITIES: {
      
          // effectuer mon appel à l'api
         // je récupère le tableau d'objet cities depuis le store
         console.log('Palyload Activities',action);
          axios.get(`https://agendigo.herokuapp.com/api/v1/cities/${action.city}/activities`, {
     
          })
            .then((response) => {
              store.dispatch(saveActivities(response.data));
              
            })
            .catch((error) => {
         console.error(error);
            });
            next(action);
            break;
    
          }


          case COMPANIES: {

             axios.get(`https://agendigo.herokuapp.com/api/v1/cities/${action.city}/activities/${action.name}/list`, {
         
            })
              .then((response) => {
                store.dispatch(saveCompanies(response.data));
                
              })
              .catch((error) => {
           console.error(error);
              });
              next(action);
              break;
      
            }


            case SERVICES: {
              console.log('Payload Companies',action);
               axios.get(`https://agendigo.herokuapp.com/api/v1/company/${action.id}/services`, {
           
              })
                .then((response) => {
                  store.dispatch(saveServices(response.data));
                  
                })
                .catch((error) => {
             console.error(error);
                });
                next(action);
                break;
        
              }
         
              case DATES: {

                console.log('Payload DATES',action);
                 axios.get(`https://agendigo.herokuapp.com/api/v1/company/${action.id}/services/${action.idService}`, {
                
                })
                  .then((response) => {
                    console.log('DATES Data:',response);
                    store.dispatch(saveDates(response.data));
                  
                    
                  })
                  .catch((error) => {
               console.error(error);
                  });
                  next(action);
                  break;
          
                }

                case APPOINTMENT: {
                  
                  const token = JSON.parse(localStorage.getItem('token')).token;
                  const { date, hours} = store.getState().services;
                  const service_id = action.idService;
             
                  // effectuer mon appel à l'api
                  axios.post(`https://agendigo.herokuapp.com/api/v1/appointments/company/${action.id}/create`, {
                  date,
                  hours,
                  service_id,
                  },{
                    headers: {
                      
                      Authorization: `Bearer ${token}`,
                      'Content-Type': 'application/json',
                    }})
                    .then((response) => {
                      console.log('Appointment:',response)
                     
                      store.dispatch(userAppointement(response.data));
                      
                      store.dispatch(showmessageSuccesAppointment('Votre RDV a bien été pris, un mail vient de vous être envoyé'))
                    
                    })
                    .catch((error) => {
              
                      store.dispatch(showmessageErrorAppointment('Oops ! Veuillez selectionner un créneau horaire pour réserver ce RDV'))
                
                    });
                 
                    next(action);
                  // avaler l'action (pas de next)
                  break;
                }

    
    default:
      next(action);
  }
};

export default auth;
