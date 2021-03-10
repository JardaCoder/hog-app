import React from "react";
import * as Linking from 'expo-linking';

const abrirLink = (link) => {
    if(link)
      Linking.openURL(link)
}

const Util = {
    abrirLink: abrirLink
}

export default Util;