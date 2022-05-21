import React from "react";
import { TouchableOpacity, View } from "react-native";

import { ChatTeardropDots } from "phosphor-react-native";

import { styles } from "./styles";

export function Widget() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ChatTeardropDots />
      </TouchableOpacity>
    </View>
  );
}
