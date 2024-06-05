import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  tit:{
      fontSize: 45,
      fontWeight: "bold",
       marginTop:80,
       textAlign:"center"
  },
  linha: {
    height: 3, 
    width: '18%',  
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'white', 
  },

});

export default styles;
