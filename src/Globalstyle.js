import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Globalstyle = StyleSheet.create({
    
    primrytext: {
        fontSize: wp('8%'),
        color: '#EDF6FF',
        // marginTop: hp('10%'),
    },
    
    Packagestxt: {
        fontSize: wp('4%'),
        color: '#EDF6FF',
        marginTop: hp('5%'),
        width: wp('80%'),
        // paddingHorizontal:('4%')
    },
    Packagebtntxt: {
        color: '#EDF6FF',
        paddingTop: hp('1%'),
        fontSize: wp('5%'),
    },
    Packagesrvcbtn:{
        borderWidth:1,
        alignItems:'center',
        width: wp('85%'),
        height: hp('7%'),
        backgroundColor:'black',
        color:'#FFFFFF',
        marginTop: hp('4%')
        
    },
    Packagebtn: {
        borderWidth: 1,
        alignItems: 'center',
        width: wp('85%'),
        height: hp('7%'),
        backgroundColor: 'black',
        color: '#FFFFFF',
        marginTop: hp('7%'),
    },

    imgdata: {
        width: wp('85%'),
        height: hp('30%'),
        marginTop: hp('5%'),
    },
    iconifo:{
        color: '#EDF6FF',
        left: wp('30%'),
    },
    iconinfostyle: {
        color: '#EDF6FF',
        bottom: hp('2%'),
        left: wp('4%'),
    },
    //reciving package
    container: {
        backgroundColor: '#1A1A1A',
        flex: 1, 
        paddingHorizontal:('5%'),
        
        textAlign: 'center',
        alignItems: 'center',
        paddingTop: hp('3%'),
    },
    label: {
        fontSize: wp('5%'),
        color: '#EDF6FF',
        marginTop: hp('2%'),
        marginLeft: wp('4%'),
    },
    rvcimg: {
        width: wp('13%'),
        height: hp('4.5%'),
        marginLeft: wp('3%'),
        // marginTop: hp('7%'),
    },
    iconcontact: {
        marginLeft: wp('55%'),
    },
    phone: {
        // fontSize: wp('6%'),
        // color: '#EDF6FF',
        // marginTop: hp('0%'),
        // marginLeft: wp('13%'),
        fontSize: wp('6%'),
        color: '#EDF6FF',
        marginLeft: wp('1%')
    },
    heading: {
        fontSize: wp('8%'),
        color: '#EDF6FF',
        marginTop: hp('3%'),
        width: wp('85%'),
        marginLeft: wp('3%'),
    },
    rvcsecondtxt: {
        fontSize: wp('3.8%'),
        color: '#EDF6FF',
        marginTop: hp('5%'),
        width: wp('85%'),
        marginLeft: wp('3%'),
    },
    rvcbtn: {
        borderWidth: 1,
        alignItems: 'center',
        width: wp('85%'),
        height: hp('7%'),
        backgroundColor: 'black',
        color: '#FFFFFF',
        marginTop: hp('25%'),
        marginBottom:hp('10%'),
        marginLeft: wp('2%'),
    },
    rvcbtnlbl: {
        color: '#EDF6FF',
        paddingTop: hp('1%'),
        fontSize: wp('5%'),
    },
    input: {
        height: hp('8%'),
        marginVertical: hp('2%'),
        borderWidth: 1,
        borderColor:"#FFFF",
        padding: wp('3%'),
        color: "#FFFF",
        fontSize: wp('5%'),
        // width:wp("80%"),
        marginHorizontal:('4%')
    },
    inputtwo: {
        // height: hp('8%'),
        // marginVertical: hp('2%'),
        // padding: wp('3%'),
        // color: "#FFFF",
        // marginLeft: wp('20%'),
        // marginTop: hp('3%'),
        // width: wp('70%'),
        // fontSize: wp('5%'),
        flex: 1, // This will make the input occupy remaining space
        height: hp('8%'),
        marginLeft: wp('2%'), // Adjust marginLeft as needed
        padding: wp('3%'),
        color: "#FFFF",
        fontSize: wp('5%'),
    },
    icon: {
        alignItems: 'flex-start',
        marginLeft: wp('40%'),
        marginTop: hp('2%'),
    },
    iconback: {
        alignItems: 'left',
        marginTop: hp('2%'),
     },
    errorone: {
        color: 'red',
        fontSize: wp('4%'),
        marginTop: hp('0%'),
        marginLeft: wp('4%'),
    },
    error: {
        color: 'red',
        fontSize: wp('4%'),
        marginTop: hp('0%'),
        marginLeft: wp('4%'),
    },
    sendbtn: {
        borderWidth: 1,
        alignItems: 'center',
        width: wp('85%'),
        height: hp('7%'),
        backgroundColor: 'black',
        color: '#FFFFFF',
        marginTop: hp('5%'),
        marginLeft: wp('4%'),
    },
    contentbg: {
        backgroundColor: '#535aff'
    },
    content: {
        width: wp('85%'),
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingVertical: hp('4%'),
    },
    locationcont: {
        paddingVertical: hp('2%'),
    },
    locationText: {
        fontSize: wp('8%'),
        color: '#fff',
    },
    Touchablebut: {
        borderRadius: wp('10%'),
        backgroundColor: '#000',
        padding: wp('3%'),
        width: wp('70%'),
    },
    Touchablebuttext: {
        color: '#fff',
        fontSize: wp('5%'),
        textAlign: 'center',
    },
    imagecontbg: {
        backgroundColor: '#000'
    },
    imagecontmain: {
        width: wp('85%'),
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    imagecont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: hp('3%'),
    },
    imagetxt: {
        textAlign: 'center',
        fontSize: wp('4%'),
        paddingTop: hp('2%'),
        color: '#fff',
    },
    image: {
        width: wp('15%'),
        height: hp('8%'),
        borderRadius: wp('2%'),
    },
    textinput: {
        backgroundColor: '#2B2B2B',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: wp('4%'),
        borderRadius: wp('4%'),
        fontSize: wp('5%'),
    },
    aroundtext: {
        fontSize: wp('5%'),
        color: 'white',
        paddingVertical: hp('2%'),
    },
    mapContainer:{
        width: wp('85%'),
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: hp('6%'),
    },
    mapCont:{
        width: '100%',
        height: hp('20%'),
    },
    rvccontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Adjust as needed
        alignItems: 'center',
        width: wp('85%'),
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: hp('0%'), // Adjust marginTop as needed
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp('85%'),
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: hp('0%'), // Adjust marginTop as needed
    },
    iconBackContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBack: {
        marginRight: wp('1%'),
    },
    iconContact: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginLeft: wp('%')
        marginRight: wp('2%'),
    },
    iconInfo: {
        marginLeft: wp('1%'), // Adjust as needed
        color:'#DADADA'
    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: wp('3%'),
        marginHorizontal: hp('4%'),
        borderRadius: 8,
        elevation: 3, 
        top:0,
      },
      headinglist: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      description: {
        fontSize: 16,
      },
    
})
