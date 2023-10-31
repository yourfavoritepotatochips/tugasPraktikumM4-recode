<TouchableOpacity style={styles.view} onPress={() => {setModalVisible(true); setItemSelect(item)}}>
<View>
  <Modal        
    animationType="fade"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
    setModalVisible(!modalVisible);}}>
    <View style={styles.modalView}>
    <Image style={styles.modalImage} source={{uri: itemSelect.image }}/>
    <Text>{itemSelect ? itemSelect.title : 'wleowleo'}</Text>
      <View style={{ alignItems: 'center' }}>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={{ padding: 5 }}>Close</Text>
        </Pressable>
      </View>
    </View>    
  </Modal>
  <Image source={{ uri: item.image }} style={styles.image} />
  <Text style={styles.text}>{item.title}</Text>
</View>
</TouchableOpacity>

  
  
  const styles = StyleSheet.create({
    view: {
      padding: 15,
      borderBottomColor: "#dddddd",
      borderBottomWidth: 1,
    },
    image: {
      height: 200,
      width: null,
    },
    text: {
      fontSize: 18,
      paddingTop: 10,
    },
    modalView: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    modalImage: {
      height: 200,
      width: '70%',
      borderRadius: 8,
      marginBottom: 20,
    },
  });