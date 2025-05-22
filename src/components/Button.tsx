import React from 'react';
import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';

interface Props {
  name: String;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  textStyle?: StyleProp<ViewStyle>;
}

class Button extends React.Component<Props> {
  constructor(props: Props) {
    super(props); // Pass props to the parent class (React.Component)
  }

  render(): React.ReactNode {
    return (
      <TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
        <Text style={this.props.textStyle}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
