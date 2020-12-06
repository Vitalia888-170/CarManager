import React from 'react';
import { connect } from 'react-redux';
import { addCar, deleteCar } from '../../redux/carsReducer';
import Manager from './manager';


class ManagerContainer extends React.Component {
   render() {
      return (
         <Manager cars={this.props.cars}
            addCar={this.props.addCar}
            deleteCar={this.props.deleteCar} />
      );
   }
}

const mapStateToProps = (state) => {
   return {
      cars: state.cars.carsList
   }
}

export default connect(mapStateToProps, { addCar, deleteCar })(ManagerContainer);