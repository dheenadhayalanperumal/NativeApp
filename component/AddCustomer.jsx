import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
    ScrollView,
    TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from '@react-navigation/native';


const Logo = require("../Image/Logo1.png");

const AddCustomer = () => {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({
        customer: "",
        initial: "",
        customerId: "",
        TKTno: "",
        mobile: "",
        chitGroup: "",
        profession: "",
        annualIncome: "",
        dateOfBirth: "",
        maritalStatus: "",
        relatives: "",
        vehicle: "",
        house: "",
        photo: "",
        fatherName: "",
        motherName: "",
        brotherName: "",
        sisterName: "",
      });
  
      const handleChangeText = (name, value) => {
        setFormData({ ...formData, [name]: value });
      };

      const handleSave = () => {
    //   alert("Data Saved",formData);
      navigation.navigate('AddCustomer1', {formData: formData});
        // console.log(formData);
      };


  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Image style={styles.logo} source={Logo} />
      </View>
      <View style={styles.form}>
      <ScrollView contentContainerStyle={{ justifyContent: 'center' }}  showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <Text style={styles.text}>Customer name</Text>
          <TextInput
            style={styles.input}
            value={formData.customer}
            onChangeText={(text) => handleChangeText("customer", text)}
           
          />

          <Text style={styles.text}>Initial</Text>
          <TextInput
            style={styles.input}
            value={formData.initial}
            onChangeText={(text) => handleChangeText("initial", text)}
         
          />
          <Text style={styles.text}>Customer ID</Text>
          <TextInput
            style={styles.input}
            value={formData.customerId}
            onChangeText={(text) => handleChangeText("customerId", text)}
            
          />
            <Text style={styles.text}>TKT No</Text>
          <TextInput
            style={styles.input}
            value={formData.TKTno}
            onChangeText={(text) => handleChangeText("TKTno", text)}
            
          />

<Text style={styles.text}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            value={formData.mobile}
            onChangeText={(text) =>handleChangeText("mobile", text)}
            
          />
  <Text style={styles.text}>Chit Group</Text>
          <TextInput
            style={styles.input}
            value={formData.chitGroup}
            onChangeText={(text) => handleChangeText("chitGroup", text)}
            
          />
  <Text style={styles.text}>Profession / Business Owned</Text>
          <TextInput
            style={styles.input}
            value={formData.proffession}
            onChangeText={(text) => handleChangeText("proffession", text)}
          
          />

<Text style={styles.text}>Date of Birth</Text>
          <TextInput
            style={styles.input}
            value={formData.dateofBirth}
            onChangeText={(text) => handleChangeText("dateofBirth", text)  }
           
          />

<Text style={styles.text}>Annual Income</Text>
          <TextInput
            style={styles.input}
            value={formData.annualIncome}
            onChangeText={(text) => handleChangeText("annualIncome", text)}
            
          />


<Text style={styles.text}>Marital Status</Text>
          <TextInput
            style={styles.input}
            value={formData.maritalStatus}
            onChangeText={(text) => handleChangeText("maritalStatus", text)}
           
          />

<Text style={styles.text}>Relatives name & address</Text>
            <TextInput
                style={styles.input}
                value={formData.relatives}
                onChangeText={(text) => handleChangeText("relatives", text)}
              
            />

<Text style={styles.text}>Vechicle Owned</Text>
            <TextInput
                style={styles.input}
                value={formData.vechicle}
                onChangeText={(text) => handleChangeText("vechicle", text)}
             
            />

<Text style={styles.text}>House Owned</Text>    
            <TextInput
                style={styles.input}
                value={formData.house}
                onChangeText={(text) =>handleChangeText("house", text)}
               
            />

<Text style={styles.text}>Property Owned House/Flat/Land etc</Text>
            <TextInput
                style={styles.input}
                value={formData.house}
                onChangeText={(text) => handleChangeText("house", text)}
                
            />

<Text style={styles.text}>Photo</Text>
            <TextInput
                style={styles.input}
                value={formData.photo}
                onChangeText={(text) => handleChangeText("photo", text)}
             
            />

<Text style={styles.text}>Father's Name</Text>
            <TextInput
                style={styles.input}
                value={formData.fatherName}
                onChangeText={(text) => handleChangeText("fatherName", text)}
               
            />

<Text style={styles.text}>Mother's Name</Text>
            <TextInput
                style={styles.input}
                value={formData.motherName}
                onChangeText={(text) => handleChangeText("motherName", text)}
            
            />

<Text style={styles.text}>Brother's Name</Text>
            <TextInput
                style={styles.input}
                value={formData.brothername}
                onChangeText={(text) => handleChangeText("brothername", text)}
               
            />

<Text style={styles.text}>Sister's Name</Text>
            <TextInput
                style={styles.input}
                value={formData.sisterName}
                onChangeText={(text) => handleChangeText("sisterName", text)}
              
            />


        </View>
        </TouchableWithoutFeedback>
        <View>
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save & Next</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.space}>
    
    </View>

      </ScrollView >
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  space: {
    height: 100,
  },

  logo: {
    width: 148,
    height: 48,
    margintop: 5,
    resizeMode: "contain",
    alignSelf: "center",
  },
 header: {
    flexDirection: "row",
    justifyContent: "center",
    height: 88,
    width: "100%",
    padding: 24,
    backgroundColor: "#A20A3A",
  },
  form: {
    flexDirection: "column",
    justifyContent: "center",
    width: "90%",
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
    color: "#4A516D",
  },
  input: {
    height: 43,
    borderWidth: 1,
    borderColor: "#E6E8F0",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#A20A3A",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  textName: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  textID1: {
    fontSize: 15,
    color: "#989EB3",
    marginTop: 5,
  },
});

export default AddCustomer;