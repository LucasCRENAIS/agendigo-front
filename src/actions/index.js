export const CHANGE_LOGIN_FIELD_VALUE = 'CHANGE_LOGIN_FIELD_VALUE';
export const CHANGE_SIGNIN_FIELD_VALUE = 'CHANGE_SIGNIN_FIELD_VALUE';
export const CHANGE_SIGNIN_CUST_FIELD_VALUE = 'CHANGE_SIGNIN_CUST_FIELD_VALUE';
export const LOGIN = 'LOGIN';
export const SIGNIN = 'SIGNIN';
export const USERCONNECT = 'USERCONNECT';
export const USERSIGNIN = 'USERSIGNIN';
export const SHOWERROR = 'SHOWERROR';
export const SHOWSUCCESSIGNIN = 'SHOWSUCCESSIGNIN';
export const CITIES = 'CITIES';
export const APIDATACITIES = 'APIDATACITIES';
export const SHOWSUCCESSIGNINCUST = 'SHOWSUCCESSIGNINCUST';
export const SIGNINCUST = 'SIGNINCUST';
export const USERSIGNINCUST = 'USERSIGNINCUST';
export const CATEGORIES = 'CATEGORIES';
export const APIDATACATEGORIES = 'APIDATACATEGORIES';
export const SAVETOKEN = 'SAVETOKEN';
export const ACTIVITIES = 'ACTIVITIES';
export const APIDATAACTIVITIES = 'APIDATAACTIVITIES';
export const LOAD_TOKEN_FROM_LOCALSTORAGE = 'LOAD_TOKEN_FROM_LOCALSTORAGE';
export const LOGOUT = 'LOGOUT';
export const COMPANIES = 'COMPANIES';
export const APIDATACOMPANIES = 'APIDATACOMPANIES';
export const SERVICES = 'SERVICES';
export const APIDATASERVICES = 'APIDATASERVICES';
export const DATES = 'DATES';
export const APIDATADATES = 'APIDATADATES';
export const ISACTIVE = 'ISACTIVE';
export const APPOINTMENT = 'APPOINTMENT';
export const USERAPPOINTMENT = 'USERAPPOINTMENT';
export const MANAGE_HOURS_VALUE = 'MANAGE_HOURS_VALUE';
export const MANAGE_DATE_VALUE = 'MANAGE_DATE_VALUE';
export const SHOWSUCCESSAPPOINTMENT = 'SHOWSUCCESSAPPOINTMENT';
export const SHOWERRORAPPOINTMENT = 'SHOWERRORAPPOINTMENT';
export const MANAGE_CLOSE_MODAL = 'MANAGE_CLOSE_MODAL';





export const changeLoginFieldValue = (name, value) => ({
  type: CHANGE_LOGIN_FIELD_VALUE,
  name: name,
  value: value,
});

export const changeSigninFieldValue = (name, value) => ({
  type: CHANGE_SIGNIN_FIELD_VALUE,
  name: name,
  value: value,
});

export const changeSigninCustFieldValue = (name, value) => ({
  type: CHANGE_SIGNIN_CUST_FIELD_VALUE,
  name: name,
  value: value,
});

export const login = () => ({
  type: LOGIN,
});

export const userConnect = (apiData) => ({
  type : USERCONNECT,
  apiData: apiData,
});

export const signin = () => ({
  type: SIGNIN,
});

export const userSignin = (apiSiginData) => ({
  type : USERSIGNIN,
  apiSiginData: apiSiginData,
});



//Signin Customers

export const signinCust = () => ({
  type: SIGNINCUST,
});

export const userSigninCust = (apiSiginCustData) => ({
  type : USERSIGNINCUST,
  apiSiginCustData: apiSiginCustData,
});


export const showmessageSuccesSigninCust = (signinmessageSuccesCust) => ({
  type : SHOWSUCCESSIGNINCUST,
  signinmessageSuccesCust:signinmessageSuccesCust,

});

//



export const showmessageSuccesSignin = (signinmessageSucces) => ({
  type : SHOWSUCCESSIGNIN,
  signinmessageSucces:signinmessageSucces,

});


export const showError = (messageError) => ({
  type : SHOWERROR,
  messageError:messageError,

});

// Cities
export const  citiesDisplay= () => ({
  type: CITIES,
  //citiesData:citiesData,
});

export const saveCities = (citiesData) => ({
  type : APIDATACITIES,
  citiesData,
})



// Categories

export const  categoriesDisplay= () => ({
  type: CATEGORIES,
  //citiesData:citiesData,
});

export const saveCategories = (categoriesData) => ({
  type : APIDATACATEGORIES,
  categoriesData,
})

//Gestion du Token
export const saveToken = (TokenStorage) => ({
  type : SAVETOKEN,
  TokenStorage,
});


// Activities

export const  activitiesDisplay = (city) => ({
  type: ACTIVITIES,
  city,
  //citiesData:citiesData,
});

export const saveActivities = (activitiesData) => ({
  type : APIDATAACTIVITIES,
  activitiesData,
});

// Companies

export const companiesDisplay = (city, name) => ({
  type: COMPANIES,
  city,
  name,
});

export const saveCompanies = (companiesData) => ({
  type : APIDATACOMPANIES,
  companiesData,
});

// Services

export const servicesDisplay = (id) => ({
  type: SERVICES,
 id,
});

export const saveServices = (servicesData) => ({
  type : APIDATASERVICES,
  servicesData,
});


// Dates

export const datesDisplay = (id, idService) => ({
  type: DATES,
  id,
  idService,
  
});

export const saveDates = (datesData) => ({
  type : APIDATADATES,
  datesData,
});


export const isActive = (isActive) => ({
  type : ISACTIVE,
  isActive,
});

// Appointments

export const appointment = (id,idService) => ({
  type : APPOINTMENT,
  id,
  idService,
});

export const userAppointement = (apiDataAppointment) => ({
  type : USERAPPOINTMENT,
  apiDataAppointment: apiDataAppointment,
});


export const manageHoursValue = (name, value) => ({
  type: MANAGE_HOURS_VALUE,
  name: name,
  value: value,
});


export const manageDateValue = (name, value) => ({
  type: MANAGE_DATE_VALUE,
  name: name,
  value: value,
});

export const showmessageSuccesAppointment = (appointmentmessageSucces) => ({
  type : SHOWSUCCESSAPPOINTMENT,
  appointmentmessageSucces:appointmentmessageSucces,

});
export const showmessageErrorAppointment = (appointmentmessageError) => ({
  type : SHOWERRORAPPOINTMENT,
  appointmentmessageError:appointmentmessageError,

});




export const manageCloseModal = () => ({
  type : MANAGE_CLOSE_MODAL,
 

});