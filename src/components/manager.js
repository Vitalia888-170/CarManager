import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Button, Modal, TextInput } from 'react-native';
import { Table, TableWrapper, Cell } from 'react-native-table-component';


class Manager extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         modalVisible: false,
         brand: '',
         type: '',
         model: ''
      }
   }


   submit() {
      console.warn(this.state);
      this.props.addCar(this.state);
   }

   render() {
      const { modalVisible } = this.state;
      const element = (data, index) => (
         <TouchableOpacity onPress={() => this.props.deleteCar(id)}>
            <View style={styles.btn}>
               <Text style={styles.btnText}>X</Text>
            </View>
         </TouchableOpacity >
      );


      const tableData = [];
      let carsList = this.props.cars;
      carsList.forEach(element => {
         tableData.push(Object.values(element));
      })



      return (
         <ScrollView style={styles.container}>
            <View style={styles.centeredView}>
               <Modal
                  animationType="fade"
                  transparent={true}
                  visible={modalVisible}
               >
                  <View style={styles.centeredView}>
                     <View style={styles.modalView}>
                        <Text style={styles.modalText}>Add new car to your table</Text>
                        <TextInput
                           style={styles.input}
                           onChangeText={(text) => { this.setState({ type: text }) }}
                           placeholder="Car/Motorcycle"
                           value={this.state.typeValue}
                        />
                        <TextInput
                           style={styles.input}
                           onChangeText={(text) => { this.setState({ brand: text }) }}
                           placeholder="Brand"
                           value={this.state.brandValue}
                        />
                        <TextInput
                           style={styles.input}
                           onChangeText={(text) => { this.setState({ model: text }) }}
                           placeholder="Model"
                           value={this.state.modelValue}
                        />

                        <Button
                           style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                           title="submit"
                           onPress={() => {
                              this.setState({ modalVisible: false })
                              this.submit();
                           }}
                        />

                     </View>
                  </View>
               </Modal>
            </View>
            <View>
               <Button
                  title="Add car"
                  onPress={() => {
                     this.setState({ modalVisible: true })
                  }} />
            </View>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
               {
                  tableData.map((rowData, index) => (
                     <TableWrapper key={index} style={styles.row}>
                        {
                           rowData.map((cellData, cellIndex) => (
                              <Cell key={cellIndex} data={cellIndex === 4 ? element(cellData, index) : cellData} textStyle={styles.text} />
                           ))
                        }
                     </TableWrapper>
                  ))
               }
            </Table>
         </ScrollView>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 16,
      paddingTop: 30,
      backgroundColor: '#fff'
   },
   head: {
      height: 60,
      backgroundColor: '#808B97'
   },
   text: {
      margin: 6,
      textAlign: 'center'
   },
   row: {
      flexDirection: 'row',
      backgroundColor: '#FFF1C1',
      height: 60
   },
   btn: {
      width: 20,
      height: 18,
      backgroundColor: 'red',
      borderRadius: 2,
      marginLeft: 40
   },
   btnText: {
      textAlign: 'center',
      color: '#fff'
   },
   centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",

   },
   modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 10,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
   },
   openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
   },
   textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
   },
   modalText: {
      marginBottom: 15,
      textAlign: "center"
   },
   input: {
      height: 40,
      width: 200,
      borderColor: 'gray',
      borderWidth: 1,
      textAlign: "center",
      marginBottom: 20
   }
});

export default Manager;