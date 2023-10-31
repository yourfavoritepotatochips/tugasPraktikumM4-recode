import { useRef, useState } from "react";
import { View, DrawerLayoutAndroid, StatusBar } from "react-native";
import Header from "./components/header";
import GButton from "./components/button";
import Separator from "./components/separator";
import List from "./screens/list2";
import Article from "./screens/articles";


// Functional Component
const App = () => {
  // State Declaration
  const [page, setPage] = useState("list");
  // Ref Declaration
  const drawer = useRef(null);

  // Arrow Function inside Functional Component
  const changePage = (drawer, pageName) => {
    // Close Drawer
    drawer.current.closeDrawer();
    // Change state value

    setPage(pageName);
  };

  const navigationView = () => (
    <View style={{ padding: 30, backgroundColor: "#222222", flex: 1 }}>
      <GButton text="List" onPress={() => changePage(drawer, "list")} />
      <Separator height={30} />
      <GButton text="Article" onPress={() => changePage(drawer, "article")} />
      <Separator height={30} />
      <GButton text="Close" onPress={() => drawer.current.closeDrawer()} />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >
      <StatusBar style="light" backgroundColor="#AA0002" />
      <View>
        <Header drawer={drawer} />
        {page == "list" ? <List /> : page == "article" ? <Article /> : null}
      </View>      
    </DrawerLayoutAndroid>
  );
};

export default App;