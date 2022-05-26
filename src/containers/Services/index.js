import { connect } from 'react-redux';
import Services from '../../components/Services';

// import de l'action creator
import { datesDisplay, servicesDisplay,manageCloseModal,appointment,manageHoursValue, manageDateValue } from '../../actions';

const mapStateToProps = (state,ownProps) => {
    console.log('services test',ownProps)
    return{
services: state.services.service,
activity:state.companies.company,
city:ownProps.city,
id:ownProps.id,
dates: state.services.dates,
isActive: state.services.isActive,
hoursAppointment:state.services.hours,
dateAppointment:state.services.date,
appointmentmessageSucces:state.services.appointmentmessageSucces,
appointmentmessageError:state.services.appointmentmessageError,
isConnected: state.login.connectedUser != null,
markersData:state.services.markersData,
}


};


const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps);

return{
    ApiServices: () => dispatch(servicesDisplay(ownProps.id)),
    manageAppointement: (idService) => dispatch(datesDisplay(ownProps.id, idService)),
    manageSubmitAppointement:(idService)  => dispatch(appointment(ownProps.id, idService)),
    managehour:(name, value)  => dispatch(manageHoursValue(name, value)),
    managedate:(name, value)  => dispatch(manageDateValue(name, value)),
    manageCloseModal:()  => dispatch(manageCloseModal()),
}

};



export default connect(mapStateToProps, mapDispatchToProps)(Services);
