import React from "react";
import { View, Text ,TouchableOpacity, Image} from 'react-native';
import { Globalstyle } from "./Globalstyle";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Packages = () => {
    const navigation = useNavigation()  
    return (
            
        <View style={Globalstyle.container}>
        <View style={Globalstyle.headerContainer}>

        <TouchableOpacity style={Globalstyle.iconBackContainer} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={25} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity style={Globalstyle.iconContact}>
          <FontAwesome name="info-circle" size={15} color={"#EDF6FF"} /><Text style={Globalstyle.iconInfo}>What to send</Text>
          </TouchableOpacity>
        </View>
            
            
        
            <View style={Globalstyle.cntalin} >
                <View>
                <Image
                source={require('../assets/Images/img.png')}
                style={Globalstyle.imgdata} 
              />
                </View>
                <View style={{top:50}}>
                
            <Text style={Globalstyle.primrytext}>Send packages with Connect</Text>
            <Text style={Globalstyle.Packagestxt}>Get it delivered in the time it takes to drive there</Text>

            <TouchableOpacity style={Globalstyle.Packagebtn} onPress={() => {
            navigation.navigate('SendPackages')
            }}>
                <Text style={Globalstyle.Packagebtntxt} >Send a package</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={Globalstyle.Packagesrvcbtn} onPress={() => {
                navigation.navigate('RecievingPackage')
            }}>
                <Text style={Globalstyle.Packagebtntxt} >Receive a package</Text>
                    </TouchableOpacity>
                    </View>
            </View>
            </View>
    );
};

export default Packages;

// const styles = StyleSheet.create({
    

  
// });
