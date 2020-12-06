const ADD_CAR = 'ADD-CAR';
const DELETE_CAR = 'DELETE-CAR';

let initialData = {
   carsList: [
      { id: "ID", model: "MODEL", brand: "BRAND", type: "TYPE", btn: '' },
      { id: 14, model: "156", brand: "Alfa Romeo", type: "Car", btn: '' },
      { id: 17, model: "206", brand: "Peugeot", type: "Car", btn: '' },
      { id: 24, model: "307", brand: "Peugeot", type: "Car", btn: '' },
      { id: 29, model: "323", brand: "Mazda", type: "Car", btn: '' },
      { id: 519, model: "WR", brand: "Yamaha", type: "Motorcycle", btn: '' },
      { id: 600, model: "Raptor", brand: "Yamaha", type: "Motorcycle", btn: '' },
   ]
};

export const carsReducer = (state = initialData, action) => {
   switch (action.type) {
      case ADD_CAR:
         return {
            ...state,
            carsList: state.carsList.concat({
               id: 601,
               model: action.data.model,
               brand: action.data.brand,
               type: action.data.type
            })
         }
      case DELETE_CAR:
         return {
            ...state,
            carsList: state.carsList.filter(id !== action.itemId)
         }
      default:
         return state;
   }
}

export const addCar = (data) => ({ action: ADD_CAR, data: { visible, type, brand, model } });
export const deleteCar = (itemId) => ({ action: DELETE_CAR, itemId });
