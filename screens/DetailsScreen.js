import React, { useState } from 'react';
import {Image, Text, View, StyleSheet,FlatList } from 'react-native';
const [images, setimages] = useState([
  require('./asset/leadguitar.jpg'),
  require('./asset/nords.jpg'),
  require('./asset/yamaha-motif.jpg'),
  require('./asset/nord2.jpg'),
  require('./asset/sustainpedal.jpg'),
  require('./asset/effectboard.jpg'),
  require('./asset/drums.jfif'),

   
  ]);

const Details =() => {
    return(
        <FlatList
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        data={images}
        renderItem={ ({ item, index }) => (
          <Image source={item} /* Use item to set the image source */
            key={index} /* Important to set a key for list items,
                           but it's wrong to use indexes as keys, see below */
            style={{
              width:260,
              height:300,
              borderWidth:2,
              borderColor:'#d35647',
              resizeMode:'contain',
              margin:8
            }}
          />
        )}
      />
        
       
        



       
    )
}


export default Details