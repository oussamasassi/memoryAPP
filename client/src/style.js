import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    // le contenu sous forme de columne
    flexDirection: "column",
    //le contenu centré par rapport au conteneur
    justifyContent: "center",

    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  [theme.breakpoints.down("xs")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
