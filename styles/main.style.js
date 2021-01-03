export const container = {
  marginTop: 20,
  marginRight: 50,
  marginBottom: 20,
  marginLeft: 50,
  backgroundColor: "#1F1F1F",
}

export const gridContainer = {
  display: "grid",
  backgroundColor: "#1F1F1F",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr",
  gap: "0px 0px",
  gridTemplateAreas: "'. . . .''. logoContainer logoContainer .''. linksContainer linksContainer .'"
}

export const logoContainer = {
  gridArea: "logoContainer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

export const linksContainer = {
  gridArea: "linksContainer",
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  justifyContent: "space-around",
  // paddingTop: 100
}